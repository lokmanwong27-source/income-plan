import React from 'react'

export default function Input({ label, error, icon, helper, ...props }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label && <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--ui-fg, #212529)' }}>{label}</label>}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && <span style={{ position: 'absolute', left: 12, color: '#868e96', fontSize: 16 }}>{icon}</span>}
        <input style={{
          width: '100%', padding: icon ? '10px 14px 10px 36px' : '10px 14px',
          fontSize: 14, borderRadius: 'var(--ui-radius, 8px)',
          border: error ? '1px solid #e03131' : '1px solid var(--ui-border, #dee2e6)',
          outline: 'none', transition: 'border-color 0.15s',
        }}
          onFocus={e => { e.target.style.borderColor = error ? '#e03131' : 'var(--ui-primary, #6c5ce7)' }}
          onBlur={e => { e.target.style.borderColor = error ? '#e03131' : 'var(--ui-border, #dee2e6)' }}
          {...props} />
      </div>
      {error && <span style={{ fontSize: 12, color: '#e03131' }}>{error}</span>}
      {helper && !error && <span style={{ fontSize: 12, color: '#868e96' }}>{helper}</span>}
    </div>
  )
}
