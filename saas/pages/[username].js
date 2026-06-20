import Head from 'next/head'

// Mock data — will be replaced with DB lookup
const MOCK_PROFILES = {
  'alex': {
    name: 'Alex Chen',
    bio: 'Product Designer • Creator',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
    theme: 'light',
    links: [
      { title: 'My Latest Project →', url: '#', icon: '🚀' },
      { title: 'Portfolio', url: '#', icon: '🎨' },
      { title: 'Twitter / X', url: '#', icon: '🐦' },
      { title: 'GitHub', url: '#', icon: '💻' },
      { title: 'Newsletter', url: '#', icon: '📧' },
    ],
  }
}

const THEMES = {
  light: { bg: '#fafafa', fg: '#1a1a2e', card: 'white', cardBorder: '#e9ecef', accent: '#6c5ce7' },
  dark: { bg: '#1a1a2e', fg: '#f8f9fa', card: '#16213e', cardBorder: '#0f3460', accent: '#a29bfe' },
  sunset: { bg: '#2d1b69', fg: '#fef9ef', card: '#4a2c8a', cardBorder: '#6c5ce7', accent: '#ffd166' },
}

export default function BioPage({ profile }) {
  if (!profile) {
    return (
      <div className="flex-center" style={{ minHeight: '100vh', fontSize: 18 }}>
        <div className="text-center">
          <h1 style={{ fontSize: 48, marginBottom: 16 }}>404</h1>
          <p className="text-sm">This page doesn't exist.</p>
        </div>
      </div>
    )
  }

  const theme = THEMES[profile.theme] || THEMES.light

  return (
    <>
      <Head>
        <title>{profile.name} | Lnk.Flow</title>
        <meta name="description" content={profile.bio} />
        <meta property="og:title" content={profile.name} />
        <meta property="og:description" content={profile.bio} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{
        minHeight: '100vh',
        background: theme.bg,
        color: theme.fg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}>
        <div style={{ width: '100%', maxWidth: 420 }}>
          {/* Avatar + Info */}
          <div className="text-center" style={{ marginBottom: 32 }}>
            <div style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${theme.accent}, #e17055)`,
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 36,
              color: 'white',
              fontWeight: 700,
            }}>
              {profile.name.charAt(0)}
            </div>
            <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>{profile.name}</h1>
            <p style={{ fontSize: 15, opacity: 0.7 }}>{profile.bio}</p>
          </div>

          {/* Links */}
          <div>
            {profile.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '16px 20px',
                  background: theme.card,
                  border: `1px solid ${theme.cardBorder}`,
                  borderRadius: 12,
                  marginBottom: 10,
                  color: theme.fg,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  fontSize: 15,
                  fontWeight: 500,
                }}
                onMouseEnter={e => {
                  e.target.style.borderColor = theme.accent
                  e.target.style.transform = 'translateY(-1px)'
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
                }}
                onMouseLeave={e => {
                  e.target.style.borderColor = theme.cardBorder
                  e.target.style.transform = 'none'
                  e.target.style.boxShadow = 'none'
                }}
              >
                <span style={{ fontSize: 20 }}>{link.icon}</span>
                <span style={{ flex: 1 }}>{link.title}</span>
                <span style={{ opacity: 0.4, fontSize: 14 }}>→</span>
              </a>
            ))}
          </div>

          {/* Footer */}
          <p className="text-center text-sm" style={{ marginTop: 32, opacity: 0.4 }}>
            Powered by Lnk.Flow
          </p>
        </div>
      </div>
    </>
  )
}

// Mock getServerSideProps — will be replaced with DB lookup
export async function getServerSideProps({ params }) {
  const profile = MOCK_PROFILES[params.username] || null
  return { props: { profile } }
}
