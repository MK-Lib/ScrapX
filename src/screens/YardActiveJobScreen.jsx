import { useState } from 'react'

export default function YardActiveJobScreen({ go }) {
  const [weight, setWeight] = useState('')
  const [conditionConfirmed, setConditionConfirmed] = useState(false)
  const [grade, setGrade] = useState('2')
  const [released, setReleased] = useState(false)

  const pricePerKg = 3.20
  const finalPayout = weight ? (parseFloat(weight) * pricePerKg).toFixed(2) : '—'
  const ready = weight && conditionConfirmed && !released

  return (
    <div className="screen" style={{ paddingBottom: 120, background: '#f6f6f6' }}>
      <div className="status-bar" style={{ background: '#f6f6f6' }} />
      <div style={{ padding: '12px 20px 0' }}>
        <button className="back-btn" onClick={() => go('yard-incoming')}>← Back</button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '16px 0 20px' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', margin: 0 }}>Active Job</h2>
          <span style={{
            background: '#fff8e1', border: '1px solid #ffe082',
            borderRadius: 99, padding: '4px 12px', color: '#f57f17', fontSize: 12, fontWeight: 600
          }}>In Progress</span>
        </div>

        <div className="card" style={{ padding: '16px', marginBottom: 12 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
            <div style={{
              width: 42, height: 42, borderRadius: 10,
              background: '#f6f6f6', border: '1px solid #e8e8e8',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18
            }}>🚶</div>
            <div>
              <p style={{ color: '#1a1a1a', fontWeight: 600 }}>Alex K. — Delivery</p>
              <p style={{ color: '#888888', fontSize: 12 }}>Copper Pipe · Est. 4–7 kg · Arrived 11:38</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { label: 'METAL', value: 'Copper Pipe' },
              { label: 'EST. GRADE', value: 'Grade 2' },
              { label: 'PRICE/KG', value: `€${pricePerKg}` },
            ].map((item, i) => (
              <div key={i} style={{ flex: 1, background: '#f6f6f6', borderRadius: 8, padding: '8px 10px' }}>
                <p style={{ color: '#aaaaaa', fontSize: 10 }}>{item.label}</p>
                <p style={{ color: '#1a1a1a', fontSize: 13, fontWeight: 600 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Weight entry */}
        <div className="card" style={{ padding: '16px', marginBottom: 12 }}>
          <p style={{ color: '#aaaaaa', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>
            Enter Final Weight
          </p>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <input
              type="number"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              placeholder="0.0"
              style={{ fontSize: 24, fontWeight: 700, textAlign: 'center', padding: '12px' }}
            />
            <div style={{
              background: '#f6f6f6', border: '1px solid #e8e8e8',
              borderRadius: 10, padding: '12px 16px',
              color: '#888888', fontSize: 16, fontWeight: 600, flexShrink: 0
            }}>kg</div>
          </div>
        </div>

        {/* Condition */}
        <div className="card" style={{ padding: '16px', marginBottom: 12 }}>
          <p style={{ color: '#aaaaaa', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>
            Confirm Final Condition
          </p>
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            {['1', '2', '3'].map(g => (
              <button key={g} onClick={() => setGrade(g)} style={{
                flex: 1, padding: '10px', borderRadius: 10,
                border: `1.5px solid ${grade === g ? '#000000' : '#e8e8e8'}`,
                background: grade === g ? '#000000' : '#ffffff',
                color: grade === g ? '#fff' : '#888888',
                fontWeight: 600, fontSize: 14, cursor: 'pointer'
              }}>Grade {g}</button>
            ))}
          </div>
          <button
            onClick={() => setConditionConfirmed(!conditionConfirmed)}
            style={{
              width: '100%', padding: '11px', borderRadius: 10,
              background: conditionConfirmed ? '#000000' : '#ffffff',
              border: `1.5px solid ${conditionConfirmed ? '#000000' : '#e8e8e8'}`,
              color: conditionConfirmed ? '#ffffff' : '#888888',
              fontWeight: 600, fontSize: 14, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
            }}
          >
            {conditionConfirmed ? '✓ Condition Confirmed' : 'Confirm Condition'}
          </button>
        </div>

        {/* Payout preview */}
        <div style={{
          background: weight ? '#000000' : '#f6f6f6',
          border: `1px solid ${weight ? '#000000' : '#e8e8e8'}`,
          borderRadius: 14, padding: '16px', marginBottom: 20,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          transition: 'all 0.2s'
        }}>
          <div>
            <p style={{ color: weight ? '#888888' : '#aaaaaa', fontSize: 12 }}>Auto-calculated payout</p>
            <p style={{ color: weight ? '#aaaaaa' : '#cccccc', fontSize: 12 }}>
              {weight || '?'} kg × €{pricePerKg}/kg
            </p>
          </div>
          <p style={{ fontSize: 28, fontWeight: 700, color: weight ? '#ffffff' : '#cccccc' }}>
            €{finalPayout}
          </p>
        </div>

        {!released ? (
          <button
            className="btn-primary"
            style={{ fontSize: 16, padding: '18px', opacity: ready ? 1 : 0.3 }}
            disabled={!ready}
            onClick={() => setReleased(true)}
          >
            Confirm & Release Payment →
          </button>
        ) : (
          <div>
            <div className="card" style={{ padding: '16px', marginBottom: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ fontSize: 26 }}>✅</span>
              <div>
                <p style={{ color: '#1a1a1a', fontWeight: 700, fontSize: 15 }}>Payment Released</p>
                <p style={{ color: '#888888', fontSize: 13 }}>€{finalPayout} sent to Alex K.'s wallet</p>
              </div>
            </div>
            <button className="btn-primary" onClick={() => go('yard-inventory')}>
              View Inventory Update →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
