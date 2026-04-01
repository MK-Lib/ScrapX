export default function ConfirmRequestScreen({ go, yard, data }) {
  const estMin = (yard.price * data.weightMin).toFixed(2)
  const estMax = (yard.price * data.weightMax).toFixed(2)

  return (
    <div className="screen" style={{ paddingBottom: 120, background: '#ffffff' }}>
      <div className="status-bar" />
      <div style={{ padding: '12px 20px 0' }}>
        <button className="back-btn" onClick={() => go('yard-detail')}>← Back</button>

        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', margin: '20px 0 6px' }}>
          Confirm Request
        </h2>
        <p style={{ color: '#888888', fontSize: 14, marginBottom: 24 }}>
          Review details before sending to the yard
        </p>

        <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 16 }}>
          <div style={{ background: '#f6f6f6', padding: '14px 16px', borderBottom: '1px solid #f0f0f0' }}>
            <p style={{ color: '#aaaaaa', fontSize: 11, marginBottom: 4 }}>SCRAP YARD</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ color: '#1a1a1a', fontWeight: 700, fontSize: 16 }}>{yard.name}</p>
                <p style={{ color: '#888888', fontSize: 12 }}>{yard.address}</p>
              </div>
              <span style={{ fontSize: 24 }}>🏭</span>
            </div>
          </div>

          {[
            { label: 'Metal Type', value: data.metal },
            { label: 'Grade', value: `Grade ${data.grade}` },
            { label: 'Condition', value: data.condition },
            { label: 'Est. Weight', value: `${data.weightMin}–${data.weightMax} kg` },
            { label: "Today's Price", value: `€${yard.price}/kg`, bold: true },
            { label: 'Est. Payout', value: `€${estMin}–€${estMax}`, bold: true, highlight: true },
          ].map((row, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 16px', borderBottom: '1px solid #f0f0f0',
              background: row.highlight ? '#fafafa' : 'transparent'
            }}>
              <p style={{ color: '#888888', fontSize: 14 }}>{row.label}</p>
              <p style={{
                color: '#1a1a1a', fontSize: 14,
                fontWeight: row.bold ? 700 : 400
              }}>{row.value}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: '#f6f6f6', border: '1px solid #e8e8e8',
          borderRadius: 12, padding: '12px 14px', marginBottom: 24,
          display: 'flex', gap: 10, alignItems: 'flex-start'
        }}>
          <span>ℹ️</span>
          <p style={{ color: '#888888', fontSize: 13, lineHeight: 1.5 }}>
            Final payout is based on actual weight and condition confirmed at the yard.
            Today's price is locked at the time of this request.
          </p>
        </div>

        <button className="btn-primary" style={{ fontSize: 16, padding: '16px' }} onClick={() => go('matched')}>
          Send Request →
        </button>
      </div>
    </div>
  )
}
