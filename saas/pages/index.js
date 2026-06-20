import Head from 'next/head'
import { useState } from 'react'

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: ['5 links', 'Basic click analytics', '1 bio theme',
      'Standard support', 'Lnk.flow subdomain'],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$9',
    period: 'per month',
    description: 'For creators and brands',
    features: ['Unlimited links', 'Advanced analytics', 'All themes + custom',
      'Custom domain support', 'Priority support', 'CSV export'],
    cta: 'Start Pro Trial',
    highlight: true,
  },
  {
    name: 'Business',
    price: '$29',
    period: 'per month',
    description: 'For teams and agencies',
    features: ['Everything in Pro', 'Team collaboration', 'White-label domains',
      'API access', 'Custom integrations', 'Dedicated support'],
    cta: 'Contact Us',
    highlight: false,
  },
]

const FEATURES = [
  { icon: '🔗', title: 'Smart Links', desc: 'Organize and style your links with drag-and-drop. Add thumbnails, descriptions, and custom icons.' },
  { icon: '📊', title: 'Real-time Analytics', desc: 'Track clicks, visitors, and engagement. Know exactly what content resonates with your audience.' },
  { icon: '🎨', title: 'Beautiful Themes', desc: 'Premium, mobile-optimized themes that match your brand. Custom colors, fonts, and layouts.' },
  { icon: '🌐', title: 'Custom Domain', desc: 'Use your own domain name. No branding on Pro plans. Professional presence in seconds.' },
  { icon: '⚡', title: 'Lightning Fast', desc: 'Global CDN with automatic optimization. Your page loads in under 100ms anywhere in the world.' },
  { icon: '🔄', title: 'Auto Sync', desc: 'Connect your social media. Links update automatically when you post new content.' },
]

export default function Home() {
  const [email, setEmail] = useState('')

  return (
    <>
      <Head>
        <title>Lnk.Flow — Link in Bio, Supercharged</title>
        <meta name="description" content="Create a stunning link-in-bio page in minutes. Beautiful themes, real-time analytics, custom domains. Start free." />
      </Head>

      {/* Navigation */}
      <nav style={{
        padding: '16px 24px',
        borderBottom: '1px solid var(--gray-200)',
        background: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div className="container flex-between">
          <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: -1 }}>
            <span style={{ color: 'var(--accent)' }}>Lnk</span>
            <span>.Flow</span>
          </div>
          <div className="flex gap-16" style={{ alignItems: 'center' }}>
            <a href="#features" style={{ color: 'var(--gray-700)', fontSize: 14 }}>Features</a>
            <a href="#pricing" style={{ color: 'var(--gray-700)', fontSize: 14 }}>Pricing</a>
            <button className="btn btn-primary" style={{ padding: '8px 20px', fontSize: 14 }}>
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container text-center">
          <div style={{
            display: 'inline-block',
            padding: '6px 16px',
            background: 'rgba(108,92,231,0.08)',
            borderRadius: 20,
            color: 'var(--accent)',
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 24,
          }}>
            🚀 Now in Public Beta
          </div>
          <h1 style={{
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -2,
            marginBottom: 20,
            maxWidth: 800,
            margin: '0 auto 20px',
          }}>
            Your Link in Bio,{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--accent), #e17055)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Supercharged
            </span>
          </h1>
          <p style={{
            fontSize: 20,
            color: 'var(--gray-600)',
            maxWidth: 560,
            margin: '0 auto 40px',
            lineHeight: 1.5,
          }}>
            Create a stunning, customizable bio page in seconds.
            Beautiful themes, real-time analytics, and your own domain.
          </p>
          <div className="flex-center gap-12" style={{ flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                padding: '16px 20px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--gray-300)',
                fontSize: 16,
                width: 320,
                maxWidth: '100%',
              }}
            />
            <button className="btn btn-primary btn-lg">
              Create Your Page Free →
            </button>
          </div>
          <p className="text-sm mt-16">No credit card required • Free plan included forever</p>
        </div>
      </section>

      {/* Demo Preview */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container text-center">
          <div style={{
            background: 'linear-gradient(180deg, var(--gray-50) 0%, white 100%)',
            borderRadius: 24,
            padding: 40,
            border: '1px solid var(--gray-200)',
            maxWidth: 360,
            margin: '0 auto',
          }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent), #e17055)',
              margin: '0 auto 16px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: 'white', fontSize: 32, fontWeight: 700 }}>
              ✦
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Alex Chen</h3>
            <p className="text-sm" style={{ marginBottom: 24 }}>Product Designer • Creator</p>
            {['My Latest Project →', 'Portfolio', 'Twitter / X', 'GitHub', 'Newsletter'].map((text, i) => (
              <div key={i} style={{
                padding: '12px 16px',
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: 8,
                fontSize: 14,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: '1px solid transparent',
              }}
              onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.background = 'white' }}
              onMouseLeave={e => { e.target.style.borderColor = 'transparent'; e.target.style.background = 'var(--gray-50)' }}>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="text-center mb-48">
            <h2 className="section-title">Everything you need</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Powerful features to help you grow your audience, track engagement, and build your brand.
            </p>
          </div>
          <div className="grid-3">
            {FEATURES.map((f, i) => (
              <div key={i} className="card" style={{ padding: 32, textAlign: 'center' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p className="text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="text-center mb-48">
            <h2 className="section-title">Simple pricing</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Start free. Upgrade when you grow. No hidden fees.
            </p>
          </div>
          <div className="grid-3" style={{ alignItems: 'start' }}>
            {PLANS.map((plan, i) => (
              <div key={i} className="card" style={{
                padding: 40,
                textAlign: 'center',
                borderColor: plan.highlight ? 'var(--accent)' : 'var(--gray-200)',
                position: 'relative',
                transform: plan.highlight ? 'scale(1.05)' : 'none',
              }}>
                {plan.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--accent)',
                    color: 'white',
                    padding: '4px 16px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 600,
                  }}>
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{plan.name}</h3>
                <p className="text-sm mb-24">{plan.description}</p>
                <div style={{ fontSize: 48, fontWeight: 800, marginBottom: 4 }}>
                  {plan.price}
                </div>
                <p className="text-sm" style={{ marginBottom: 24 }}>{plan.period}</p>
                <button className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', justifyContent: 'center', marginBottom: 24 }}>
                  {plan.cta}
                </button>
                <div style={{ textAlign: 'left' }}>
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex gap-8" style={{ padding: '6px 0', fontSize: 14 }}>
                      <span style={{ color: 'var(--accent)' }}>✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, var(--accent-dark), var(--accent))',
        color: 'white',
      }}>
        <div className="container text-center">
          <h2 className="section-title" style={{ color: 'white' }}>
            Ready to level up your link in bio?
          </h2>
          <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
            Join thousands of creators using Lnk.Flow. Start free, no credit card required.
          </p>
          <button className="btn" style={{
            background: 'white',
            color: 'var(--accent)',
            padding: '16px 40px',
            fontSize: 16,
          }}>
            Create Your Free Page →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 24px',
        borderTop: '1px solid var(--gray-200)',
        background: 'white',
      }}>
        <div className="container flex-between" style={{ flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 18 }}>
            <span style={{ color: 'var(--accent)' }}>Lnk</span>.Flow
          </div>
          <div className="flex gap-16 text-sm" style={{ color: 'var(--gray-600)' }}>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
          <p className="text-sm">© 2026 Lnk.Flow. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
