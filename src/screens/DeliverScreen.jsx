import { useState } from 'react'

export default function DeliverScreen({ go, yard, data }) {
  const [confirmed, setConfirmed] = useState(false)
  const finalWeight = 5.3
  const finalPrice = (yard.price * finalWeight).toFixed(2)

  return (
    <div className="screen" style={{ paddingBottom: 120, background: '#ffffff' }}>
      <div className="status-bar" />
      <div style={{ padding: '12px 20px 0' }}>
        <button className="back-btn" onClick={() => go('matched')}>← Back</button>

        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', margin: '20px 0 6px' }}>At the yard</h2>
        <p style={{ color: '#888888', fontSize: 14, marginBottom: 24 }}>
          {yard.name} has weighed your scrap
        </p>

        <div className="card" style={{ padding: '20px', marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{
              background: '#f6f6f6', border: '1px solid #e8e8e8',
              borderRadius: 16, padding: '16px 28px', textAlign: 'center'
            }}>
              <p style={{ color: '#aaaaaa', fontSize: 12, marginBottom: 4 }}>FINAL WEIGHT</p>
              <p style={{ fontSize: 36, fontWeight: 700, color: '#1a1a1a' }}>
                {finalWeight} <span style={{ fontSize: 18, fontWeight: 400 }}>kg</span>
              </p>
              <p style={{ color: '#aaaaaa', fontSize: 12, marginTop: 2 }}>
                Est. was {data.weightMin}–{data.weightMax} kg
              </p>
            </div>
          </div>

          {[
            { label: 'Metal', value: data.metal },
            { label: 'Final Condition', value: `Grade ${data.grade} — Oxidised`, bold: true },
            { label: 'Price', value: `€${yard.price}/kg` },
          ].map((row, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', padding: '10px 0',
              borderBottom: '1px solid #f0f0f0'
            }}>
              <p style={{ color: '#888888', fontSize: 14 }}>{row.label}</p>
              <p style={{ color: '#1a1a1a', fontSize: 14, fontWeight: row.bold ? 600 : 400 }}>{row.value}</p>
            </div>
          ))}

          <div style={{
            background: '#000000', borderRadius: 12, padding: '16px',
            marginTop: 14, textAlign: 'center'
          }}>
            <p style={{ color: '#888888', fontSize: 12, marginBottom: 4 }}>FINAL PAYOUT</p>
            <p style={{ fontSize: 36, fontWeight: 700, color: '#ffffff' }}>€{finalPrice}</p>
            <p style={{ color: '#aaaaaa', fontSize: 12 }}>{finalWeight} kg × €{yard.price}/kg</p>
          </div>
        </div>

        <div style={{
          background: '#f6f6f6', border: '1px solid #e8e8e8',
          borderRadius: 12, padding: '12px 14px', marginBottom: 24,
          display: 'flex', gap: 10
        }}>
          <span>📊</span>
          <div>
            <p style={{ color: '#1a1a1a', fontSize: 13, fontWeight: 600, marginBottom: 2 }}>Within estimate</p>
            <p style={{ color: '#888888', fontSize: 12, lineHeight: 1.5 }}>
              €{finalPrice} is within your estimated range of €{data.valueMin}–€{data.valueMax}
            </p>
          </div>
        </div>

        {!confirmed ? (
          <button className="btn-primary" style={{ fontSize: 16, padding: '18px' }} onClick={() => setConfirmed(true)}>
            Accept & Get Paid →
          </button>
        ) : (
          <div>
            <div style={{
              background: '#f6f6f6', border: '1px solid #e8e8e8',
              borderRadius: 12, padding: '14px', marginBottom: 16,
              display: 'flex', gap: 10, alignItems: 'center'
            }}>
              <span style={{ fontSize: 22 }}>✅</span>
              <div>
                <p style={{ color: '#1a1a1a', fontWeight: 600, marginBottom: 2 }}>Payment releasing...</p>
                <p style={{ color: '#888888', fontSize: 13 }}>Funds will appear in your ScrapX wallet</p>
              </div>
            </div>
            <button className="btn-primary" onClick={() => go('paid')}>View Receipt →</button>
          </div>
        )}
      </div>
    </div>
  )
}
