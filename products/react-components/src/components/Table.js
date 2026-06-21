import React, { useState } from 'react'

export default function Table({ columns, data, pageSize = 0 }) {
  const [sortKey, setSortKey] = useState(null)
  const [sortDir, setSortDir] = useState('asc')
  const [page, setPage] = useState(0)

  const sorted = [...data].sort((a, b) => {
    if (!sortKey) return 0
    const av = a[sortKey], bv = b[sortKey]
    return sortDir === 'asc' ? (av > bv ? 1 : -1) : (av < bv ? 1 : -1)
  })

  const paged = pageSize ? sorted.slice(page * pageSize, (page + 1) * pageSize) : sorted
  const totalPages = pageSize ? Math.ceil(sorted.length / pageSize) : 1

  return (
    <div style={{ overflowX: 'auto', borderRadius: 'var(--ui-radius, 8px)', border: '1px solid var(--ui-border, #e9ecef)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ background: '#f8f9fa' }}>
            {columns.map(col => (
              <th key={col.key} onClick={() => col.sortable !== false && (() => {
                if (sortKey === col.key) { setSortDir(d => d === 'asc' ? 'desc' : 'asc') }
                else { setSortKey(col.key); setSortDir('asc') }
              })()} style={{
                padding: '12px 16px', textAlign: 'left', fontWeight: 600, cursor: col.sortable !== false ? 'pointer' : 'default',
                borderBottom: '2px solid var(--ui-border, #dee2e6)', whiteSpace: 'nowrap',
              }}>
                {col.label} {sortKey === col.key && (sortDir === 'asc' ? '↑' : '↓')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paged.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--ui-border, #e9ecef)' }}
              onMouseEnter={e => e.target.style.background = '#f8f9fa'}
              onMouseLeave={e => e.target.style.background = 'transparent'}>
              {columns.map(col => (
                <td key={col.key} style={{ padding: '10px 16px' }}>
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {pageSize > 0 && totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, padding: 12, borderTop: '1px solid var(--ui-border, #e9ecef)' }}>
          <button disabled={page === 0} onClick={() => setPage(p => p - 1)} style={{ padding: '4px 12px', border: '1px solid var(--ui-border, #dee2e6)', borderRadius: 6, background: 'white', cursor: 'pointer' }}>←</button>
          <span style={{ padding: '4px 12px', fontSize: 13, alignSelf: 'center' }}>{page + 1} / {totalPages}</span>
          <button disabled={page >= totalPages - 1} onClick={() => setPage(p => p + 1)} style={{ padding: '4px 12px', border: '1px solid var(--ui-border, #dee2e6)', borderRadius: 6, background: 'white', cursor: 'pointer' }}>→</button>
        </div>
      )}
    </div>
  )
}
