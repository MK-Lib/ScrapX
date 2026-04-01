const PRICE_LIST = [
  { metal: 'Copper Pipe', grade: 1, price: 3.80 },
  { metal: 'Copper Pipe', grade: 2, price: 3.20 },
  { metal: 'Copper Wire', grade: 1, price: 4.10 },
  { metal: 'Aluminium Sheet', grade: 1, price: 1.20 },
  { metal: 'Steel Mixed', grade: 1, price: 0.28 },
  { metal: 'Brass', grade: 1, price: 2.90 },
]

export default function YardDetailScreen({ go, yard, data }) {
  return (
    <div className="screen" style={{ paddingBottom: 130, background: '#f6f6f6' }}>
      <div className="status-bar" style={{ background: '#f6f6f6' }} />
      <div style={{ padding: '12px 20px 0' }}>
        <button className="back-btn" onClick={() => go('map')}>← Back to map</button>

        <div style={{
          background: '#ffffff', border: '1px solid #e8e8e8',
          borderRadius: 20, padding: 20, margin: '16px 0',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
        }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 14 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 14,
              background: '#f6f6f6', border: '1px solid #e8e8e8',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28
            }}>🏭</div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', marginBottom: 4 }}>{yard.name}</h2>
              <p style={{ color: '#888888', fontSize: 13 }}>📍 {yard.address}</p>
              <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
                <span style={{ background: '#f0f0f0', border: '1px solid #e0e0e0', borderRadius: 99, padding: '2px 8px', color: '#555555', fontSize: 11 }}>
                  🚛 Pickup Available
                </span>
                <span style={{ background: '#f6f6f6', border: '1px solid #e8e8e8', borderRadius: 99, padding: '2px 8px', color: '#888888', fontSize: 11 }}>
                  📦 Drop-off
                </span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: '#1a1a1a', fontSize: 15, fontWeight: 700 }}>⭐ {yard.rating}</p>
              <p style={{ color: '#888888', fontSize: 11 }}>124 reviews</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ flex: 1, background: '#f6f6f6', borderRadius: 10, padding: '10px 12px' }}>
              <p style={{ color: '#aaaaaa', fontSize: 11 }}>HOURS TODAY</p>
              <p style={{ color: '#1a1a1a', fontSize: 13, fontWeight: 600 }}>{yard.hours}</p>
            </div>
            <div style={{ flex: 1, background: '#f6f6f6', borderRadius: 10, padding: '10px 12px' }}>
              <p style={{ color: '#aaaaaa', fontSize: 11 }}>DISTANCE</p>
              <p style={{ color: '#1a1a1a', fontSize: 13, fontWeight: 600 }}>{yard.distance}</p>
            </div>
            <div style={{ flex: 1, background: '#000000', borderRadius: 10, padding: '10px 12px' }}>
              <p style={{ color: '#888888', fontSize: 11 }}>YOUR METAL</p>
              <p style={{ color: '#ffffff', fontSize: 14, fontWeight: 700 }}>€{yard.price}/kg</p>
            </div>
          </div>
        </div>

        {/* Your scrap highlight */}
        <div style={{
          background: '#ffffff', border: '1px solid #e8e8e8',
          borderRadius: 14, padding: '14px', marginBottom: 16,
          boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
        }}>
          <p style={{ color: '#aaaaaa', fontSize: 12, marginBottom: 8 }}>YOUR SCRAP AT THIS YARD</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#1a1a1a', fontWeight: 600 }}>{data.metal} · Grade {data.grade}</p>
              <p style={{ color: '#888888', fontSize: 13 }}>{data.weightMin}–{data.weightMax} kg · {data.condition}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: '#1a1a1a', fontSize: 18, fontWeight: 700 }}>
                €{(yard.price * data.weightMin).toFixed(0)}–€{(yard.price * data.weightMax).toFixed(0)}
              </p>
              <p style={{ color: '#888888', fontSize: 11 }}>est. payout</p>
            </div>
          </div>
        </div>

        <h3 style={{ color: '#aaaaaa', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>
          Today's Price List
        </h3>
        <div className="card" style={{ marginBottom: 20, overflow: 'hidden' }}>
          {PRICE_LIST.map((row, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 14px',
              borderBottom: i < PRICE_LIST.length - 1 ? '1px solid #f0f0f0' : 'none',
              background: row.metal === data.metal && row.grade === data.grade ? '#f8f8f8' : 'transparent'
            }}>
              <div>
                <p style={{ color: '#1a1a1a', fontSize: 13, fontWeight: row.metal === data.metal ? 600 : 400 }}>
                  {row.metal}
                  {row.metal === data.metal && row.grade === data.grade && (
                    <span style={{ color: '#888888', fontSize: 11, marginLeft: 6 }}>← yours</span>
                  )}
                </p>
                <p style={{ color: '#aaaaaa', fontSize: 11 }}>Grade {row.grade}</p>
              </div>
              <p style={{
                color: row.metal === data.metal && row.grade === data.grade ? '#000000' : '#555555',
                fontSize: 15, fontWeight: row.metal === data.metal ? 700 : 400
              }}>€{row.price}/kg</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn-secondary" style={{ flex: 1 }} onClick={() => go('confirm-request')}>
            🚶 Deliver Myself
          </button>
          <button className="btn-primary" style={{ flex: 1 }} onClick={() => go('confirm-request')}>
            🚛 Request Pickup
          </button>
        </div>
      </div>
    </div>
  )
}
