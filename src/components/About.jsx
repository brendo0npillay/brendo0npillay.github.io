import Reveal from './Reveal'
import Words from './Words'

const points = [
  {
    n: '01',
    title: 'Web Development',
    text: 'I develop responsive front-end interfaces and scalable backend functionality using HTML, CSS, JavaScript and React. Focused on usability, performance and clear structure.',
  },
  {
    n: '02',
    title: 'Clean Code',
    text: 'I write maintainable, well-structured code with clear naming and separation of concerns — easy to extend, easy for other developers to understand.',
  },
  {
    n: '03',
    title: 'Continuous Learning',
    text: 'I keep improving by building projects, exploring new tools, and refining previous work to follow modern development practices.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-32 sm:py-44">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal className="mb-6 text-sm text-gold">About</Reveal>
          <Words
            text="I like taking complicated things apart, figuring out why they work, and putting them back together slightly better than I found them."
            className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl"
            step={35}
          />
        </div>

        <ul>
          {points.map((p, i) => (
            <li key={p.n} className="group">
              <Reveal variant="line" delay={i * 80} className="h-px w-full bg-line" />
              <div className="grid grid-cols-[3rem_1fr] gap-4 py-10 sm:grid-cols-[4rem_1fr]">
                <Reveal delay={i * 80 + 150} className="pt-1 text-sm text-mute transition-colors group-hover:text-gold">{p.n}</Reveal>
                <div>
                  <Reveal as="h3" delay={i * 80 + 200} className="text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</Reveal>
                  <Reveal delay={i * 80 + 300} className="mt-4 max-w-lg leading-relaxed text-mute">{p.text}</Reveal>
                </div>
              </div>
            </li>
          ))}
          <li><Reveal variant="line" className="h-px w-full bg-line" /></li>
        </ul>
      </div>
    </section>
  )
}
