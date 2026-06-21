import React from 'react'

export default function Avatar({ src, name, size = 40, status }) {
  const initials = name?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || '?'
  const colors = ['#6c5ce7','#e17055','#00b894','#0984e3','#fdcb6e','#e84393']
  const colorIndex = name ? name.split('').reduce((s,c)=>s+c.charCodeAt(0),0) % colors.length : 0

  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      {src ? (
        <img src={src} alt={name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
      ) : (
        <div style={{
          width: '100%', height: '100%', borderRadius: '50%',
          background: colors[colorIndex], display: 'flex', alignItems: 'center',
          justifyContent: 'center', color: 'white', fontWeight: 700,
          fontSize: size * 0.4,
        }}>{initials}</div>
      )}
      {status && (
        <span style={{
          position: 'absolute', bottom: 0, right: 0, width: size * 0.3, height: size * 0.3,
          borderRadius: '50%', border: '2px solid white',
          background: status === 'online' ? '#00b894' : status === 'away' ? '#fdcb6e' : '#dfe6e9',
        }} />
      )}
    </div>
  )
}
