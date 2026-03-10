import { useState, useCallback, useMemo, useEffect } from 'react'
import { questions, archetypes } from './data'

function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function useIframeResize() {
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight
      window.parent.postMessage({ type: 'resize', height }, '*')
    }
    const observer = new ResizeObserver(sendHeight)
    observer.observe(document.body)
    sendHeight()
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [screen, setScreen] = useState('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [scores, setScores] = useState({ CC: 0, OG: 0, AH: 0, ES: 0, KM: 0 })
  const [answerOrder, setAnswerOrder] = useState([])
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)
  const [animKey, setAnimKey] = useState(0)

  useIframeResize()

  // Shuffle answers for each question on mount
  const shuffledQuestions = useMemo(() => {
    return questions.map(q => ({
      ...q,
      answers: shuffleArray(q.answers),
    }))
  }, [])

  // Track order of first scores for tiebreaking
  const [firstScored, setFirstScored] = useState([])

  const handleBegin = useCallback(() => {
    setScreen('question')
    setAnimKey(k => k + 1)
  }, [])

  const handleAnswer = useCallback((archetype) => {
    const newScores = { ...scores, [archetype]: scores[archetype] + 1 }
    setScores(newScores)

    // Track first time each archetype scores (for tiebreaking)
    setFirstScored(prev => {
      if (prev.includes(archetype)) return prev
      return [...prev, archetype]
    })

    if (currentQ < questions.length - 1) {
      setTimeout(() => {
        setCurrentQ(currentQ + 1)
        setAnimKey(k => k + 1)
      }, 300)
    } else {
      // Quiz complete, go to email
      setTimeout(() => {
        // Calculate result
        const maxScore = Math.max(...Object.values(newScores))
        const tied = Object.keys(newScores).filter(k => newScores[k] === maxScore)

        let winner
        if (tied.length === 1) {
          winner = tied[0]
        } else {
          // First scored wins tiebreak
          const updatedFirst = firstScored.includes(archetype) ? firstScored : [...firstScored, archetype]
          winner = updatedFirst.find(a => tied.includes(a)) || tied[0]
        }

        setResult(winner)
        setScreen('email')
        setAnimKey(k => k + 1)
      }, 300)
    }
  }, [scores, currentQ, firstScored])

  const handleSubmitEmail = useCallback(async (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          archetype: archetypes[result].tag,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setScreen('result')
      setAnimKey(k => k + 1)
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }, [email, result])

  const handleSkipEmail = useCallback(() => {
    setScreen('result')
    setAnimKey(k => k + 1)
  }, [])

  const archetype = result ? archetypes[result] : null

  return (
    <div className="screen">
      <div className="bg-image" />
      <div className="bg-overlay" />

      {screen === 'intro' && (
        <div className="intro-content" key={`intro-${animKey}`}>
          <div className="intro-eyebrow fade-up d1"><span className="spade">&#9824;</span>&ensp;Karen Fahey Magi&ensp;<span className="spade">&#9824;</span></div>
          <div className="intro-title fade-up d2">Discover Your<br />Soul Archetype</div>
          <div className="intro-divider fade-up d3" />
          <div className="intro-body fade-up d4">Your soul carries an ancient protective pattern. 5 soul archetypes. One of them is yours. Find out what's been keeping you in dissonance to your desires.</div>
          <button className="intro-btn fade-up d5" onClick={handleBegin}>
            <span className="spade">&#9824;</span>&ensp;Take the Quiz
          </button>
          <div className="intro-footer fade-up d6">6 questions. Under 2 minutes.</div>
        </div>
      )}

      {screen === 'question' && (
        <div className="screen-inner" key={`q-${currentQ}-${animKey}`}>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
            />
          </div>
          <div className="question-number fade-up d1">
            Question {currentQ + 1} of {questions.length}
          </div>
          <div className="question-text fade-up d2">
            {shuffledQuestions[currentQ].text}
          </div>
          {shuffledQuestions[currentQ].answers.map((answer, i) => (
            <button
              key={i}
              className={`answer-option fade-up d${i + 3}`}
              onClick={() => handleAnswer(answer.archetype)}
            >
              {answer.text}
            </button>
          ))}
        </div>
      )}

      {screen === 'email' && (
        <div className="email-screen-inner" key={`email-${animKey}`}>
          <div className="email-heading fade-up d1">Your result is ready.</div>
          <div className="email-subtext fade-up d2">
            Enter your email to reveal the subconscious pattern that's been keeping you in dissonance to your desires.
          </div>
          <form onSubmit={handleSubmitEmail}>
            <input
              type="email"
              className="email-input fade-up d3"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
            />
            <button
              type="submit"
              className="reveal-btn fade-up d4"
              disabled={submitting}
            >
              <span className="spade">&#9824;</span>&ensp;{submitting ? 'Revealing...' : 'Reveal My Soul Archetype'}
            </button>
          </form>
          <div className="email-privacy fade-up d5">No spam. Just insight. Unsubscribe anytime.</div>
          {error && <div className="email-error">{error}</div>}
        </div>
      )}

      {screen === 'result' && archetype && (
        <div className="screen-inner" key={`result-${animKey}`}>
          <div className="result-label fade-up d1">Your Soul Archetype</div>
          <div className="result-archetype fade-up d2">{archetype.name}</div>
          <div className="result-divider fade-up d3" />
          <div className="result-section-label fade-up d3">What's Running Beneath the Surface</div>
          <div className="result-body fade-up d4">{archetype.beneath}</div>
          <div className="result-quote fade-up d5">{archetype.quote}</div>
          <div className="result-section-label fade-up d6">Your Higher Expression</div>
          <div className="result-body fade-up d7">{archetype.higher}</div>
          <div className="divider-line" />
          <div className="result-cta-box fade-up d8">
            <div className="cta-eyebrow">This is what we recode</div>
            <div className="cta-headline">How to Trust Your Decisions Without Waiting for Certainty</div>
            <div className="cta-price">$33</div>
            <a href="#" className="cta-btn" target="_blank" rel="noopener noreferrer">
              <span className="spade">&#9824;</span>&ensp;Start Recoding
            </a>
          </div>
          <div className="secondary-cta fade-up d9">
            <div className="secondary-cta-text">Want to go deeper? This is exactly what we explore in a session.</div>
            <a href="https://calendly.com/karenfaheymagi" target="_blank" rel="noopener noreferrer">Book With Me</a>
          </div>
          <div className="result-footer">
            <div className="signature">&#9824; &#10022; &#9824;</div>
          </div>
        </div>
      )}
    </div>
  )
}
