export default function PaidScreen({ onNext }) {
  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      <div style={{ padding: '20px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Confetti dots */}
        <div style={{ position: 'relative', height: 0 }}>
          {[
            {top:-10,left:40,c:'#f97316'},{top:0,left:120,c:'#22c55e'},{top:-20,left:200,c:'#3b82f6'},
            {top:5,left:280,c:'#eab308'},{top:-15,left:320,c:'#f97316'},{top:10,left:20,c:'#22c55e'},
          ].map((d,i) => (
            <div key={i} style={{ position: 'absolute', top: d.top, left: d.left, width: 8, height: 8, background: d.c, borderRadius: 4, opacity: 0.7 }} />
          ))}
        </div>

        {/* Central success */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20, marginBottom: 28 }}>
          <div style={{ position: 'relative', marginBottom: 20 }}>
            {[1,2,3].map(i => (
              <div key={i} style={{
                position: 'absolute', inset: `${-(i * 12)}px`,
                background: `rgba(34,197,94,${0.06 - i * 0.015})`,
                borderRadius: '50%',
              }} />
            ))}
            <div style={{ width: 88, height: 88, background: 'linear-gradient(135deg,rgba(34,197,94,0.2),rgba(34,197,94,0.08))', border: '2px solid rgba(34,197,94,0.5)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              <span style={{ fontSize: 40 }}>💰</span>
            </div>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', letterSpacing: -0.6, marginBottom: 6, textAlign: 'center' }}>You've been paid!</h2>
          <p style={{ fontSize: 15, color: '#64748b', textAlign: 'center' }}>Funds are in your ScrapX wallet</p>
        </div>

        {/* Amount */}
        <div style={{ background: 'linear-gradient(135deg,rgba(34,197,94,0.12),rgba(34,197,94,0.04))', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 20, padding: '24px', textAlign: 'center', marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#86efac', marginBottom: 8 }}>Amount received</p>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 2, marginBottom: 6 }}>
            <span style={{ fontSize: 48, fontWeight: 900, color: '#22c55e', letterSpacing: -2 }}>€16.96</span>
          </div>
          <p style={{ fontSize: 13, color: '#475569' }}>Today, {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</p>
        </div>

        {/* Summary */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 16, padding: '16px', marginBottom: 16 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 12 }}>Transaction Summary</p>
          {[
            ['Yard', 'MetalPoint Riga'],
            ['Metal', 'Copper Pipe — Grade 2'],
            ['Weight', '5.3 kg'],
            ['Rate', '€3.20/kg'],
            ['Receipt', '#TXN-20240329-4821'],
          ].map(([k, v], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
              <span style={{ fontSize: 13, color: '#475569' }}>{k}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: k === 'Receipt' ? '#3b82f6' : '#fff' }}>{v}</span>
            </div>
          ))}
        </div>

        {/* Wallet balance update */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 14, padding: '14px 16px', marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 12, color: '#475569', marginBottom: 3 }}>Wallet Balance</p>
            <p style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: -0.4 }}>€159.46</p>
          </div>
          <button style={{ background: '#f97316', color: '#fff', fontSize: 14, fontWeight: 700, padding: '10px 18px', borderRadius: 12, boxShadow: '0 4px 12px rgba(249,115,22,0.3)' }}>
            Withdraw
          </button>
        </div>

        <div style={{ flex: 1 }} />

        {/* Actions */}
        <button onClick={onNext} style={{
          width: '100%', padding: '16px', background: '#f97316',
          borderRadius: 14, fontSize: 16, fontWeight: 700, color: '#fff',
          boxShadow: '0 4px 20px rgba(249,115,22,0.35)', marginBottom: 10,
        }}>
          Sell More Scrap
        </button>
        <button style={{ width: '100%', padding: '14px', background: '#1e293b', borderRadius: 14, fontSize: 14, fontWeight: 600, color: '#94a3b8', border: '1px solid #334155' }}>
          View Receipt
        </button>
      </div>
    </div>
  );
}
