import React, { useState } from 'react'

export default function Select({ label, options, value, onChange, placeholder, error }) {
  const [open, setOpen] = useState(false)
  const selected = options.find(o => o.value === value)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label && <label style={{ fontSize: 13, fontWeight: 600 }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <div onClick={() => setOpen(!open)} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 14px', borderRadius: 'var(--ui-radius, 8px)',
          border: error ? '1px solid #e03131' : '1px solid var(--ui-border, #dee2e6)',
          cursor: 'pointer', fontSize: 14, background: 'white',
        }}>
          <span style={{ color: selected ? 'inherit' : '#868e96' }}>{selected?.label || placeholder || 'Select...'}</span>
          <span style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.2s' }}>▾</span>
        </div>
        {open && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4, zIndex: 100,
            background: 'white', borderRadius: 'var(--ui-radius, 8px)',
            border: '1px solid var(--ui-border, #dee2e6)', boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            maxHeight: 240, overflow: 'auto', padding: 4,
          }}>
            {options.map(opt => (
              <div key={opt.value} onClick={() => { onChange?.(opt.value); setOpen(false) }} style={{
                padding: '8px 14px', cursor: 'pointer', borderRadius: 6, fontSize: 14,
                background: opt.value === value ? '#f0edff' : 'transparent',
                color: opt.value === value ? 'var(--ui-primary, #6c5ce7)' : 'inherit',
              }}
                onMouseEnter={e => e.target.style.background = '#f8f9fa'}
                onMouseLeave={e => e.target.style.background = opt.value === value ? '#f0edff' : 'transparent'}
              >{opt.label}</div>
            ))}
          </div>
        )}
      </div>
      {error && <span style={{ fontSize: 12, color: '#e03131' }}>{error}</span>}
    </div>
  )
}
