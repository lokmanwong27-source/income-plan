import React, { useState, useCallback } from 'react'

let toastId = 0

export function useToast() {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((message, type = 'info', duration = 4000) => {
    const id = ++toastId
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, duration)
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return { toasts, addToast, removeToast }
}

const TYPE_STYLES = {
  success: { background: '#2e7d32', icon: '✓' },
  error: { background: '#d32f2f', icon: '✕' },
  info: { background: '#1976d2', icon: 'ℹ' },
  warning: { background: '#f57c00', icon: '⚠' },
}

export default function ToastContainer({ toasts, removeToast, position = 'top-right' }) {
  const positions = {
    'top-right': { top: 24, right: 24 },
    'top-left': { top: 24, left: 24 },
    'bottom-right': { bottom: 24, right: 24 },
    'bottom-left': { bottom: 24, left: 24 },
  }

  return (
    <div style={{
      position: 'fixed',
      zIndex: 2000,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...positions[position] || positions['top-right'],
    }}>
      {toasts.map(toast => {
        const style = TYPE_STYLES[toast.type] || TYPE_STYLES.info
        return (
          <div
            key={toast.id}
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '12px 20px',
              background: style.background,
              color: 'white',
              borderRadius: 8,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              fontSize: 14,
              fontWeight: 500,
              minWidth: 280,
              maxWidth: 420,
              animation: 'toast-slide-in 0.3s ease',
            }}
          >
            <span>{style.icon}</span>
            <span style={{ flex: 1 }}>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              style={{
                background: 'none', border: 'none', color: 'white',
                cursor: 'pointer', opacity: 0.7, fontSize: 16,
                padding: 0, lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>
        )
      })}
    </div>
  )
}

// Inject toast animation
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `@keyframes toast-slide-in {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }`
  document.head.appendChild(style)
}
