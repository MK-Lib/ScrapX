export default function HomeScreen({ go, role }) {
  if (role === 'yard') { go('yard-dashboard'); return null }

  return (
    <div className="screen" style={{ paddingBottom: 120, background: '#f6f6f6' }}>
      <div className="status-bar" />

      <div style={{ padding: '16px 20px 0' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div>
            <p style={{ color: '#888888', fontSize: 13, marginBottom: 2 }}>Good morning</p>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', margin: 0 }}>Alex K.</h1>
          </div>
          <div style={{
            width: 42, height: 42, borderRadius: 99,
            background: '#000000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, fontWeight: 700, color: '#fff'
          }}>A</div>
        </div>

        {/* Wallet card */}
        <div style={{
          background: '#000000',
          borderRadius: 20, padding: '20px', marginBottom: 24
        }}>
          <p style={{ color: '#aaaaaa', fontSize: 12, marginBottom: 4 }}>ScrapX Wallet</p>
          <p style={{ fontSize: 32, fontWeight: 700, color: '#ffffff', marginBottom: 2 }}>€142.50</p>
          <p style={{ color: '#66bb6a', fontSize: 13 }}>Available to withdraw</p>
          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            <button style={{
              background: '#1a1a1a', color: '#ffffff', border: '1px solid #333333',
              borderRadius: 10, padding: '8px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer'
            }}>Withdraw</button>
            <button style={{
              background: '#1a1a1a', color: '#ffffff', border: '1px solid #333333',
              borderRadius: 10, padding: '8px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer'
            }}>Transactions</button>
          </div>
        </div>

        {/* Main CTA */}
        <button
          className="btn-primary"
          onClick={() => go('location')}
          style={{
            fontSize: 17, padding: '18px 20px', borderRadius: 16,
            marginBottom: 28,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10
          }}
        >
          <span style={{ fontSize: 20 }}>♻️</span>
          <span>Sell My Scrap</span>
          <span style={{ marginLeft: 'auto', opacity: 0.5 }}>→</span>
        </button>

        {/* Recent activity */}
        <h3 style={{ color: '#aaaaaa', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
          Recent Activity
        </h3>
        {[
          { icon: '🔩', metal: 'Aluminium Sheet', yard: 'Baltic Scrap Co.', amount: '+€28.40', date: '2 days ago' },
          { icon: '🔌', metal: 'Copper Wire', yard: 'MetalPoint Riga', amount: '+€61.20', date: '1 week ago' },
          { icon: '⚙️', metal: 'Steel Mixed', yard: 'EcoMetal Jūrmala', amount: '+€12.80', date: '2 weeks ago' },
        ].map((t, i) => (
          <div key={i} className="card" style={{
            padding: '14px', marginBottom: 8,
            display: 'flex', alignItems: 'center', gap: 12
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: '#f6f6f6', border: '1px solid #e8e8e8',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, flexShrink: 0
            }}>{t.icon}</div>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#1a1a1a', fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{t.metal}</p>
              <p style={{ color: '#888888', fontSize: 12 }}>{t.yard} · {t.date}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: '#1a1a1a', fontSize: 15, fontWeight: 700 }}>{t.amount}</p>
              <p style={{ color: '#66bb6a', fontSize: 11 }}>✓ Paid</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
