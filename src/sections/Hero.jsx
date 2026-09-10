import ScrollExpand from '../components/ScrollExpand.jsx';

const Hero = () => (
  <section id="top" className="relative">
    <ScrollExpand
      src="/face.jpeg"
      alt="Brendon Pillay"
      scrollHint="Scroll to enter"
      useWindowScroll
      followCursor
      followStrength={26}
      startWidth={42}
      startHeight={58}
      startRadius={28}
      endRadius={0}
      mediaZoom={1}
      scrollDistance={1.1}
      holdDistance={0.3}
    >
      <div className="text-center px-6">
        <p className="font-mono text-lime tracking-[0.4em] text-xs sm:text-sm uppercase mb-4">// hello, i&apos;m</p>
        <h1 className="font-techno text-4xl sm:text-6xl md:text-7xl font-black text-slate-50 tracking-tight leading-none">
          BRENDON PILLAY
        </h1>
        <p className="max-w-xl mx-auto mt-5 text-slate-200 font-mono text-sm sm:text-base leading-relaxed">
          I build responsive, user-focused web applications with clean, maintainable code — fast interfaces,
          reliable backends, modern JavaScript.
        </p>
        <div className="flex items-center justify-center gap-4 pt-7">
          <a
            href="#about"
            className="font-techno text-sm tracking-widest bg-lime text-grape-ink px-6 py-3 hover:bg-slate-50 transition-colors"
          >
            ABOUT ME
          </a>
          <a
            href="#contact"
            className="font-techno text-sm tracking-widest border border-lime text-lime px-6 py-3 hover:bg-lime/10 transition-colors"
          >
            CONTACT
          </a>
        </div>
      </div>
    </ScrollExpand>
  </section>
);

export default Hero;