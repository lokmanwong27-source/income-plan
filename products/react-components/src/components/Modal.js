import React, { useEffect, useRef } from 'react'

export default function Modal({ open, onClose, title, children, width = 480 }) {
  const overlayRef = useRef()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && open) onClose?.()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      onClick={e => { if (e.target === overlayRef.current) onClose?.() }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: 24,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={{
          background: 'var(--ui-card-bg, white)',
          borderRadius: 'var(--ui-radius, 12px)',
          width: '100%',
          maxWidth: width,
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        }}
      >
        {title && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '20px 24px', borderBottom: '1px solid var(--ui-border, #e9ecef)',
          }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{title}</h2>
            <button onClick={onClose} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 20, color: '#868e96', padding: 4,
            }}>
              ✕
            </button>
          </div>
        )}
        <div style={{ padding: 24 }}>{children}</div>
      </div>
    </div>
  )
}
