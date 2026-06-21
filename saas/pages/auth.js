import Head from 'next/head'
import { useState } from 'react'

export default function AuthPage() {
  const [mode, setMode] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to auth API
    alert(mode === 'signin' ? 'Sign in coming soon!' : 'Sign up coming soon!')
  }

  return (
    <>
      <Head>
        <title>{mode === 'signin' ? 'Sign In' : 'Sign Up'} — Lnk.Flow</title>
      </Head>

      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'var(--gray-50)' }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          {/* Logo */}
          <div className="text-center mb-32">
            <a href="/" style={{ fontWeight: 800, fontSize: 24, letterSpacing: -1, color: 'var(--fg)' }}>
              <span style={{ color: 'var(--accent)' }}>Lnk</span>.Flow
            </a>
          </div>

          {/* Card */}
          <div className="card" style={{ padding: 32 }}>
            <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>
              {mode === 'signin' ? 'Welcome back' : 'Create account'}
            </h1>
            <p className="text-sm mb-24">
              {mode === 'signin' ? 'Sign in to manage your links.' : 'Start your free link-in-bio page.'}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-16">
                <label className="text-sm" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Email</label>
                <input className="input" type="email" placeholder="you@example.com"
                  value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="mb-24">
                <label className="text-sm" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Password</label>
                <input className="input" type="password" placeholder="••••••••"
                  value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} type="submit">
                {mode === 'signin' ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="text-center mt-24">
              <button onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent)', fontSize: 14 }}>
                {mode === 'signin' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
