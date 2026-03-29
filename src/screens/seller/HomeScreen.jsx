export default function HomeScreen({ onNext }) {
  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      {/* Header */}
      <div style={{ padding: '20px 24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: 13, color: '#64748b', marginBottom: 2 }}>Good morning,</p>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: -0.4 }}>Andrejs K. 👋</h2>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ width: 42, height: 42, borderRadius: 21, background: 'linear-gradient(135deg,#f97316,#dc2626)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 16, fontWeight: 700 }}>AK</span>
          </div>
          <div style={{ position: 'absolute', bottom: 1, right: 1, width: 10, height: 10, background: '#22c55e', borderRadius: 5, border: '2px solid #0f172a' }} />
        </div>
      </div>

      {/* Balance card */}
      <div style={{ margin: '20px 24px', background: 'linear-gradient(135deg,#1e3a5f,#1e293b)', borderRadius: 20, padding: '20px', border: '1px solid rgba(59,130,246,0.2)' }}>
        <p style={{ fontSize: 12, color: '#94a3b8', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>Wallet Balance</p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 16 }}>
          <span style={{ fontSize: 36, fontWeight: 800, color: '#fff', letterSpacing: -1 }}>€142</span>
          <span style={{ fontSize: 18, color: '#64748b' }}>.50</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, color: '#64748b' }}>Last sale · 3 days ago</p>
            <p style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>Copper wire · 2.4 kg · €16.90</p>
          </div>
          <button style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', color: '#f97316', fontSize: 13, fontWeight: 600, padding: '8px 14px', borderRadius: 10 }}>
            Withdraw
          </button>
        </div>
      </div>

      {/* Main CTA */}
      <div style={{ padding: '0 24px', marginBottom: 20 }}>
        <button onClick={onNext} style={{
          width: '100%', padding: '22px', background: '#f97316',
          borderRadius: 20, display: 'flex', alignItems: 'center', gap: 16,
          boxShadow: '0 8px 32px rgba(249,115,22,0.4)',
          textAlign: 'left',
        }}>
          <div style={{ width: 52, height: 52, background: 'rgba(255,255,255,0.15)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: -0.3, marginBottom: 2 }}>Sell My Scrap</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>Photo · AI ID · Best price nearby</p>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Stats row */}
      <div style={{ padding: '0 24px', display: 'flex', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'Total Earned', value: '€1,240', icon: '💰' },
          { label: 'Transactions', value: '23', icon: '📦' },
          { label: 'Avg. Rating', value: '4.9★', icon: '⭐' },
        ].map(s => (
          <div key={s.label} style={{ flex: 1, background: '#1e293b', borderRadius: 14, padding: '14px 10px', textAlign: 'center', border: '1px solid #334155' }}>
            <div style={{ fontSize: 18, marginBottom: 6 }}>{s.icon}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{s.value}</div>
            <div style={{ fontSize: 10, color: '#475569', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div style={{ padding: '0 24px', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Recent Activity</h3>
          <span style={{ fontSize: 13, color: '#f97316', fontWeight: 500 }}>View all</span>
        </div>
        {[
          { metal: 'Copper wire', weight: '2.4 kg', value: '€16.90', date: 'Mar 26', status: 'Paid' },
          { metal: 'Aluminium cans', weight: '5.1 kg', value: '€5.10', date: 'Mar 20', status: 'Paid' },
          { metal: 'Steel pipes', weight: '12.8 kg', value: '€9.98', date: 'Mar 14', status: 'Paid' },
        ].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: i < 2 ? '1px solid #1e293b' : 'none' }}>
            <div style={{ width: 38, height: 38, background: '#1e293b', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 18 }}>🔩</span>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 2 }}>{t.metal}</p>
              <p style={{ fontSize: 12, color: '#475569' }}>{t.weight} · {t.date}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', marginBottom: 2 }}>{t.value}</p>
              <span style={{ fontSize: 10, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '2px 6px', borderRadius: 4, fontWeight: 600 }}>{t.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <BottomNav active="home" />
    </div>
  );
}

function BottomNav({ active }) {
  const items = [
    { id: 'home', label: 'Home', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )},
    { id: 'sell', label: 'Sell', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    )},
    { id: 'wallet', label: 'Wallet', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    )},
    { id: 'profile', label: 'Profile', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    )},
  ];
  return (
    <div style={{ padding: '10px 0 28px', borderTop: '1px solid #1e293b', display: 'flex', background: '#0f172a' }}>
      {items.map(item => (
        <div key={item.id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, color: item.id === active ? '#f97316' : '#334155' }}>
          {item.icon}
          <span style={{ fontSize: 10, fontWeight: 600 }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
