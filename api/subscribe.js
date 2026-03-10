import crypto from 'crypto'

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

  const subscriberHash = crypto
    .createHash('md5')
    .update(email.toLowerCase().trim())
    .digest('hex')

  const baseUrl = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `apikey ${API_KEY}`,
  }

  try {
    // PUT upserts: creates if new, updates if existing
    const response = await fetch(`${baseUrl}/${subscriberHash}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        email_address: email,
        status_if_new: 'subscribed',
      }),
    })

    if (!response.ok) {
      const data = await response.json()
      console.error('Mailchimp upsert error:', data)
      return res.status(400).json({ error: 'Could not subscribe. Please try again.' })
    }

    // Add tags via the tags endpoint (works for both new and existing)
    const tagResponse = await fetch(`${baseUrl}/${subscriberHash}/tags`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        tags: [
          { name: archetype, status: 'active' },
          { name: 'Soul Archetype Quiz', status: 'active' },
        ],
      }),
    })

    if (!tagResponse.ok) {
      const tagData = await tagResponse.json()
      console.error('Mailchimp tag error:', tagData)
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Mailchimp request failed:', err)
    return res.status(500).json({ error: 'Server error. Please try again.' })
  }
}
