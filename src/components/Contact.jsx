import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // For demo purposes only
    setTimeout(() => setStatus('Thanks! I\'ll get back to you shortly.'), 800)
  }

  return (
    <section id="contact" className="relative py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 text-center">Let’s work together</h2>
        <p className="mt-2 text-neutral-600 text-center">Have an opportunity that fits? I’d love to chat.</p>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4">
          <input required placeholder="Your name" className="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900/20" />
          <input required type="email" placeholder="Email" className="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900/20" />
          <textarea required rows="4" placeholder="Tell me about the role or project" className="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900/20" />
          <button className="rounded-full bg-neutral-900 text-white px-6 py-3 font-semibold hover:opacity-90 transition">Send message</button>
          {status && <p className="text-sm text-emerald-600">{status}</p>}
        </form>
      </div>
    </section>
  )
}
