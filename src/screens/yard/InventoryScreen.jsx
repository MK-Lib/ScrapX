export default function InventoryScreen({ onNext, onBack }) {
  const inventory = [
    { metal: 'Copper Pipe', grade: 'Grade 2', weight: '5.3 kg', cost: '€16.96', date: 'Today 14:35', color: '#f97316' },
    { metal: 'Copper Wire', grade: 'Grade 1', weight: '8.1 kg', cost: '€33.21', date: 'Today 11:20', color: '#f97316' },
    { metal: 'Aluminium', grade: 'Clean profile', weight: '22.4 kg', cost: '€23.52', date: 'Yesterday', color: '#3b82f6' },
    { metal: 'Steel', grade: 'Heavy melt', weight: '48.0 kg', cost: '€10.56', date: 'Mar 27', color: '#64748b' },
    { metal: 'Copper', grade: 'Grade 3', weight: '3.2 kg', cost: '€8.32', date: 'Mar 26', color: '#f97316' },
  ];

  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      {/* Header */}
      <div style={{ padding: '16px 24px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: -0.4, marginBottom: 3 }}>Stockpile</h2>
            <p style={{ fontSize: 13, color: '#64748b' }}>Updated just now</p>
          </div>
          <div style={{ width: 10, height: 10, background: '#22c55e', borderRadius: 5, marginTop: 8, boxShadow: '0 0 8px #22c55e' }} />
        </div>

        {/* Updated banner */}
        <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: '10px 14px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
          <p style={{ fontSize: 13, color: '#86efac', fontWeight: 500 }}>Copper Pipe 5.3 kg added — Andrejs K.</p>
        </div>

        {/* Summary row */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          {[
            { label: 'Total Weight', val: '87.0 kg', icon: '⚖️' },
            { label: 'Total Bought', val: '€92.57', icon: '💰' },
            { label: 'Today', val: '13.4 kg', icon: '📅' },
          ].map(s => (
            <div key={s.label} style={{ flex: 1, background: '#1e293b', borderRadius: 12, padding: '12px 8px', textAlign: 'center', border: '1px solid #334155' }}>
              <span style={{ fontSize: 16, display: 'block', marginBottom: 4 }}>{s.icon}</span>
              <p style={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: -0.4, marginBottom: 2 }}>{s.val}</p>
              <p style={{ fontSize: 10, color: '#475569' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Metal breakdown */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 14, padding: '14px', marginBottom: 14 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 12 }}>By Metal Type</p>
          {[
            { metal: 'Copper', weight: 16.6, pct: 75, color: '#f97316' },
            { metal: 'Aluminium', weight: 22.4, pct: 60, color: '#3b82f6' },
            { metal: 'Steel', weight: 48.0, pct: 40, color: '#64748b' },
          ].map((m, i) => (
            <div key={i} style={{ marginBottom: i < 2 ? 12 : 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>{m.metal}</span>
                <span style={{ fontSize: 13, color: '#94a3b8' }}>{m.weight} kg</span>
              </div>
              <div style={{ height: 5, background: '#0f172a', borderRadius: 3 }}>
                <div style={{ height: '100%', width: `${m.pct}%`, background: m.color, borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inventory list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 24px 24px' }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>Recent Acquisitions</p>
        {inventory.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', borderBottom: i < inventory.length - 1 ? '1px solid #1e293b' : 'none' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `rgba(${item.color === '#f97316' ? '249,115,22' : item.color === '#3b82f6' ? '59,130,246' : '100,116,139'},0.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid rgba(${item.color === '#f97316' ? '249,115,22' : item.color === '#3b82f6' ? '59,130,246' : '100,116,139'},0.2)` }}>
              <span style={{ fontSize: 16 }}>🔧</span>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 2 }}>{item.metal}</p>
              <p style={{ fontSize: 11, color: '#475569' }}>{item.grade} · {item.date}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 1 }}>{item.weight}</p>
              <p style={{ fontSize: 11, color: '#64748b' }}>{item.cost}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div style={{ padding: '10px 0 28px', borderTop: '1px solid #1e293b', display: 'flex', background: '#0f172a' }}>
        {[
          { icon: '📊', label: 'Dashboard' },
          { icon: '📦', label: 'Requests', badge: 3 },
          { icon: '📋', label: 'Stockpile', active: true },
          { icon: '⚙️', label: 'Settings' },
        ].map((item, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, position: 'relative' }}>
            <span style={{ fontSize: 20 }}>{item.icon}</span>
            <span style={{ fontSize: 10, fontWeight: 600, color: item.active ? '#3b82f6' : '#334155' }}>{item.label}</span>
            {item.badge && <div style={{ position: 'absolute', top: -2, right: '20%', width: 16, height: 16, background: '#ef4444', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: '#fff' }}>{item.badge}</span>
            </div>}
          </div>
        ))}
      </div>
    </div>
  );
}
