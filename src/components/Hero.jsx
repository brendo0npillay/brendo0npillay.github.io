import { useEffect, useRef } from 'react'
import Words from './Words'
import Reveal from './Reveal'

export default function Hero() {
  const section = useRef(null)
  const content = useRef(null)
  const glow = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = Math.min(window.scrollY, window.innerHeight)
      if (content.current) {
        content.current.style.transform = `translateY(${y * 0.25}px)`
        content.current.style.opacity = String(1 - y / (window.innerHeight * 0.9))
      }
    }
    const onMove = (e) => {
      const r = section.current.getBoundingClientRect()
      glow.current.style.transform = `translate(${e.clientX - r.left - 300}px, ${e.clientY - r.top - 300}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <section id="home" ref={section} className="relative flex min-h-screen items-center overflow-hidden">
      {/* soft light that trails the cursor */}
      <div
        ref={glow}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl transition-transform duration-[900ms] ease-out"
        style={{ background: 'radial-gradient(circle, #e4b95a 0%, transparent 65%)', transform: 'translate(30vw, 20vh)' }}
      />
      <div ref={content} className="relative mx-auto w-full max-w-6xl px-6 pt-28 will-change-transform">
        <Reveal delay={100} className="mb-8 flex items-center gap-3 text-sm text-mute">
          <span className="h-px w-10 bg-gold" />
          Web-Developer &amp; Designer
        </Reveal>

        <Words
          as="h1"
          text="I build clear, fast interfaces for the web."
          delay={250}
          className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.5rem]"
        />

        <Reveal delay={900} className="mt-10 max-w-xl text-lg leading-relaxed text-mute">
          Front-end interfaces and back-end functionality with HTML, CSS, JavaScript and React,
          focused on usability, performance and clear structure.
        </Reveal>

        <Reveal delay={1100} className="mt-12 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-full border-2 border-white px-8 py-3 text-sm font-medium tracking-wide transition-colors hover:bg-white hover:text-black">
            View projects
          </a>
          <a href="#contact" className="rounded-full px-8 py-3 text-sm font-medium tracking-wide text-mute transition-colors hover:text-white">
            Get in touch
          </a>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden h-14 w-px -translate-x-1/2 overflow-hidden bg-line sm:block" aria-hidden="true">
        <span className="block h-1/2 w-full animate-[scrollcue_1.8s_ease-in-out_infinite] bg-gold" />
      </div>
      <style>{`@keyframes scrollcue{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}`}</style>
    </section>
  )
}
