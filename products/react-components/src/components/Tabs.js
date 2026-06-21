import React, { useState } from 'react'

export default function Tabs({ tabs, defaultIndex = 0, onChange, variant = 'underline' }) {
  const [active, setActive] = useState(defaultIndex)

  const handleClick = (index) => {
    setActive(index)
    onChange?.(index)
  }

  const underlineStyle = {
    tab: (isActive) => ({
      background: 'none',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      fontSize: 14,
      fontWeight: isActive ? 600 : 400,
      color: isActive ? 'var(--ui-primary, #6c5ce7)' : 'var(--ui-fg, #495057)',
      borderBottom: isActive ? '2px solid var(--ui-primary, #6c5ce7)' : '2px solid transparent',
      marginBottom: -2,
      transition: 'all 0.15s ease',
    }),
  }

  const pillStyle = {
    tab: (isActive) => ({
      background: isActive ? 'var(--ui-primary, #6c5ce7)' : 'transparent',
      color: isActive ? 'white' : 'var(--ui-fg, #495057)',
      border: 'none',
      padding: '8px 18px',
      borderRadius: 20,
      cursor: 'pointer',
      fontSize: 14,
      fontWeight: isActive ? 600 : 400,
      transition: 'all 0.15s ease',
    }),
  }

  const styles = variant === 'pills' ? pillStyle : underlineStyle

  return (
    <div>
      <div role="tablist"
        style={{
          display: 'flex',
          gap: variant === 'pills' ? 4 : 0,
          borderBottom: variant === 'underline' ? '2px solid var(--ui-border, #e9ecef)' : 'none',
        }}
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.key || i}
            role="tab"
            aria-selected={i === active}
            onClick={() => handleClick(i)}
            onMouseEnter={e => { if (i !== active) e.target.style.opacity = 0.7 }}
            onMouseLeave={e => { if (i !== active) e.target.style.opacity = 1 }}
            style={styles.tab(i === active)}
          >
            {tab.icon && <span style={{ marginRight: 8 }}>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" style={{ padding: '20px 0' }}>
        {tabs[active]?.content}
      </div>
    </div>
  )
}
