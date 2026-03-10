export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, archetype } = req.body

  if (!email || !archetype) {
    return res.status(400).json({ error: 'Email and archetype are required.' })
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
  const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX

  if (!API_KEY || !AUDIENCE_ID || !SERVER_PREFIX) {
    console.error('Missing Mailchimp environment variables')
    return res.status(500).json({ error: 'Server configuration error.' })
  }

  const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `apikey ${API_KEY}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        tags: [archetype],
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      // Member already exists is not a failure for our purposes
      if (data.title === 'Member Exists') {
        // Update their tags instead
        const subscriberHash = data.detail.match(/[a-f0-9]{32}/)?.[0]
        if (subscriberHash) {
          await fetch(
            `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}/tags`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `apikey ${API_KEY}`,
              },
              body: JSON.stringify({
                tags: [{ name: archetype, status: 'active' }],
              }),
            }
          )
        }
        return res.status(200).json({ success: true })
      }

      console.error('Mailchimp error:', data)
      return res.status(400).json({ error: 'Could not subscribe. Please try again.' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Mailchimp request failed:', err)
    return res.status(500).json({ error: 'Server error. Please try again.' })
  }
}
