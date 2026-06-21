import React, { useState, useRef } from 'react'

const PLACEMENT = {
  top: { transform: 'translateX(-50%) translateY(-8px)', top: -8, left: '50%' },
  bottom: { transform: 'translateX(-50%) translateY(8px)', bottom: -8, left: '50%' },
  left: { transform: 'translateY(-50%) translateX(-8px)', left: -8, top: '50%' },
  right: { transform: 'translateY(-50%) translateX(8px)', right: -8, top: '50%' },
}

const ARROW = {
  top: { bottom: -4, left: '50%', marginLeft: -4, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: '4px solid var(--ui-tooltip-bg, #212529)' },
  bottom: { top: -4, left: '50%', marginLeft: -4, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderBottom: '4px solid var(--ui-tooltip-bg, #212529)' },
  left: { right: -4, top: '50%', marginTop: -4, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '4px solid var(--ui-tooltip-bg, #212529)' },
  right: { left: -4, top: '50%', marginTop: -4, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderRight: '4px solid var(--ui-tooltip-bg, #212529)' },
}

export default function Tooltip({ content, children, placement = 'top', delay = 300 }) {
  const [visible, setVisible] = useState(false)
  const timer = useRef()

  const show = () => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setVisible(true), delay)
  }

  const hide = () => {
    clearTimeout(timer.current)
    setVisible(false)
  }

  const pos = PLACEMENT[placement] || PLACEMENT.top
  const arrow = ARROW[placement] || ARROW.top

  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={show} onMouseLeave={hide}
      onFocus={show} onBlur={hide}
    >
      {children}
      {visible && (
        <div
          role="tooltip"
          style={{
            position: 'absolute',
            zIndex: 600,
            whiteSpace: 'nowrap',
            ...pos,
          }}
        >
          <div style={{
            background: 'var(--ui-tooltip-bg, #212529)',
            color: 'white',
            padding: '6px 12px',
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 500,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}>
            {content}
          </div>
          <div style={{
            position: 'absolute', width: 0, height: 0, ...arrow,
          }} />
        </div>
      )}
    </span>
  )
}
