import React from 'react'

export default function Progress({
  value = 0,
  max = 100,
  variant = 'primary',
  showLabel = false,
  size = 'md',
  animated = true,
}) {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100)

  const variants = {
    primary: 'var(--ui-primary, #6c5ce7)',
    success: '#2e7d32',
    warning: '#f57c00',
    danger: '#d32f2f',
    info: '#1976d2',
  }

  const heights = { sm: 6, md: 10, lg: 16 }

  return (
    <div style={{ width: '100%' }}>
      {showLabel && (
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          marginBottom: 4, fontSize: 13, color: 'var(--ui-fg, #495057)',
        }}>
          <span>{value}/{max}</span>
          <span>{Math.round(pct)}%</span>
        </div>
      )}
      <div style={{
        width: '100%',
        height: heights[size] || heights.md,
        background: 'var(--ui-secondary-bg, #e9ecef)',
        borderRadius: heights[size] || heights.md,
        overflow: 'hidden',
      }}>
        <div
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          style={{
            width: `${pct}%`,
            height: '100%',
            background: variants[variant] || variants.primary,
            borderRadius: 'inherit',
            transition: animated ? 'width 0.4s ease' : 'none',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {animated && pct > 0 && pct < 100 && (
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
              animation: 'progress-shimmer 2s infinite',
            }} />
          )}
        </div>
      </div>
    </div>
  )
}

// Inject shimmer animation
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `@keyframes progress-shimmer {
    0% { transform: translateX(-100%) }
    100% { transform: translateX(100%) }
  }`
  document.head.appendChild(style)
}
