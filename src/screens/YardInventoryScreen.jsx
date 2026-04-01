const INVENTORY = [
  { metal: 'Copper', grade: 1, weight: 142, value: 539.60, lastAdded: '5.3 kg today' },
  { metal: 'Copper', grade: 2, weight: 68, value: 217.60, lastAdded: '5.3 kg today', new: true },
  { metal: 'Aluminium', grade: 1, weight: 320, value: 384.00, lastAdded: '25 kg, 2h ago' },
  { metal: 'Steel', grade: 1, weight: 1240, value: 347.20, lastAdded: '80 kg yesterday' },
  { metal: 'Brass', grade: 1, weight: 45, value: 130.50, lastAdded: '12 kg, 3 days ago' },
]

export default function YardInventoryScreen({ go }) {
  const totalValue = INVENTORY.reduce((s, r) => s + r.value, 0).toFixed(2)
  const totalWeight = INVENTORY.reduce((s, r) => s + r.weight, 0)

  return (
    <div className="screen" style={{ paddingBottom: 120, background: '#f6f6f6' }}>
      <div className="status-bar" style={{ background: '#f6f6f6' }} />
      <div style={{ padding: '12px 20px 0' }}>
        <button className="back-btn" onClick={() => go('yard-dashboard')}>← Dashboard</button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', margin: '16px 0 20px' }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', margin: '0 0 4px' }}>Stockpile</h2>
            <p style={{ color: '#888888', fontSize: 13 }}>Running inventory · updated live</p>
          </div>
          <div style={{
            background: '#000000', borderRadius: 12, padding: '8px 14px', textAlign: 'right'
          }}>
            <p style={{ color: '#ffffff', fontSize: 18, fontWeight: 700 }}>€{totalValue}</p>
            <p style={{ color: '#888888', fontSize: 11 }}>at cost</p>
          </div>
        </div>

        {/* New addition */}
        <div style={{
          background: '#ffffff', border: '1px solid #e8e8e8',
          borderRadius: 14, padding: '14px', marginBottom: 20,
          display: 'flex', gap: 12, alignItems: 'center',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: '#f0f0f0', border: '1px solid #e8e8e8',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18
          }}>➕</div>
          <div>
            <p style={{ color: '#1a1a1a', fontWeight: 600, marginBottom: 2 }}>Just added to inventory</p>
            <p style={{ color: '#888888', fontSize: 13 }}>5.3 kg Copper Pipe · Grade 2 · €16.96 buy price</p>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {[
            { value: totalWeight.toLocaleString(), unit: 'kg total' },
            { value: `€${totalValue}`, unit: 'at buy price' },
            { value: '7', unit: 'lots today' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ flex: 1, padding: '12px', textAlign: 'center' }}>
              <p style={{ color: '#1a1a1a', fontSize: 16, fontWeight: 700 }}>{s.value}</p>
              <p style={{ color: '#888888', fontSize: 11 }}>{s.unit}</p>
            </div>
          ))}
        </div>

        <h3 style={{ color: '#aaaaaa', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>
          By Metal Type
        </h3>
        <div className="card" style={{ overflow: 'hidden', marginBottom: 20 }}>
          {INVENTORY.map((row, i) => (
            <div key={i} style={{
              padding: '14px',
              borderBottom: i < INVENTORY.length - 1 ? '1px solid #f0f0f0' : 'none',
              background: row.new ? '#fafafa' : 'transparent'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <p style={{ color: '#1a1a1a', fontWeight: 600, fontSize: 14 }}>{row.metal}</p>
                  <span style={{
                    background: '#f0f0f0', borderRadius: 99, padding: '1px 6px',
                    color: '#555555', fontSize: 10, border: '1px solid #e0e0e0'
                  }}>G{row.grade}</span>
                  {row.new && <span style={{
                    background: '#000000', borderRadius: 99, padding: '1px 6px',
                    color: '#fff', fontSize: 10
                  }}>NEW</span>}
                </div>
                <p style={{ color: '#1a1a1a', fontSize: 15, fontWeight: 700 }}>€{row.value.toFixed(2)}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ color: '#888888', fontSize: 12 }}>⚖️ {row.weight} kg stockpile</p>
                <p style={{ color: '#aaaaaa', fontSize: 11 }}>Last: {row.lastAdded}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn-secondary" style={{ flex: 1 }}>📊 Export</button>
          <button className="btn-primary" style={{ flex: 1 }} onClick={() => go('yard-dashboard')}>← Dashboard</button>
        </div>
      </div>
    </div>
  )
}
