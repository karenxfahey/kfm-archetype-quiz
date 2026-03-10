# KFM Archetype Quiz: Build Prompt for Vex

## Project Overview

Build a web-based quiz app called "KFM Archetype Quiz" for karenfaheymagi.com. The quiz identifies a person's dominant "dissonance archetype," the type of subconscious protective pattern keeping them in dissonance with what they desire. It will be embedded on a Squarespace page via iframe.

**Tech stack:** React (or vanilla HTML/CSS/JS, your call on what's cleanest), hosted on Vercel, with a serverless API route for Mailchimp integration.

**GitHub repo:** kfm-archetype-quiz

---

## The Quiz Flow

1. **Landing/intro screen:** Brief text introducing the quiz. A single "Begin" button.
2. **6 questions:** One question per screen. 5 answer options per question. User taps an answer, it auto-advances to the next question after a brief transition. Progress bar at the top.
3. **Email capture screen:** "Your result is ready." Single email input + "Reveal My Pattern" button. This gates the result.
4. **Result screen:** Personalized archetype reveal with the copy specified below.

---

## Quiz Questions and Scoring

Each answer maps to one archetype. Each question's answer options must be displayed in a **randomized order** every time the quiz loads, so no archetype is consistently in the same position (A, B, C, D, E). The scoring is simple: each answer adds 1 point to its archetype. Highest score at the end = the result. In case of a tie, show the archetype that scored its point earliest in the quiz (first impression wins).

**The 5 archetypes and their keys:**
- CC = The Creature of Comfort
- OG = The Over-Giver  
- AH = The Armored Heart
- ES = The Eternal Seeker
- KM = The Kaleidoscopic Mind

### Question 1
**In your closest relationships, the pattern you fall into most often is:**
- Staying in dynamics that feel comfortable even when you know they're not fulfilling you or supporting your growth (CC)
- Being the one who holds everything together, and quietly resenting that no one does the same for you (OG)
- Keeping a certain distance, even with people you love. You're not sure anyone fully knows you (AH)
- Feeling drawn to someone deeply, then pulling away or creating distance once things get serious (ES)
- Loving someone but wondering if the relationship is the right fit, or if there's a connection out there that would align better with everything else you want (KM)

### Question 2
**When you think about your career or creative path, the honest truth is:**
- You've built something that looks successful on the outside, but you can feel there's something more for you, or you don't feel quite as satisfied with the success as you thought you would (CC)
- You've built your work around what others need from you more than what actually lights you up (OG)
- You're driven and focused, but you sometimes wonder if the success you're building is keeping you from something deeper (AH)
- You've changed directions more times than you can count, and you're not sure if that's a gift or a problem (ES)
- You have so many ideas and directions pulling at you that choosing one feels impossible, so nothing fully launches (KM)

### Question 3
**The fear that runs deepest for you, even if you don't talk about it, is:**
- That you'll stay in the safe version of your life and never actually go for the thing that's calling you (CC)
- That if you stop giving, you'll lose the people and connections that matter most to you (OG)
- That if you let someone truly in, they'll either leave, betray you, or destabilize what you've built (AH)
- That you'll commit to something and realize too late that it was the wrong choice, and now you're trapped (ES)
- That you'll never figure out which path is yours, and your potential will stay scattered instead of realized (KM)

### Question 4
**When life gets overwhelming, your go-to coping pattern is:**
- Retreating into routine. You tighten your world and stick to what's predictable (CC)
- Doubling down on taking care of everyone else. Other people's problems feel more manageable than your own (OG)
- Shutting down emotionally. You go into strategy mode and handle it alone (AH)
- Making a change. New city, new project, new plan. Movement feels like the only way to breathe (ES)
- Researching. You dive into a new framework, a new approach, a new possibility. Understanding feels like progress (KM)

### Question 5
**The thing people in your life probably don't realize about you is:**
- That underneath the life you've built, the driving force of your success has been an underlying desire to quiet some internal anxiety or insecurity (CC)
- That you're exhausted. You make it look effortless but you're running on fumes (OG)
- That you're lonely. Not for people, but for someone who actually sees past the armor (AH)
- That the freedom everyone admires in you actually feels like rootlessness sometimes (ES)
- That your mind never stops. The ideas are a gift and a burden and you're not sure how to make them work for you instead of against you (KM)

### Question 6
**Which of these truths is the hardest to sit with?**
- Your external success won't quiet the fears running your mind (CC)
- You have to come all the way back to yourself first before you can truly show up for others (OG)
- The love you deflect isn't protecting your heart. It's keeping it caged (AH)
- Your drive to stay free is actually the thing clipping your wings (ES)
- There is no one right choice (KM)

---

## Result Screen Copy (exact text, do not modify)

### The Creature of Comfort

**Label:** Your Dissonance Pattern
**Archetype name:** The Creature of Comfort

**Section label:** What's Running Beneath the Surface
**Body:** Your system has learned that the unfamiliar is unsafe. You may have built an impressive life, checked the boxes, created real success. But there's something more calling you, a truth you need to speak, a leap you need to take, a version of yourself you can feel but haven't stepped into. Your system keeps you anchored to what's known, even when what's known is no longer where you're meant to be.

**Pull quote:** The only true security is the security sourced from within. Everything else is a beautiful cage.

**Section label:** Your Higher Expression
**Body:** You have an incredible ability to create stability. That is a real gift. When you source your safety from within your own body rather than from the structures around you, everything shifts. You get to build and create from a place that is aligned, sustainable, and pleasurable. And that incredible strength you already carry, your ability to create stability, stops being a ceiling and becomes a foundation. An anchor point that allows greater expansion, and materialisation of a truly fulfilling life.

---

### The Over-Giver

**Label:** Your Dissonance Pattern
**Archetype name:** The Over-Giver

**Section label:** What's Running Beneath the Surface
**Body:** Your system has learned that receiving, resting, or allowing things to flow inward is selfish or unsafe. You give until you're depleted, then either collapse or quietly resent the people you gave to. You can look around any room and immediately see who needs what. Somewhere in your system, sacrifice became the proof of worthiness, and now the valve only seems to flow in one direction.

**Pull quote:** You are among the most emotionally intelligent people in the room. And you are running on fumes.

**Section label:** Your Higher Expression
**Body:** You hold immense and beautiful relational power. Your capacity for union, partnership, and connection is a real gift. Your highest expression is coming home to yourself first, filling your own cup, and giving from overflow rather than depletion. When you turn the love you so easily give to others back onto yourself, your relationships become reciprocal and regenerative. The move is from codependence into interdependence. Not less love. Love that finally flows both ways.

---

### The Armored Heart

**Label:** Your Dissonance Pattern
**Archetype name:** The Armored Heart

**Section label:** What's Running Beneath the Surface
**Body:** Your system has learned that vulnerability leads to destabilization, pain, or loss of control. Somewhere along the way, being open meant being hurt, and your system built extraordinary armor in response. You may dominate situations, keep relationships at a careful distance, or shut down when things get too close. Not because you don't want connection. Because your system won't allow it on any terms but its own.

**Pull quote:** The walls you believe are protecting you from pain are equally shielding you from pleasure, joy, and deep fulfillment.

**Section label:** Your Higher Expression
**Body:** You hold deep and powerful sovereignty codes. You know how to hold yourself and protect your energy, and that is a genuine strength. Your highest expression is transforming this armor into healthy and balanced boundary. Striking the nuance between holding yourself and honoring your heart, while trusting others to do the same. You move from hyper-independence into interdependence. Sovereign, balanced union and companionship.

---

### The Eternal Seeker

**Label:** Your Dissonance Pattern
**Archetype name:** The Eternal Seeker

**Section label:** What's Running Beneath the Surface
**Body:** Your system treats any threat to your freedom as a threat to your survival. You may genuinely desire roots, partnership, stability, but the moment something starts to feel permanent, the restlessness kicks in. You leave before you arrive. Jobs, relationships, cities, projects. Not because you don't care. Because staying feels like a cage, even when it's one you chose and once loved.

**Pull quote:** You were never meant to settle into the one thing. You are meant to design a life of sustainable adventure.

**Section label:** Your Higher Expression
**Body:** Freedom and stability are not opposites. Your highest expression is designing a life that honors your need for movement, variety, and exploration without the pendulum swings and without shame. A life where committed partnerships, a home base, and sustained creative focus coexist with adventure and wildness. You hold a powerful creative energy. You are a positive disruptor, a pattern interrupter, and the world needs you in your freedom. Not tamed. Refined.

---

### The Kaleidoscopic Mind

**Label:** Your Dissonance Pattern
**Archetype name:** The Kaleidoscopic Mind

**Section label:** What's Running Beneath the Surface
**Body:** You have a wellspring of ideas, desires, and directions, and they all feel equally alive. But the moment you move toward one, your system starts whispering: what if this isn't the right one? What if you commit and realize it was wrong? What if you're closing a door you'll need later? So everything stays open. And nothing fully lands.

**Pull quote:** The path was never meant to be linear. It was meant to be yours.

**Section label:** Your Higher Expression
**Body:** Your kaleidoscopic mind exists because you are meant to think outside the box. You are meant to think up ideas that no one else has. That wellspring of inspiration is not a flaw. It is your design. Your highest currency. Your highest expression is trusting that if you follow your inspiration, even when the path doesn't look linear, retrospectively it all weaves together.

---

## CTA Section (appears on all result screens)

After the higher expression, include a divider line, then a CTA box:

**Eyebrow text:** This is what we recode
**Headline:** How to Trust Your Decisions Without Waiting for Certainty
**Price:** $33
**Button text:** ♠ Start Recoding
**Button link:** [PLACEHOLDER - Stan Store URL TBD]

Below the CTA box, a secondary CTA:
**Text:** Want to go deeper? This is exactly what we explore in a session.
**Link text:** Book With Me
**Link URL:** https://calendly.com/karenfaheymagi

Footer: ♠ ✦ ♠

---

## Visual Design Spec

**Reference mock-up:** KFM_Quiz_Mockup_v4.html (included in the project folder)

The mock-up contains the exact aesthetic to replicate. Key design details:

### Background
- The background image (kfm_6.jpg, included in project) is used as a fixed, full-screen background at 50% opacity
- A dark gradient overlay sits on top for text readability: heavier at top and bottom, lighter in the middle to let the red glow breathe through
- Additional subtle radial gradients of crimson add atmospheric depth

### Color palette
```
--void: #0A0506            (deepest background)
--deep-black: #110A0C
--smoke: #1A0E10
--blood-haze: #2A0F14
--crimson-glow: #4A1520
--red-light: #6B1E2A
--candle-white: #F5ECDF    (headline text)
--honey-milk: #E8DCCB      (body text)
--warm-blush: #D4C0AA      (secondary text, pull quotes)
--skin-glow: #BFA88E       (accent text)
--muted-skin: #8A7565      (labels, small text)
--ember: #C8A46A           (archetype name, spade symbol, price)
--soft-amber: #B8935A
--deep-amber: #8A6B3A
```

### Typography
Google Fonts import:
```
https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Goudy+Bookletter+1911&family=Cormorant:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap
```

- **Headlines/labels:** Cinzel (various weights, uppercase, letter-spacing 2-3px)
- **Body text:** Goudy Bookletter 1911 (400 weight, 16px, line-height 1.85)
- **Question text and pull quotes:** Cormorant (300 italic)
- **Buttons/CTAs:** Cinzel (400-500 weight, uppercase, letter-spacing 3px)

### Component styling
- **Answer options:** Semi-transparent dark background with backdrop blur, 1px border in faint crimson. On hover: border brightens. On select: border shifts to soft amber, background deepens.
- **CTA buttons:** Gradient from crimson-glow to blood-haze, 1px crimson border
- **Pull quotes:** Cormorant italic, warm-blush color, 1px left border in faint crimson
- **Progress bar:** 1px height, faint crimson background, fill gradient from crimson to amber
- **Divider lines:** Gradient from transparent to faint amber/crimson and back to transparent

### Layout
- Mobile-first. Max-width 420px, centered.
- Generous padding (32px sides, 40px bottom)
- Fade-up animations on all content elements with staggered delays

---

## Mailchimp Integration

**API endpoint:** Use a Vercel serverless function (api/subscribe.js or similar) to handle the Mailchimp call server-side. The API key must NEVER be exposed to the browser.

**What to send to Mailchimp:**
- Email address
- Tag: the archetype name (e.g., "Creature of Comfort", "Over-Giver", "Armored Heart", "Eternal Seeker", "Kaleidoscopic Mind")
- Audience ID: d62e0e87e7

**Environment variables (set in Vercel dashboard, not in code):**
- MAILCHIMP_API_KEY
- MAILCHIMP_AUDIENCE_ID
- MAILCHIMP_SERVER_PREFIX (the "usX" part of the API key, e.g., "us21")

**Flow:**
1. User enters email and clicks "Reveal My Pattern"
2. Browser sends POST to /api/subscribe with email + archetype
3. Serverless function adds subscriber to Mailchimp with the archetype tag
4. On success, browser transitions to the result screen
5. On error, show a subtle error message and allow retry

---

## Embedding in Squarespace

The final deployed Vercel URL will be embedded on a Squarespace page using an iframe or code block. Make sure:
- The app has no external scrollbars (the iframe should handle scrolling)
- The background is transparent or matches the Squarespace page dark background
- The app sends a postMessage with its height so the iframe can resize dynamically (or set a generous fixed height)

---

## Deployment

1. Initialize as a Vercel-compatible project (Next.js or Vite, your call)
2. Include a vercel.json if needed for serverless function routing
3. Ready to deploy via `vercel` CLI or GitHub integration
4. Environment variables will be set in the Vercel dashboard

---

## Brand Voice Rules (for any text you generate beyond what's provided)

- Always "magick" with a K
- No em dashes
- "Resistance" not "blocks"
- Peer-to-peer tone, never guru-to-student
- No emojis anywhere
- Frame patterns as developmental arcs, not character flaws
- Spade symbol (♠) as brand signature
