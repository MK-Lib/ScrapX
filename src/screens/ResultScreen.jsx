import { useMemo, useState } from 'react'

const METALS = ['Copper Pipe', 'Brass Pipe', 'Bronze Alloy']

export default function ResultScreen({ go, data }) {
  const resultData = useMemo(() => {
    try {
      const stored = sessionStorage.getItem('scrapx_analysis_result')
      if (!stored) return data
      const parsed = JSON.parse(stored)
      return {
        ...data,
        ...parsed,
      }
    } catch {
      return data
    }
  }, [data])

  const [metal, setMetal] = useState(resultData.metal)
  const [editing, setEditing] = useState(false)

  return (
    <div className="screen" style={{ paddingBottom: 120, background: '#f6f6f6' }}>
      <div className="status-bar" style={{ background: '#f6f6f6' }} />
      <div style={{ padding: '12px 20px 0' }}>
        <button className="back-btn" onClick={() => go('capture')}>← Back</button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '16px 0 4px' }}>
          <div style={{
            background: '#f0f0f0', border: '1px solid #e0e0e0',
            borderRadius: 99, padding: '3px 10px',
            color: '#1a1a1a', fontSize: 12, fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 5
          }}>
            <span>✓</span> AI Analysis Complete
          </div>
          <div style={{
            background: '#ffffff', border: '1px solid #e8e8e8',
            borderRadius: 99, padding: '3px 10px',
            color: '#888888', fontSize: 12
          }}>{resultData.confidence ? `${resultData.confidence.charAt(0).toUpperCase()}${resultData.confidence.slice(1)} confidence` : 'High confidence'}</div>
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', margin: '12px 0 20px' }}>
          Here's what we found
        </h2>

        {/* Main result card */}
        <div className="card" style={{ padding: '18px', marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <div>
              <p style={{ color: '#888888', fontSize: 12, marginBottom: 4 }}>Metal Type</p>
              {editing ? (
                <select
                  value={metal}
                  onChange={e => { setMetal(e.target.value); setEditing(false) }}
                  style={{ fontSize: 18, fontWeight: 700, padding: '6px 10px' }}
                >
                  {METALS.map(m => <option key={m}>{m}</option>)}
                </select>
              ) : (
                <p style={{ color: '#1a1a1a', fontSize: 20, fontWeight: 700 }}>{metal}</p>
              )}
              <div style={{
                background: '#f6f6f6', borderRadius: 6, padding: '2px 8px',
                display: 'inline-block', marginTop: 4, border: '1px solid #e8e8e8'
              }}>
                <span style={{ color: '#555555', fontSize: 12, fontWeight: 600 }}>Grade {resultData.grade}</span>
              </div>
            </div>
            <button
              onClick={() => setEditing(!editing)}
              style={{
                background: '#f6f6f6', border: '1px solid #e8e8e8',
                borderRadius: 8, padding: '6px 10px',
                color: '#555555', fontSize: 12, cursor: 'pointer'
              }}
            >
              {editing ? 'Done' : 'Correct ✏️'}
            </button>
          </div>

          <div style={{ height: 1, background: '#f0f0f0', margin: '0 0 14px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ background: '#f6f6f6', borderRadius: 10, padding: '10px 12px' }}>
              <p style={{ color: '#aaaaaa', fontSize: 11, marginBottom: 4 }}>CLEANLINESS</p>
              <p style={{ color: '#f59e0b', fontSize: 14, fontWeight: 600 }}>{resultData.cleanliness}</p>
            </div>
            <div style={{ background: '#f6f6f6', borderRadius: 10, padding: '10px 12px' }}>
              <p style={{ color: '#aaaaaa', fontSize: 11, marginBottom: 4 }}>SURFACE</p>
              <p style={{ color: '#f59e0b', fontSize: 14, fontWeight: 600 }}>{resultData.surface || 'Oxidised'}</p>
            </div>
          </div>

          <div style={{ background: '#f6f6f6', borderRadius: 10, padding: '10px 12px', marginBottom: 14 }}>
            <p style={{ color: '#aaaaaa', fontSize: 11, marginBottom: 4 }}>CONDITION NOTES</p>
            <p style={{ color: '#555555', fontSize: 13 }}>{resultData.condition}</p>
          </div>

          <div style={{ height: 1, background: '#f0f0f0', margin: '0 0 14px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div>
              <p style={{ color: '#888888', fontSize: 12, marginBottom: 4 }}>Est. weight</p>
              <p style={{ color: '#1a1a1a', fontSize: 20, fontWeight: 700 }}>
                {resultData.weightMin}–{resultData.weightMax} <span style={{ fontSize: 14, fontWeight: 400 }}>kg</span>
              </p>
            </div>
            <div>
              <p style={{ color: '#888888', fontSize: 12, marginBottom: 4 }}>Est. value</p>
              <p style={{ color: '#1a1a1a', fontSize: 20, fontWeight: 700 }}>
                €{resultData.valueMin}–€{resultData.valueMax}
              </p>
            </div>
          </div>
        </div>

        {/* Tip */}
        <div style={{
          background: '#fafafa', border: '1px solid #e8e8e8',
          borderRadius: 12, padding: '12px 14px', marginBottom: 24,
          display: 'flex', gap: 10
        }}>
          <span>💡</span>
          <p style={{ color: '#555555', fontSize: 13, lineHeight: 1.5 }}>{resultData.tip}</p>
        </div>

        <button className="btn-primary" onClick={() => go('map')}>
          Find Nearby Scrap Yards →
        </button>
      </div>
    </div>
  )
}
