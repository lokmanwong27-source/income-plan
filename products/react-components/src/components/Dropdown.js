import React, { useState, useRef, useEffect } from 'react'

export default function Dropdown({ trigger, children, align = 'left' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div style={{
          position: 'absolute', top: '100%', marginTop: 4,
          [align]: 0, minWidth: 180,
          background: 'var(--ui-card-bg, white)',
          borderRadius: 'var(--ui-radius, 8px)',
          border: '1px solid var(--ui-border, #e9ecef)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          zIndex: 500, padding: 4,
        }}>
          {typeof children === 'function' ? children({ close: () => setOpen(false) }) : children}
        </div>
      )}
    </div>
  )
}

Dropdown.Item = function DropdownItem({ children, onClick, danger }) {
  return (
    <div onClick={onClick} style={{
      padding: '8px 14px', borderRadius: 6, cursor: 'pointer', fontSize: 14,
      color: danger ? '#e03131' : 'var(--ui-fg, #212529)',
      transition: 'background 0.15s',
    }}
      onMouseEnter={e => e.target.style.background = danger ? '#fff5f5' : 'var(--ui-secondary-bg, #f1f3f5)'}
      onMouseLeave={e => e.target.style.background = 'transparent'}
    >{children}</div>
  )
}

Dropdown.Divider = () => <div style={{ height: 1, background: 'var(--ui-border, #e9ecef)', margin: '4px 0' }} />
