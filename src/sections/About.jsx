import CurvedLoop from '../components/CurvedLoop.jsx';

const CARDS = [
  {
    code: '01',
    title: 'Web Development',
    body: 'I develop responsive front-end interfaces and scalable backend functionality using HTML, CSS, JavaScript and React. Focused on usability, performance and clear structure.'
  },
  {
    code: '02',
    title: 'Clean Code',
    body: 'I write maintainable, well-structured code with clear naming and separation of concerns — easy to extend, easy for other developers to understand.'
  },
  {
    code: '03',
    title: 'Continuous Learning',
    body: 'I keep improving by building projects, exploring new tools, and refining previous work to follow modern development practices.'
  }
];

const About = () => (
  <section id="about" className="relative py-28 bg-grape-ink">
    <CurvedLoop marqueeText="ABOUT ME ✦ ABOUT ME ✦" speed={1.2} curveAmount={140} />

    <div className="section-pad mt-10 grid gap-6 md:grid-cols-3">
      {CARDS.map(card => (
        <div
          key={card.code}
          className="border border-grape/50 bg-gradient-to-b from-grape/15 to-transparent p-7 hover:border-lime/60 transition-colors"
        >
          <span className="font-mono text-lime/70 text-xs tracking-widest">{card.code}</span>
          <h3 className="font-techno text-xl text-slate-50 mt-3 mb-3">{card.title}</h3>
          <p className="font-mono text-sm text-slate-300 leading-relaxed">{card.body}</p>
        </div>
      ))}
    </div>
  </section>
);

export default About;
