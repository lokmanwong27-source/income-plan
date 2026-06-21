import React, { useState, useEffect } from 'react'

export default function Toggle({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  size = 'md',
}) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const isControlled = controlledChecked !== undefined
  const checked = isControlled ? controlledChecked : internalChecked

  const toggle = () => {
    if (disabled) return
    const next = !checked
    if (!isControlled) setInternalChecked(next)
    onChange?.(next)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  const dimensions = size === 'sm' ? { width: 36, height: 20, thumb: 16 }
    : size === 'lg' ? { width: 56, height: 30, thumb: 26 }
    : { width: 44, height: 24, thumb: 20 }

  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
    }}>
      <div
        role="switch"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onClick={toggle}
        onKeyDown={handleKey}
        style={{
          position: 'relative',
          width: dimensions.width,
          height: dimensions.height,
          borderRadius: dimensions.height,
          background: checked ? 'var(--ui-primary, #6c5ce7)' : 'var(--ui-border, #ced4da)',
          transition: 'background 0.2s ease',
          flexShrink: 0,
        }}
      >
        <div style={{
          position: 'absolute',
          top: (dimensions.height - dimensions.thumb) / 2,
          left: checked ? dimensions.width - dimensions.thumb - (dimensions.height - dimensions.thumb) / 2 : (dimensions.height - dimensions.thumb) / 2,
          width: dimensions.thumb,
          height: dimensions.thumb,
          borderRadius: '50%',
          background: 'white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
          transition: 'left 0.2s ease',
        }} />
      </div>
      {label && <span style={{ fontSize: 14, color: 'var(--ui-fg, #212529)' }}>{label}</span>}
    </label>
  )
}
