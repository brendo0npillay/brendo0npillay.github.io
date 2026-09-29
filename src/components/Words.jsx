import useReveal from '../hooks/useReveal'

// Splits text into words that slide up out of a mask when scrolled into view.
export default function Words({ text, as: Tag = 'h2', className = '', delay = 0, step = 70 }) {
  const [ref, shown] = useReveal(0.3)
  return (
    <Tag ref={ref} className={`${shown ? 'in' : ''} ${className}`} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="word-mask" aria-hidden="true">
          <span className="word" style={{ '--d': `${delay + i * step}ms` }}>{w}&nbsp;</span>
        </span>
      ))}
    </Tag>
  )
}
