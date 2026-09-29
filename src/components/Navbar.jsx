import { useEffect, useState } from 'react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > last && y > 120)
      setSolid(y > 40)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${hidden ? '-translate-y-full' : 'translate-y-0'} ${solid ? 'bg-black/70 backdrop-blur-md' : ''}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-base font-semibold tracking-tight">Brendon Pillay</a>
        <ul className="flex items-center gap-4 text-sm text-mute sm:gap-8">
          {links.map((l) => (
            <li key={l} className={l === 'Home' ? 'hidden sm:block' : ''}>
              <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-white">{l}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
