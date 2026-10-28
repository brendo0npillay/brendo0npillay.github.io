import Reveal from './Reveal'
import Words from './Words'
import { ChatThumb, PlanetThumb, FootprintThumb } from './Thumbnails'

const projects = [
  {
    title: '3D Poser',
    text: 'An interactive 3D character poser. Real-time bone manipulation with precision rotation controls.',
    tags: ['React', 'Threejs', 'Tailwind', 'Vite'],
    Thumb: ChatThumb,
    href: 'https://poser-w1i0.onrender.com/',
  },
  {
    title: '3D planet view',
    text: 'A dynamic 3D planet viewer. Smooth camera transitions and interactive controls.',
    tags: ['ThreeJS', 'Vite', 'JavaScript', 'Html'],
    Thumb: PlanetThumb,
    href: 'https://planet-view.onrender.com/',
  },
  {
    title: 'Footprint logger',
    text: 'A web app that helps users track their daily activities and estimate their carbon footprint.',
    tags: ['NodeJS', 'Express', 'MongoDB'],
    Thumb: FootprintThumb,
    href: 'https://github.com/brendon9909/footprint-final',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-32 sm:py-44">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal className="mb-6 text-sm text-gold">Work</Reveal>
          <Words text="Selected projects" className="text-4xl font-semibold tracking-tight sm:text-6xl" />
        </div>
        <Reveal delay={300} className="max-w-xs leading-relaxed text-mute">
          A few things I've built, from browser tools to 3D and full-stack apps.
        </Reveal>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map(({ title, text, tags, Thumb, href }, i) => (
          <Reveal key={title} delay={i * 150} variant="up">
            <a
              href={href}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-card transition-all duration-500 hover:-translate-y-2 hover:border-gold/60"
            >
              <div className="aspect-[8/5] overflow-hidden">
                <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                  <Thumb />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{text}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <li key={t} className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/80">{t}</li>
                  ))}
                </ul>
                <span className="mt-7 inline-flex items-center gap-2 text-sm">
                  View Project
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-20 flex justify-center">
        <a href="#" className="rounded-full border-2 border-white px-12 py-4 text-sm font-medium tracking-wide transition-colors hover:bg-white hover:text-black">
          VIEW ALL
        </a>
      </Reveal>
    </section>
  )
}
