export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-mute">
        <p>© {new Date().getFullYear()} Brendon Pillay</p>
        <a href="#home" className="transition-colors hover:text-white">Back to top ↑</a>
      </div>
    </footer>
  )
}
