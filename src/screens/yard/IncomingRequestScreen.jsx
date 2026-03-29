export default function IncomingRequestScreen({ onNext, onBack }) {
  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      <div style={{ padding: '16px 24px 0', flex: 1, overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <div style={{ width: 10, height: 10, background: '#f97316', borderRadius: 5, boxShadow: '0 0 8px rgba(249,115,22,0.6)' }} />
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: -0.4 }}>New Request</h2>
          <span style={{ marginLeft: 'auto', fontSize: 12, color: '#64748b' }}>Just now</span>
        </div>

        {/* User card */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 16, padding: '16px', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid #0f172a' }}>
            <div style={{ width: 46, height: 46, background: 'linear-gradient(135deg,#7c3a1a,#4a2510)', borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: '#fed7aa' }}>AK</span>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 3 }}>Andrejs K.</p>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: '#f59e0b' }}>★ 4.7</span>
                <span style={{ fontSize: 12, color: '#64748b' }}>23 transactions</span>
                <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 500 }}>Verified ✓</span>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>1.2 km</p>
              <p style={{ fontSize: 10, color: '#475569' }}>away</p>
            </div>
          </div>

          {/* Metal details */}
          {[
            ['Metal', 'Copper Pipe'],
            ['Grade', 'Grade 2 — Mixed'],
            ['Condition', 'Oxidised surface'],
            ['Est. Weight', '4–7 kg'],
            ['Delivery', 'Self-delivery'],
          ].map(([k, v], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
              <span style={{ fontSize: 13, color: '#475569' }}>{k}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{v}</span>
            </div>
          ))}
        </div>

        {/* Photos */}
        <div style={{ marginBottom: 14 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>Seller's photos</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {['linear-gradient(160deg,#7c3a1a,#4a2510)','linear-gradient(160deg,#6b3a1a,#3d2010)','linear-gradient(160deg,#5a2a0a,#2d1508)'].map((bg, i) => (
              <div key={i} style={{ flex: 1, height: 78, borderRadius: 10, background: bg, border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ width: i === 0 ? 38 : 28, height: i === 0 ? 12 : 18, background: 'rgba(180,90,30,0.7)', borderRadius: i === 0 ? 6 : 3, transform: i === 1 ? 'rotate(-20deg)' : 'none' }} />
                <div style={{ position: 'absolute', top: 5, left: 5, background: 'rgba(0,0,0,0.5)', borderRadius: 4, padding: '2px 5px' }}>
                  <span style={{ fontSize: 9, color: '#94a3b8' }}>Photo {i+1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price at stake */}
        <div style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.15)', borderRadius: 14, padding: '14px', marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 12, color: '#64748b', marginBottom: 3 }}>Your rate for this metal</p>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>€3.20/kg — Grade 2</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 12, color: '#64748b', marginBottom: 3 }}>Est. buy cost</p>
            <p style={{ fontSize: 18, fontWeight: 800, color: '#f97316', letterSpacing: -0.5 }}>€14–€22</p>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
          <button style={{
            flex: 1, padding: '16px', background: '#1e293b', border: '1.5px solid #ef4444',
            borderRadius: 14, fontSize: 16, fontWeight: 700, color: '#ef4444',
          }}>
            ✕ Decline
          </button>
          <button onClick={onNext} style={{
            flex: 2, padding: '16px', background: '#22c55e', border: 'none',
            borderRadius: 14, fontSize: 16, fontWeight: 700, color: '#fff',
            boxShadow: '0 4px 20px rgba(34,197,94,0.35)',
          }}>
            ✓ Accept Request
          </button>
        </div>
      </div>
    </div>
  );
}
