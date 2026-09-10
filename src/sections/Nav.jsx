import { useState } from 'react';
import CVModal from '../components/CVModal.jsx';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

const Nav = () => {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-grape/40 bg-grape-ink/80 backdrop-blur-md">
        <nav className="section-pad flex items-center justify-between py-4">
          <a href="#top" className="font-techno text-lime text-lg tracking-wide">
            B.PILLAY
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm tracking-wide text-slate-200">
            {LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-lime transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setCvOpen(true)}
            className="border border-lime text-lime px-4 py-1.5 text-xs tracking-widest hover:bg-lime hover:text-grape-ink transition-colors"
          >
            View CV
          </button>
        </nav>
      </header>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  );
};

export default Nav;