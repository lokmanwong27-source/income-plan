import React from 'react'

const VARIANTS = {
  text: { height: 16, width: '100%', borderRadius: 4 },
  title: { height: 24, width: '60%', borderRadius: 4 },
  avatar: { height: 48, width: 48, borderRadius: '50%' },
  image: { height: 200, width: '100%', borderRadius: 8 },
  button: { height: 40, width: 120, borderRadius: 8 },
  chip: { height: 32, width: 80, borderRadius: 16 },
}

export default function Skeleton({ variant = 'text', width, height, count = 1, style }) {
  const base = VARIANTS[variant] || VARIANTS.text

  const skeleton = (
    <div
      aria-hidden="true"
      style={{
        background: 'var(--ui-skeleton-bg, linear-gradient(90deg, #e9ecef 25%, #f1f3f5 50%, #e9ecef 75%))',
        backgroundSize: '200% 100%',
        animation: 'skeleton-pulse 1.5s infinite',
        borderRadius: base.borderRadius,
        height: height || base.height,
        width: width || base.width,
        marginBottom: count > 1 ? 8 : 0,
        ...style,
      }}
    />
  )

  if (count > 1) {
    return (
      <div role="status" aria-label="Loading">
        {Array.from({ length: count }, (_, i) => (
          <div key={i} style={{ marginBottom: i < count - 1 ? 8 : 0 }}>
            {variant === 'text' && i === count - 1
              ? <Skeleton variant="text" width="40%" height={height} />
              : React.cloneElement(skeleton, { style: { ...skeleton.props.style, marginBottom: i < count - 1 ? 8 : 0 } })
            }
          </div>
        ))}
      </div>
    )
  }

  return (
    <div role="status" aria-label="Loading">
      {skeleton}
      <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
        Loading...
      </span>
    </div>
  )
}

Skeleton.Card = function SkeletonCard({ lines = 3, ...props }) {
  return (
    <div style={{
      padding: 24,
      borderRadius: 'var(--ui-radius, 12px)',
      border: '1px solid var(--ui-border, #e9ecef)',
    }}>
      <Skeleton variant="title" style={{ marginBottom: 16 }} />
      <Skeleton variant="text" count={lines} />
    </div>
  )
}

Skeleton.Table = function SkeletonTable({ rows = 5, cols = 4 }) {
  return (
    <div>
      <div style={{ display: 'flex', gap: 16, marginBottom: 12, padding: '0 12px' }}>
        {Array.from({ length: cols }, (_, i) => (
          <Skeleton key={i} variant="text" width={`${100 / cols}%`} height={14} />
        ))}
      </div>
      {Array.from({ length: rows }, (_, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 10, padding: '10px 12px', background: i % 2 === 0 ? 'var(--ui-secondary-bg, #f8f9fa)' : 'transparent', borderRadius: 6 }}>
          {Array.from({ length: cols }, (_, j) => (
            <Skeleton key={j} variant="text" width={`${100 / cols}%`} height={12} />
          ))}
        </div>
      ))}
    </div>
  )
}

Skeleton.Avatar = function SkeletonAvatar({ size = 48 }) {
  return <Skeleton variant="avatar" width={size} height={size} />
}

// Inject skeleton animation
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `@keyframes skeleton-pulse {
    0% { background-position: 200% 0 }
    100% { background-position: -200% 0 }
  }`
  document.head.appendChild(style)
}
