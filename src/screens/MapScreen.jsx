import { useState } from 'react'

const YARDS = [
  { id: 1, name: 'MetalPoint Riga', price: 3.20, distance: '1.2 km', rating: 4.8, pickup: true, x: 54, y: 40 },
  { id: 2, name: 'Baltic Scrap Co.', price: 3.05, distance: '2.4 km', rating: 4.5, pickup: false, x: 72, y: 58 },
  { id: 3, name: 'EcoMetal Jūrmala', price: 2.90, distance: '4.1 km', rating: 4.3, pickup: true, x: 32, y: 62 },
  { id: 4, name: 'Riga Metal Works', price: 2.75, distance: '5.0 km', rating: 4.1, pickup: false, x: 80, y: 28 },
]

const FILTERS = ['Nearest', 'Best Price', 'Pickup Only']

export default function MapScreen({ go, data }) {
  const [filter, setFilter] = useState('Best Price')
  const [view, setView] = useState('map')
  const [selected, setSelected] = useState(null)

  const filtered = [...YARDS].sort((a, b) => {
    if (filter === 'Nearest') return parseFloat(a.distance) - parseFloat(b.distance)
    if (filter === 'Best Price') return b.price - a.price
    if (filter === 'Pickup Only') return (b.pickup ? 1 : 0) - (a.pickup ? 1 : 0)
    return 0
  })

  return (
    <div className="screen" style={{ paddingBottom: 0, background: '#f6f6f6' }}>
      <div className="status-bar" style={{ background: '#f6f6f6' }} />

      <div style={{ padding: '12px 20px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <button className="back-btn" onClick={() => go('result')}>← Back</button>
          <div style={{ display: 'flex', background: '#ffffff', borderRadius: 8, padding: 3, border: '1px solid #e8e8e8' }}>
            {['map', 'list'].map(v => (
              <button key={v} onClick={() => setView(v)} style={{
                padding: '5px 14px', borderRadius: 6, border: 'none',
                background: view === v ? '#000000' : 'transparent',
                color: view === v ? '#fff' : '#888888',
                fontSize: 12, fontWeight: 600, cursor: 'pointer'
              }}>
                {v === 'map' ? '🗺 Map' : '☰ List'}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
          <span style={{
            background: '#000000', borderRadius: 99, padding: '4px 10px',
            color: '#ffffff', fontSize: 12, fontWeight: 600
          }}>
            {data.metal} · Grade {data.grade}
          </span>
          <span style={{
            background: '#ffffff', border: '1px solid #e8e8e8',
            borderRadius: 99, padding: '4px 10px', color: '#555555', fontSize: 12
          }}>
            ⚖️ {data.weightMin}–{data.weightMax} kg
          </span>
        </div>

        <div style={{ display: 'flex', gap: 6, marginBottom: 14, overflowX: 'auto' }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              flexShrink: 0, padding: '6px 12px', borderRadius: 99,
              background: filter === f ? '#000000' : '#ffffff',
              border: `1px solid ${filter === f ? '#000000' : '#e8e8e8'}`,
              color: filter === f ? '#ffffff' : '#555555',
              fontSize: 12, fontWeight: 600, cursor: 'pointer'
            }}>{f}</button>
          ))}
        </div>
      </div>

      {view === 'map' ? (
        <>
          <div style={{
            height: 240, background: '#e8e8e8', position: 'relative',
            margin: '0 20px', borderRadius: 16, overflow: 'hidden',
            border: '1px solid #d8d8d8', marginBottom: 14
          }}>
            <svg width="100%" height="100%" style={{ opacity: 0.15 }}>
              {[0,1,2,3,4,5].map(i => (
                <line key={`h${i}`} x1="0" y1={i*50} x2="100%" y2={i*50} stroke="#999" strokeWidth="1"/>
              ))}
              {[0,1,2,3,4,5,6,7].map(i => (
                <line key={`v${i}`} x1={i*50} y1="0" x2={i*50} y2="100%" stroke="#999" strokeWidth="1"/>
              ))}
            </svg>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
              <div style={{
                width: 14, height: 14, borderRadius: 99,
                background: '#000000', border: '3px solid #fff',
                boxShadow: '0 0 0 6px rgba(0,0,0,0.15)'
              }} />
            </div>
            {YARDS.map(y => (
              <div
                key={y.id}
                onClick={() => setSelected(y.id === selected ? null : y.id)}
                style={{
                  position: 'absolute', left: `${y.x}%`, top: `${y.y}%`,
                  transform: 'translate(-50%,-100%)', cursor: 'pointer',
                  zIndex: y.id === selected ? 10 : 1
                }}
              >
                <div style={{
                  background: y.id === selected ? '#000000' : '#ffffff',
                  border: `1.5px solid ${y.id === selected ? '#000000' : '#cccccc'}`,
                  borderRadius: 8, padding: '4px 8px',
                  fontSize: 12, fontWeight: 700,
                  color: y.id === selected ? '#fff' : '#1a1a1a',
                  whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                  transition: 'all 0.15s'
                }}>€{y.price}/kg</div>
                <div style={{
                  width: 6, height: 6,
                  background: y.id === selected ? '#000000' : '#cccccc',
                  borderRadius: 99, margin: '2px auto 0'
                }} />
              </div>
            ))}
          </div>

          <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 8, paddingBottom: 120 }}>
            {filtered.map((y, i) => (
              <div key={y.id} className="card" style={{
                padding: '14px', display: 'flex', alignItems: 'center', gap: 12,
                cursor: 'pointer',
                border: selected === y.id ? '1.5px solid #000000' : '1px solid #e8e8e8'
              }}
                onClick={() => go('yard-detail')}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: '#f6f6f6', border: '1px solid #e8e8e8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, flexShrink: 0
                }}>🏭</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <p style={{ color: '#1a1a1a', fontSize: 14, fontWeight: 600 }}>{y.name}</p>
                    {y.pickup && <span style={{
                      background: '#f0f0f0', border: '1px solid #e0e0e0',
                      borderRadius: 99, padding: '1px 6px', color: '#555555', fontSize: 10
                    }}>Pickup</span>}
                  </div>
                  <p style={{ color: '#888888', fontSize: 12 }}>📍 {y.distance} · ⭐ {y.rating}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ color: '#1a1a1a', fontSize: 16, fontWeight: 700 }}>€{y.price}</p>
                  <p style={{ color: '#888888', fontSize: 11 }}>per kg</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 8, paddingBottom: 120 }}>
          {filtered.map((y) => (
            <div key={y.id} className="card" style={{ padding: '16px', cursor: 'pointer' }}
              onClick={() => go('yard-detail')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <div>
                  <p style={{ color: '#1a1a1a', fontSize: 16, fontWeight: 700, marginBottom: 3 }}>{y.name}</p>
                  <p style={{ color: '#888888', fontSize: 13 }}>📍 {y.distance} · ⭐ {y.rating}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ color: '#1a1a1a', fontSize: 20, fontWeight: 700 }}>€{y.price}</p>
                  <p style={{ color: '#888888', fontSize: 11 }}>per kg today</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {y.pickup && <span style={{
                  background: '#f0f0f0', borderRadius: 99, padding: '3px 10px',
                  color: '#555555', fontSize: 12, border: '1px solid #e0e0e0'
                }}>🚛 Pickup Available</span>}
                <span style={{
                  background: '#f6f6f6', borderRadius: 99, padding: '3px 10px',
                  color: '#888888', fontSize: 12, border: '1px solid #e8e8e8'
                }}>Drop-off</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
