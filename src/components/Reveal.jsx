import useReveal from '../hooks/useReveal'

// variant: up | left | right | scale | line
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', children, ...rest }) {
  const [ref, shown] = useReveal()
  return (
    <Tag
      ref={ref}
      style={{ '--d': `${delay}ms` }}
      className={`reveal reveal-${variant} ${shown ? 'in' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
