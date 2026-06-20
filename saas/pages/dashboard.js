import Head from 'next/head'
import { useState } from 'react'

export default function Dashboard() {
  const [links, setLinks] = useState([
    { id: '1', title: 'My Latest Project', url: 'https://example.com/project', icon: '🚀', clicks: 142, active: true },
    { id: '2', title: 'Portfolio', url: 'https://example.com/portfolio', icon: '🎨', clicks: 89, active: true },
    { id: '3', title: 'Twitter / X', url: 'https://x.com/username', icon: '🐦', clicks: 256, active: true },
    { id: '4', title: 'GitHub', url: 'https://github.com/username', icon: '💻', clicks: 67, active: false },
    { id: '5', title: 'Newsletter', url: 'https://example.com/newsletter', icon: '📧', clicks: 34, active: true },
  ])

  const totalClicks = links.reduce((sum, l) => sum + l.clicks, 0)

  return (
    <>
      <Head>
        <title>Dashboard — Lnk.Flow</title>
      </Head>

      {/* Sidebar */}
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <aside style={{
          width: 240,
          background: 'white',
          borderRight: '1px solid var(--gray-200)',
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 24, letterSpacing: -1 }}>
            <span style={{ color: 'var(--accent)' }}>Lnk</span>.Flow
          </div>
          {[
            { label: 'Dashboard', icon: '📊', active: true },
            { label: 'My Links', icon: '🔗', active: false },
            { label: 'Analytics', icon: '📈', active: false },
            { label: 'Appearance', icon: '🎨', active: false },
            { label: 'Settings', icon: '⚙️', active: false },
          ].map((item, i) => (
            <div key={i} style={{
              padding: '10px 14px',
              borderRadius: 'var(--radius-sm)',
              background: item.active ? 'var(--gray-50)' : 'transparent',
              color: item.active ? 'var(--accent)' : 'var(--gray-700)',
              fontWeight: item.active ? 600 : 400,
              cursor: 'pointer',
              fontSize: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}>
              <span>{item.icon}</span>
              {item.label}
            </div>
          ))}
          <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--gray-200)' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0',
            }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%',
                background: 'var(--accent)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: 'white', fontSize: 14, fontWeight: 600 }}>
                A
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Alex Chen</div>
                <div className="badge badge-pro" style={{ fontSize: 11 }}>Pro</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: 32, maxWidth: 960 }}>
          <div className="flex-between mb-32" style={{ flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>Dashboard</h1>
              <p className="text-sm">Welcome back, Alex. Here's your overview.</p>
            </div>
            <button className="btn btn-primary">
              + Add New Link
            </button>
          </div>

          {/* Stats */}
          <div className="grid-4 mb-32">
            {[
              { label: 'Total Clicks', value: totalClicks.toLocaleString(), change: '+12%' },
              { label: 'Active Links', value: links.filter(l => l.active).length.toString(), change: '+2' },
              { label: 'Visitors Today', value: '189', change: '+8%' },
              { label: 'Conversion Rate', value: '6.2%', change: '+1.4%' },
            ].map((stat, i) => (
              <div key={i} className="card">
                <p className="text-sm" style={{ marginBottom: 4 }}>{stat.label}</p>
                <div className="flex-between">
                  <span style={{ fontSize: 28, fontWeight: 800 }}>{stat.value}</span>
                  <span style={{
                    fontSize: 13, fontWeight: 600, color: '#2e7d32',
                    background: '#e8f5e9', padding: '2px 8px', borderRadius: 12,
                  }}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Links Table */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="flex-between" style={{ padding: '16px 20px', borderBottom: '1px solid var(--gray-200)' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>Your Links</h3>
              <div className="flex gap-8">
                <button className="btn btn-secondary" style={{ padding: '6px 14px', fontSize: 13 }}>
                  Reorder
                </button>
                <button className="btn btn-secondary" style={{ padding: '6px 14px', fontSize: 13 }}>
                  Export
                </button>
              </div>
            </div>
            {links.map((link, i) => (
              <div key={link.id} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 20px',
                borderBottom: i < links.length - 1 ? '1px solid var(--gray-100)' : 'none',
                fontSize: 14,
              }}>
                <span style={{ cursor: 'grab', color: 'var(--gray-400)' }}>⠿</span>
                <span style={{ fontSize: 18 }}>{link.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>{link.title}</div>
                  <div className="text-sm" style={{ fontSize: 12 }}>{link.url}</div>
                </div>
                <div className="flex gap-8" style={{ alignItems: 'center' }}>
                  {link.active ? (
                    <span className="badge badge-pro" style={{ fontSize: 11 }}>Active</span>
                  ) : (
                    <span className="badge badge-free" style={{ fontSize: 11 }}>Paused</span>
                  )}
                  <span style={{ fontWeight: 600, color: 'var(--gray-700)', minWidth: 40, textAlign: 'right' }}>
                    {link.clicks}
                  </span>
                  <span className="text-sm" style={{ minWidth: 30 }}>clicks</span>
                  <button style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: 4, color: 'var(--gray-500)', fontSize: 16,
                  }}>⋯</button>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="card mt-24">
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Recent Activity</h3>
            {[
              { action: 'New click from Twitter', time: '2 min ago', link: 'Portfolio' },
              { action: 'New click from Instagram', time: '15 min ago', link: 'Latest Project' },
              { action: 'Link clicked 50 times today', time: '1 hour ago', link: 'Twitter / X' },
              { action: 'New visitor from Japan', time: '3 hours ago', link: 'Newsletter' },
            ].map((activity, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', padding: '10px 0',
                borderBottom: i < 3 ? '1px solid var(--gray-100)' : 'none',
                fontSize: 14,
              }}>
                <div>
                  <span style={{ fontWeight: 500 }}>{activity.action}</span>
                  <span className="text-sm" style={{ marginLeft: 8, fontSize: 12 }}>
                    via {activity.link}
                  </span>
                </div>
                <span className="text-sm" style={{ fontSize: 12 }}>{activity.time}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
