import { useState } from 'react'

export default function YardDashboardScreen({ go }) {
  const [pricingMode, setPricingMode] = useState('auto')
  const [acceptMode, setAcceptMode] = useState('manual')

  const METALS = [
    { name: 'Copper', grade1: 3.80, grade2: 3.20, change: +0.05 },
    { name: 'Aluminium', grade1: 1.20, grade2: 0.90, change: -0.02 },
    { name: 'Steel', grade1: 0.28, grade2: 0.18, change: 0 },
    { name: 'Brass', grade1: 2.90, grade2: 2.30, change: +0.10 },
  ]

  return (
    <div className="screen" style={{ paddingBottom: 120, background: '#f6f6f6' }}>
      <div className="status-bar" style={{ background: '#f6f6f6' }} />
      <div style={{ padding: '16px 20px 0' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div>
            <p style={{ color: '#888888', fontSize: 12 }}>Dashboard</p>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a', margin: 0 }}>MetalPoint Riga</h1>
          </div>
          <div style={{
            background: '#f0f0f0', border: '1px solid #e0e0e0',
            borderRadius: 99, padding: '4px 10px',
            color: '#1a1a1a', fontSize: 12, fontWeight: 600
          }}>● Live</div>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {[
            { label: 'Today', value: '7', unit: 'jobs' },
            { label: 'Pending', value: '3', unit: 'requests', action: () => go('yard-incoming') },
            { label: 'Revenue', value: '€384', unit: 'today' },
          ].map((s, i) => (
            <div key={i} className="card" style={{
              flex: 1, padding: '12px', textAlign: 'center', cursor: s.action ? 'pointer' : 'default'
            }} onClick={s.action}>
              <p style={{ color: '#1a1a1a', fontSize: 20, fontWeight: 700 }}>{s.value}</p>
              <p style={{ color: '#888888', fontSize: 11 }}>{s.unit}</p>
              {s.action && <p style={{ color: '#aaaaaa', fontSize: 10, marginTop: 2 }}>tap →</p>}
            </div>
          ))}
        </div>

        {/* Pricing mode */}
        <h3 style={{ color: '#aaaaaa', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>
          Pricing Mode
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {[
            { id: 'auto', icon: '📊', label: 'Auto Market Pricing', desc: 'System sets prices daily based on live LME / market rates per metal type and condition' },
            { id: 'manual', icon: '✏️', label: 'Manual Pricing', desc: 'Set prices per metal type and condition grade each morning' },
          ].map(opt => (
            <button key={opt.id} onClick={() => setPricingMode(opt.id)} style={{
              background: '#ffffff', border: `1.5px solid ${pricingMode === opt.id ? '#000000' : '#e8e8e8'}`,
              borderRadius: 14, padding: '14px', textAlign: 'left', cursor: 'pointer',
              display: 'flex', gap: 12, alignItems: 'flex-start',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
            }}>
              <span style={{ fontSize: 20 }}>{opt.icon}</span>
              <div style={{ flex: 1 }}>
                <p style={{ color: '#1a1a1a', fontWeight: 600, marginBottom: 3 }}>{opt.label}</p>
                <p style={{ color: '#888888', fontSize: 12, lineHeight: 1.5 }}>{opt.desc}</p>
              </div>
              <div style={{
                width: 20, height: 20, borderRadius: 99, flexShrink: 0,
                border: `2px solid ${pricingMode === opt.id ? '#000000' : '#d0d0d0'}`,
                background: pricingMode === opt.id ? '#000000' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: 12
              }}>{pricingMode === opt.id ? '✓' : ''}</div>
            </button>
          ))}
        </div>

        {/* Price table */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <h3 style={{ color: '#aaaaaa', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
            Today's Prices
          </h3>
          {pricingMode === 'auto' && <span style={{ color: '#aaaaaa', fontSize: 11 }}>Auto-updated · 09:00</span>}
        </div>
        <div className="card" style={{ overflow: 'hidden', marginBottom: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 60px', padding: '8px 14px', borderBottom: '1px solid #f0f0f0' }}>
            {['Metal', 'Grade 1', 'Grade 2', 'Δ'].map(h => (
              <p key={h} style={{ color: '#aaaaaa', fontSize: 11, fontWeight: 600 }}>{h}</p>
            ))}
          </div>
          {METALS.map((m, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 60px',
              padding: '12px 14px', borderBottom: i < METALS.length - 1 ? '1px solid #f0f0f0' : 'none'
            }}>
              <p style={{ color: '#1a1a1a', fontSize: 13, fontWeight: 600 }}>{m.name}</p>
              <p style={{ color: '#555555', fontSize: 13 }}>€{m.grade1}</p>
              <p style={{ color: '#555555', fontSize: 13 }}>€{m.grade2}</p>
              <p style={{
                fontSize: 12, fontWeight: 600,
                color: m.change > 0 ? '#2e7d32' : m.change < 0 ? '#c62828' : '#aaaaaa'
              }}>
                {m.change > 0 ? '+' : ''}{m.change !== 0 ? m.change.toFixed(2) : '—'}
              </p>
            </div>
          ))}
        </div>

        {/* Acceptance mode */}
        <h3 style={{ color: '#aaaaaa', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>
          Request Handling
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {[
            { id: 'auto', icon: '⚡', label: 'Auto-Accept All Requests', desc: 'All incoming deliveries and pickups accepted automatically' },
            { id: 'manual', icon: '👤', label: 'Manual Review', desc: 'Review and approve each request individually' },
          ].map(opt => (
            <button key={opt.id} onClick={() => setAcceptMode(opt.id)} style={{
              background: '#ffffff', border: `1.5px solid ${acceptMode === opt.id ? '#000000' : '#e8e8e8'}`,
              borderRadius: 14, padding: '14px', textAlign: 'left', cursor: 'pointer',
              display: 'flex', gap: 12, alignItems: 'flex-start',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
            }}>
              <span style={{ fontSize: 20 }}>{opt.icon}</span>
              <div style={{ flex: 1 }}>
                <p style={{ color: '#1a1a1a', fontWeight: 600, marginBottom: 3 }}>{opt.label}</p>
                <p style={{ color: '#888888', fontSize: 12, lineHeight: 1.5 }}>{opt.desc}</p>
              </div>
              <div style={{
                width: 20, height: 20, borderRadius: 99, flexShrink: 0,
                border: `2px solid ${acceptMode === opt.id ? '#000000' : '#d0d0d0'}`,
                background: acceptMode === opt.id ? '#000000' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: 12
              }}>{acceptMode === opt.id ? '✓' : ''}</div>
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn-secondary" style={{ flex: 1 }} onClick={() => go('yard-incoming')}>
            📥 Incoming (3)
          </button>
          <button className="btn-primary" style={{ flex: 1 }} onClick={() => go('yard-active')}>
            ⚙️ Active Job
          </button>
        </div>
      </div>
    </div>
  )
}
