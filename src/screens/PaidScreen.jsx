export default function PaidScreen({ go }) {
  return (
    <div className="screen" style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 120, background: '#ffffff' }}>
      <div style={{ width: '100%', padding: '0 20px', textAlign: 'center' }}>

        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
          <div style={{
            width: 64, height: 64, borderRadius: 99, margin: '0 auto 20px',
            background: '#000000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 28, color: '#ffffff',
            boxShadow: '0 0 0 14px rgba(0,0,0,0.06)'
          }}>✓</div>
          <h1 style={{ fontSize: 30, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>You got paid!</h1>
          <p style={{ color: '#888888', fontSize: 15 }}>€16.96 has been added to your wallet</p>
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 20, textAlign: 'left' }}>
          <div style={{ background: '#f6f6f6', padding: '16px', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ color: '#aaaaaa', fontSize: 12 }}>Transaction</p>
                <p style={{ color: '#1a1a1a', fontWeight: 700, fontSize: 15 }}>#TXN-2024-0847</p>
              </div>
              <span style={{
                background: '#000000', color: '#fff',
                borderRadius: 99, padding: '3px 10px', fontSize: 12, fontWeight: 600
              }}>PAID</span>
            </div>
          </div>

          {[
            { label: 'Metal', value: 'Copper Pipe · Grade 2' },
            { label: 'Final Weight', value: '5.3 kg' },
            { label: 'Price per kg', value: '€3.20' },
            { label: 'Yard', value: 'MetalPoint Riga' },
            { label: 'Date', value: '30 Mar 2026, 11:42' },
          ].map((row, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '11px 16px', borderBottom: '1px solid #f0f0f0'
            }}>
              <p style={{ color: '#888888', fontSize: 14 }}>{row.label}</p>
              <p style={{ color: '#555555', fontSize: 14 }}>{row.value}</p>
            </div>
          ))}

          <div style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ color: '#1a1a1a', fontSize: 16, fontWeight: 700 }}>Total Payout</p>
            <p style={{ color: '#1a1a1a', fontSize: 20, fontWeight: 700 }}>€16.96</p>
          </div>
        </div>

        {/* Wallet */}
        <div style={{
          background: '#000000', borderRadius: 14, padding: '14px 16px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 24
        }}>
          <div>
            <p style={{ color: '#888888', fontSize: 12, marginBottom: 2 }}>ScrapX Wallet</p>
            <p style={{ color: '#ffffff', fontSize: 22, fontWeight: 700 }}>€159.46</p>
          </div>
          <button style={{
            background: '#ffffff', color: '#000000',
            border: 'none', borderRadius: 10, padding: '8px 16px',
            fontSize: 13, fontWeight: 600, cursor: 'pointer'
          }}>Withdraw</button>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn-secondary" style={{ flex: 1 }}>📄 Receipt</button>
          <button className="btn-primary" style={{ flex: 1 }} onClick={() => go('home')}>Sell More →</button>
        </div>
      </div>
    </div>
  )
}
