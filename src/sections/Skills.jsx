import CurvedLoop from '../components/CurvedLoop.jsx';

const GROUPS = [
  { title: 'Frontend', items: ['CSS', 'HTML', 'JavaScript', 'React'] },
  { title: 'Backend', items: ['Node.js', 'Express'] },
  { title: 'Database & Tools', items: ['Postgres', 'MongoDB', 'Git', 'Docker', 'Figma', 'Jasmine'] }
];

const Skills = () => (
  <section id="skills" className="relative py-28 bg-grape-ink">
    <CurvedLoop marqueeText="SKILLS ✦ SKILLS ✦" speed={1.2} curveAmount={140} />

    <p className="section-pad text-center font-mono text-sm text-slate-400 mt-6 mb-12">
      Technologies I use regularly to build full-stack applications.
    </p>

    <div className="section-pad grid gap-6 md:grid-cols-3">
      {GROUPS.map(group => (
        <div key={group.title} className="border border-grape/50 p-7 bg-grape/10">
          <h3 className="font-techno text-lg text-lime mb-5">{group.title}</h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map(item => (
              <span
                key={item}
                className="font-mono text-xs px-3 py-1.5 border border-lime/40 text-slate-100 hover:bg-lime hover:text-grape-ink transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
