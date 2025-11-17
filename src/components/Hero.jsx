import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-white/90 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to work • Frontend / Full‑stack
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow">
            I build delightful, modern web experiences
          </h1>
          <p className="mt-4 text-white/90 text-base sm:text-lg max-w-xl">
            Interactive, performant, and accessible interfaces. I specialize in React, TypeScript, and modern product design.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:opacity-90 transition">
              View projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-neutral-900/70 border border-white/10 text-white px-5 py-3 text-sm font-semibold hover:bg-neutral-900 transition">
              Contact me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white/0" />
    </section>
  )
}
