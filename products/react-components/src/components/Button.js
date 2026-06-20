import React from 'react'

const VARIANTS = {
  primary: {
    background: 'var(--ui-primary, #6c5ce7)',
    color: 'white',
    border: 'none',
  },
  secondary: {
    background: 'var(--ui-secondary-bg, #f1f3f5)',
    color: 'var(--ui-secondary-fg, #212529)',
    border: '1px solid var(--ui-border, #dee2e6)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ui-primary, #6c5ce7)',
    border: 'none',
  },
  danger: {
    background: '#e03131',
    color: 'white',
    border: 'none',
  },
}

const SIZES = {
  sm: { padding: '6px 12px', fontSize: 13 },
  md: { padding: '10px 20px', fontSize: 15 },
  lg: { padding: '14px 28px', fontSize: 17 },
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  onClick,
  style,
  ...props
}) {
  const variantStyle = VARIANTS[variant] || VARIANTS.primary
  const sizeStyle = SIZES[size] || SIZES.md

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        fontWeight: 600,
        borderRadius: 'var(--ui-radius, 8px)',
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 0.15s ease',
        ...variantStyle,
        ...sizeStyle,
        ...style,
      }}
      onMouseEnter={e => {
        if (!disabled && !loading) {
          e.target.style.filter = 'brightness(0.9)'
          e.target.style.transform = 'translateY(-1px)'
        }
      }}
      onMouseLeave={e => {
        e.target.style.filter = 'none'
        e.target.style.transform = 'none'
      }}
      {...props}
    >
      {loading && <Spinner size={size === 'sm' ? 12 : 16} />}
      {children}
    </button>
  )
}

function Spinner({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      style={{ animation: 'ui-spin 0.8s linear infinite' }}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
      <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="3"
        strokeLinecap="round"/>
    </svg>
  )
}

// Inject spinner animation
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `@keyframes ui-spin { to { transform: rotate(360deg) } }`
  document.head.appendChild(style)
}
