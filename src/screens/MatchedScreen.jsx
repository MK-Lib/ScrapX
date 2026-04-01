export default function MatchedScreen({ go, yard, data }) {
  const estMin = (yard.price * data.weightMin).toFixed(2)
  const estMax = (yard.price * data.weightMax).toFixed(2)

  return (
    <div className="screen" style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 120, background: '#ffffff' }}>
      <div style={{ width: '100%', padding: '0 20px' }}>

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{
            width: 72, height: 72, borderRadius: 99,
            background: '#000000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 16px', fontSize: 30, color: '#ffffff',
            boxShadow: '0 0 0 12px rgba(0,0,0,0.06)'
          }}>✓</div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>
            Request Matched!
          </h2>
          <p style={{ color: '#888888', fontSize: 14 }}>
            {yard.name} has accepted your request
          </p>
        </div>

        <div className="card" style={{ padding: '20px', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: '#f6f6f6', border: '1px solid #e8e8e8',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22
            }}>🏭</div>
            <div>
              <p style={{ color: '#1a1a1a', fontWeight: 700, fontSize: 16 }}>{yard.name}</p>
              <p style={{ color: '#888888', fontSize: 12 }}>📍 {yard.address}</p>
            </div>
          </div>

          {[
            { label: 'Metal', value: `${data.metal} · Grade ${data.grade}` },
            { label: 'Condition', value: 'Oxidised' },
            { label: "Today's price", value: `€${yard.price}/kg` },
            { label: 'Est. payout', value: `€${estMin}–€${estMax}`, bold: true },
          ].map((row, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '8px 0', borderBottom: i < 3 ? '1px solid #f0f0f0' : 'none'
            }}>
              <p style={{ color: '#888888', fontSize: 14 }}>{row.label}</p>
              <p style={{ color: '#1a1a1a', fontSize: 14, fontWeight: row.bold ? 700 : 400 }}>{row.value}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
          <button className="btn-secondary" style={{ flex: 1 }}>🗺 Directions</button>
          <button className="btn-secondary" style={{ flex: 1 }} onClick={() => go('deliver')}>📦 I've Arrived →</button>
        </div>

        {/* Status timeline */}
        <div className="card" style={{ padding: '14px 16px' }}>
          <p style={{ color: '#aaaaaa', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Status</p>
          {[
            { step: 'Request sent', done: true },
            { step: 'Matched with yard', done: true },
            { step: 'Deliver / awaiting pickup', done: false, active: true },
            { step: 'Weight confirmed', done: false },
            { step: 'Payment released', done: false },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, marginBottom: i < 4 ? 10 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 20, height: 20, borderRadius: 99, flexShrink: 0,
                  background: s.done ? '#000000' : '#f0f0f0',
                  border: s.active ? '2px solid #000000' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, color: s.done ? '#fff' : '#888888'
                }}>
                  {s.done ? '✓' : s.active ? <span style={{ color: '#000000', fontSize: 8 }}>●</span> : ''}
                </div>
                {i < 4 && <div style={{ width: 1, flex: 1, background: s.done ? '#e0e0e0' : '#f0f0f0', minHeight: 16 }} />}
              </div>
              <p style={{
                color: s.done ? '#1a1a1a' : s.active ? '#1a1a1a' : '#cccccc',
                fontSize: 13, fontWeight: s.active ? 600 : 400, paddingBottom: i < 4 ? 10 : 0
              }}>{s.step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
