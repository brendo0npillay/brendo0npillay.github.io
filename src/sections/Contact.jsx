import CurvedLoop from '../components/CurvedLoop.jsx';

const Contact = () => (
  <section id="contact" className="relative py-28 bg-grape-deep/20">
    <CurvedLoop marqueeText="CONTACT ✦ CONTACT ✦" speed={1.4} curveAmount={-140} direction="right" />

    <p className="section-pad text-center font-mono text-sm text-slate-400 mt-6 mb-14">
      Currently open to internship and junior developer opportunities. Feel free to reach out.
    </p>

    <div className="section-pad grid gap-10 md:grid-cols-2 items-start">
      <div className="space-y-8">
        <div>
          <p className="font-mono text-xs tracking-widest text-lime/70 uppercase">Email</p>
          <a href="mailto:brendonpillay03@gmail.com" className="font-techno text-lg text-slate-50 hover:text-lime">
            brendonpillay03@gmail.com
          </a>
        </div>
        <div>
          <p className="font-mono text-xs tracking-widest text-lime/70 uppercase">Phone</p>
          <a href="tel:+27713472385" className="font-techno text-lg text-slate-50 hover:text-lime">
            +27 71 347 2385
          </a>
        </div>
      </div>

      <form className="space-y-4" onSubmit={e => e.preventDefault()}>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="bg-transparent border border-grape/60 focus:border-lime outline-none px-4 py-3 font-mono text-sm text-slate-100 placeholder:text-slate-500"
          />
          <input
            type="email"
            placeholder="Your email"
            className="bg-transparent border border-grape/60 focus:border-lime outline-none px-4 py-3 font-mono text-sm text-slate-100 placeholder:text-slate-500"
          />
        </div>
        <textarea
          rows={5}
          placeholder="Message"
          className="w-full bg-transparent border border-grape/60 focus:border-lime outline-none px-4 py-3 font-mono text-sm text-slate-100 placeholder:text-slate-500"
        />
        <button
          type="submit"
          className="font-techno text-sm tracking-widest bg-lime text-grape-ink px-8 py-3 hover:bg-slate-50 transition-colors"
        >
          SEND
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
