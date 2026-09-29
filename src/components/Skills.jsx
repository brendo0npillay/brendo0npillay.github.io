import { useEffect, useRef } from 'react'
import Reveal from './Reveal'
import Words from './Words'

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Bootstrap', 'Jest',
  'Jasmine', 'React Native', 'MongoDB', 'Express.js', 'Python', 'Three.js',
]
const rowA = skills.slice(0, 7)
const rowB = skills.slice(7)

function Row({ items, rowRef }) {
  // repeated so the row always spans the screen while it slides
  const list = [...items, ...items, ...items, ...items]
  return (
    <div className="overflow-hidden py-2">
      <div ref={rowRef} className="flex w-max gap-4 will-change-transform" aria-hidden="true">
        {list.map((s, i) => (
          <span
            key={i}
            className="cursor-default rounded-full border border-line px-8 py-4 text-3xl font-medium tracking-tight text-white/90 transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-black sm:px-10 sm:py-5 sm:text-5xl"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const section = useRef(null)
  const a = useRef(null)
  const b = useRef(null)

  // rows slide in opposite directions as the section moves through the viewport
  useEffect(() => {
    let raf
    const update = () => {
      const r = section.current.getBoundingClientRect()
      const p = (window.innerHeight - r.top) / (window.innerHeight + r.height) // 0 → 1
      const shift = (p - 0.5) * 900
      if (a.current) a.current.style.transform = `translateX(${-shift - 600}px)`
      if (b.current) b.current.style.transform = `translateX(${shift - 1200}px)`
    }
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="skills" ref={section} className="relative overflow-hidden py-32 sm:py-44">
      <div className="mx-auto mb-20 max-w-6xl px-6">
        <Reveal className="mb-6 text-sm text-gold">Skills</Reveal>
        <Words text="Tools I build with." className="text-4xl font-semibold tracking-tight sm:text-6xl" />
      </div>

      <Reveal variant="scale" className="space-y-2">
        <Row items={rowA} rowRef={a} />
        <Row items={rowB} rowRef={b} />
      </Reveal>

      {/* real list for screen readers, since the animated rows repeat items */}
      <ul className="sr-only">{skills.map((s) => <li key={s}>{s}</li>)}</ul>
    </section>
  )
}
