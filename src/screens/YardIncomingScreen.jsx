import { useState } from 'react'

const REQUESTS = [
  { id: 1, metal: 'Copper Pipe', grade: 2, condition: 'Oxidised, fittings attached', weightMin: 4, weightMax: 7, user: 'Alex K.', distance: '1.2 km', type: 'delivery', time: '2 min ago' },
  { id: 2, metal: 'Aluminium Sheet', grade: 1, condition: 'Clean', weightMin: 15, weightMax: 25, user: 'M. Ozols', distance: '3.4 km', type: 'pickup', time: '8 min ago' },
  { id: 3, metal: 'Steel Mixed', grade: 1, condition: 'Mixed, some rust', weightMin: 40, weightMax: 60, user: 'J. Bērziņš', distance: '5.1 km', type: 'delivery', time: '22 min ago' },
]

export default function YardIncomingScreen({ go }) {
  const [requests, setRequests] = useState(REQUESTS)
  const [expanded, setExpanded] = useState(1)

  const decline = (id) => setRequests(r => r.filter(x => x.id !== id))
  const accept = (id) => { setRequests(r => r.filter(x => x.id !== id)); go('yard-active') }

  return (
    <div className="screen" style={{ paddingBottom: 120, background: '#f6f6f6' }}>
      <div className="status-bar" style={{ background: '#f6f6f6' }} />
      <div style={{ padding: '12px 20px 0' }}>
        <button className="back-btn" onClick={() => go('yard-dashboard')}>← Dashboard</button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '16px 0 20px' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', margin: 0 }}>Incoming Requests</h2>
          <div style={{
            background: '#000000', color: '#fff',
            borderRadius: 99, width: 24, height: 24,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 700
          }}>{requests.length}</div>
        </div>

        {requests.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>📭</div>
            <p style={{ color: '#888888', fontSize: 15 }}>No pending requests</p>
          </div>
        )}

        {requests.map((req) => (
          <div key={req.id} className="card" style={{ marginBottom: 12, overflow: 'hidden' }}>
            <div
              style={{ padding: '14px', cursor: 'pointer', display: 'flex', gap: 12, alignItems: 'center' }}
              onClick={() => setExpanded(expanded === req.id ? null : req.id)}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: '#f6f6f6', border: '1px solid #e8e8e8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, flexShrink: 0
              }}>
                {req.type === 'pickup' ? '🚛' : '🚶'}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 3 }}>
                  <p style={{ color: '#1a1a1a', fontWeight: 600, fontSize: 14 }}>{req.metal}</p>
                  <span style={{
                    background: '#f0f0f0', borderRadius: 99, padding: '1px 6px',
                    color: '#555555', fontSize: 10, border: '1px solid #e0e0e0'
                  }}>Grade {req.grade}</span>
                </div>
                <p style={{ color: '#888888', fontSize: 12 }}>{req.user} · {req.distance} · {req.time}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#1a1a1a', fontSize: 14, fontWeight: 700 }}>{req.weightMin}–{req.weightMax} kg</p>
                <p style={{ color: '#888888', fontSize: 11 }}>{req.type === 'pickup' ? 'Pickup' : 'Delivery'}</p>
              </div>
            </div>

            {expanded === req.id && (
              <div style={{ borderTop: '1px solid #f0f0f0' }}>
                <div style={{ display: 'flex', gap: 6, padding: '12px 14px', borderBottom: '1px solid #f0f0f0' }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{
                      width: 72, height: 72, borderRadius: 8,
                      background: '#f6f6f6', border: '1px solid #e8e8e8',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20
                    }}>📷</div>
                  ))}
                </div>
                <div style={{ padding: '12px 14px', borderBottom: '1px solid #f0f0f0' }}>
                  <p style={{ color: '#aaaaaa', fontSize: 12, marginBottom: 4 }}>Condition Notes</p>
                  <p style={{ color: '#555555', fontSize: 13 }}>{req.condition}</p>
                </div>
                <div style={{ padding: '12px 14px', display: 'flex', gap: 8 }}>
                  <button
                    onClick={() => decline(req.id)}
                    style={{
                      flex: 1, padding: '12px', borderRadius: 10,
                      border: '1px solid #e0e0e0', background: '#fafafa',
                      color: '#888888', fontWeight: 600, fontSize: 14, cursor: 'pointer'
                    }}
                  >✕ Decline</button>
                  <button
                    onClick={() => accept(req.id)}
                    style={{
                      flex: 2, padding: '12px', borderRadius: 10, border: 'none',
                      background: '#000000', color: '#fff', fontWeight: 600,
                      fontSize: 14, cursor: 'pointer'
                    }}
                  >✓ Accept Request</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
