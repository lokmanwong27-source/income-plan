import React from 'react'

export default function Card({ children, padding, hover = false, style, ...props }) {
  return (
    <div
      style={{
        background: 'var(--ui-card-bg, white)',
        borderRadius: 'var(--ui-radius, 12px)',
        border: '1px solid var(--ui-border, #e9ecef)',
        padding: padding || 24,
        transition: 'all 0.2s ease',
        ...(hover ? { cursor: 'pointer' } : {}),
        ...style,
      }}
      onMouseEnter={e => {
        if (hover) {
          e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
          e.target.style.transform = 'translateY(-2px)'
        }
      }}
      onMouseLeave={e => {
        if (hover) {
          e.target.style.boxShadow = 'none'
          e.target.style.transform = 'none'
        }
      }}
      {...props}
    >
      {children}
    </div>
  )
}

Card.Header = function CardHeader({ children, style }) {
  return (
    <div style={{
      fontSize: 16, fontWeight: 700, marginBottom: 12, ...style,
    }}>
      {children}
    </div>
  )
}

Card.Body = function CardBody({ children, style }) {
  return <div style={{ ...style }}>{children}</div>
}

Card.Footer = function CardFooter({ children, style }) {
  return (
    <div style={{
      marginTop: 16, paddingTop: 16,
      borderTop: '1px solid var(--ui-border, #e9ecef)',
      ...style,
    }}>
      {children}
    </div>
  )
}
