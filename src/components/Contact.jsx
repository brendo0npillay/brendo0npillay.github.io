import { useState } from 'react'
import Reveal from './Reveal'
import Words from './Words'

// TODO: put your real email here. The form opens the visitor's mail app with the message filled in.
// To send without a mail app, point the form at a service like Formspree or EmailJS instead.
const EMAIL = 'you@example.com'

const field =
  'peer w-full border-b border-line bg-transparent py-4 text-lg text-white outline-none transition-colors placeholder:text-mute focus:border-gold'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Portfolio message from ${d.get('name')}`)
    const body = encodeURIComponent(`${d.get('message')}\n\n— ${d.get('name')} (${d.get('email')})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-32 sm:py-44">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Reveal className="mb-6 text-sm text-gold">Contact</Reveal>
          <Words text="Have a project in mind? Let's talk." className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl" />
          <Reveal delay={500} className="mt-8 max-w-sm leading-relaxed text-mute">
            Tell me what you're building and I'll get back to you.
          </Reveal>
        </div>

        <form onSubmit={onSubmit} className="space-y-8">
          <Reveal delay={100}>
            <label htmlFor="name" className="sr-only">Name</label>
            <input id="name" name="name" required placeholder="Your name" autoComplete="name" className={field} />
          </Reveal>
          <Reveal delay={200}>
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" name="email" type="email" required placeholder="Your email" autoComplete="email" className={field} />
          </Reveal>
          <Reveal delay={300}>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" name="message" required rows={5} placeholder="What can I help with?" className={`${field} resize-none`} />
          </Reveal>
          <Reveal delay={400} className="flex flex-wrap items-center gap-6">
            <button type="submit" className="rounded-full border-2 border-white px-10 py-3.5 text-sm font-medium tracking-wide transition-colors hover:bg-white hover:text-black">
              Send message
            </button>
            {sent && <p role="status" className="text-sm text-gold">Your mail app should open with the message ready to send.</p>}
          </Reveal>
        </form>
      </div>
    </section>
  )
}
