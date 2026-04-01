import { useState } from 'react'

export default function LocationScreen({ go }) {
  const [chosen, setChosen] = useState(null)

  return (
    <div className="screen" style={{ paddingBottom: 120, background: '#ffffff' }}>
      <div className="status-bar" />
      <div style={{ padding: '12px 20px 0' }}>
        <button className="back-btn" onClick={() => go('home')}>← Back</button>

        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', margin: '20px 0 6px' }}>
          Where is your scrap?
        </h2>
        <p style={{ color: '#888888', fontSize: 14, marginBottom: 24 }}>
          We'll find the best yards near this location
        </p>

        {/* Map placeholder */}
        <div style={{
          height: 200, borderRadius: 16, overflow: 'hidden',
          background: '#f0f0f0', border: '1px solid #e8e8e8',
          position: 'relative', marginBottom: 20
        }}>
          <svg width="100%" height="100%" style={{ opacity: 0.2 }}>
            {[0,1,2,3,4,5].map(i => (
              <line key={`h${i}`} x1="0" y1={i*40} x2="100%" y2={i*40} stroke="#999" strokeWidth="1"/>
            ))}
            {[0,1,2,3,4,5,6,7,8,9].map(i => (
              <line key={`v${i}`} x1={i*50} y1="0" x2={i*50} y2="100%" stroke="#999" strokeWidth="1"/>
            ))}
          </svg>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -60%)', textAlign: 'center'
          }}>
            <div style={{ fontSize: 32 }}>📍</div>
            <div style={{
              background: '#000000', color: '#fff',
              padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 600,
              whiteSpace: 'nowrap', marginTop: 2
            }}>Your location</div>
          </div>
          <p style={{ position: 'absolute', bottom: 10, right: 12, color: '#aaaaaa', fontSize: 11 }}>
            Riga, Latvia
          </p>
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
          <button
            className="card"
            onClick={() => { setChosen('current'); go('capture') }}
            style={{
              padding: '16px', display: 'flex', gap: 14, alignItems: 'center',
              cursor: 'pointer',
              border: chosen === 'current' ? '1.5px solid #000000' : '1px solid #e8e8e8',
              textAlign: 'left'
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: '#f6f6f6', border: '1px solid #e8e8e8',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22
            }}>📍</div>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#1a1a1a', fontWeight: 600, marginBottom: 3 }}>Use my current location</p>
              <p style={{ color: '#888888', fontSize: 13 }}>Riga Old Town, Vecrīga</p>
            </div>
            {chosen === 'current' && <span style={{ color: '#000000', fontSize: 18 }}>✓</span>}
          </button>

          <button
            className="card"
            onClick={() => setChosen('different')}
            style={{
              padding: '16px', display: 'flex', gap: 14, alignItems: 'center',
              cursor: 'pointer',
              border: chosen === 'different' ? '1.5px solid #000000' : '1px solid #e8e8e8',
              textAlign: 'left'
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: '#f6f6f6', border: '1px solid #e8e8e8',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22
            }}>🗺️</div>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#1a1a1a', fontWeight: 600, marginBottom: 3 }}>Choose a different location</p>
              <p style={{ color: '#888888', fontSize: 13 }}>Drop a pin or search address</p>
            </div>
          </button>
        </div>

        {chosen === 'different' && (
          <div style={{ marginBottom: 16 }}>
            <input placeholder="Search address or postcode..." style={{ marginBottom: 8 }} />
            <button className="btn-secondary" style={{ fontSize: 14 }} onClick={() => go('capture')}>
              Confirm Location →
            </button>
          </div>
        )}

        {chosen === 'current' && (
          <button className="btn-primary" onClick={() => go('capture')}>
            Confirm & Continue →
          </button>
        )}
      </div>
    </div>
  )
}
