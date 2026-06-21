import React from 'react'

const VARIANTS = {
  default: { bg: '#f1f3f5', color: '#495057' },
  primary: { bg: '#e8f5e9', color: '#2e7d32' },
  warning: { bg: '#fff3e0', color: '#e65100' },
  danger: { bg: '#ffebee', color: '#c62828' },
  info: { bg: '#e3f2fd', color: '#1565c0' },
}

export default function Badge({ children, variant = 'default', removable, onRemove, style }) {
  const v = VARIANTS[variant] || VARIANTS.default
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '2px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600,
      background: v.bg, color: v.color, ...style,
    }}>
      {children}
      {removable && (
        <span onClick={onRemove} style={{ cursor: 'pointer', opacity: 0.6, fontSize: 14, lineHeight: 1, marginLeft: 2 }}>×</span>
      )}
    </span>
  )
}
