export default function DeliveryScreen({ onNext, onBack }) {
  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      <div style={{ padding: '20px 24px 0', flex: 1, overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: -0.4 }}>Weigh-in</h2>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '4px 10px', borderRadius: 20, border: '1px solid rgba(34,197,94,0.2)' }}>At Yard</span>
        </div>

        {/* Yard scale animation */}
        <div style={{ background: 'linear-gradient(135deg,#1e293b,#162032)', borderRadius: 20, padding: '24px', border: '1px solid #334155', marginBottom: 20, textAlign: 'center' }}>
          <div style={{ marginBottom: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 80, height: 80, background: 'rgba(249,115,22,0.1)', border: '2px solid rgba(249,115,22,0.3)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 40 }}>⚖️</span>
            </div>
            <p style={{ fontSize: 13, color: '#64748b' }}>MetalPoint Riga — Digital Scale</p>
          </div>

          {/* Weight display */}
          <div style={{ background: '#0f172a', borderRadius: 16, padding: '20px', border: '1px solid rgba(34,197,94,0.2)', marginBottom: 16 }}>
            <p style={{ fontSize: 11, color: '#475569', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Final Weight</p>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4 }}>
              <span style={{ fontSize: 52, fontWeight: 800, color: '#22c55e', letterSpacing: -2 }}>5.3</span>
              <span style={{ fontSize: 22, color: '#64748b', fontWeight: 500 }}>kg</span>
            </div>
          </div>
          <p style={{ fontSize: 12, color: '#475569' }}>Within estimated range of 4–7 kg</p>
        </div>

        {/* Condition confirmed */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 16, padding: '16px', marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>Condition Confirmed</p>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '3px 8px', borderRadius: 6 }}>Verified</span>
          </div>
          {[
            ['Metal type', 'Copper Pipe'],
            ['Grade', 'Grade 2 — Mixed'],
            ['Surface', 'Oxidised'],
            ['Rate applied', '€3.20 / kg'],
          ].map(([k, v], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
              <span style={{ fontSize: 13, color: '#475569' }}>{k}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: k === 'Rate applied' ? '#f97316' : '#fff' }}>{v}</span>
            </div>
          ))}
        </div>

        {/* Payout breakdown */}
        <div style={{ background: 'linear-gradient(135deg,rgba(34,197,94,0.08),rgba(34,197,94,0.03))', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 16, padding: '18px', marginBottom: 24 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#86efac', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 14 }}>Payout Calculation</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
            <CalcRow label="5.3 kg × €3.20/kg" value="€16.96" />
            <CalcRow label="ScrapX fee (0%)" value="€0.00" color="#64748b" />
          </div>
          <div style={{ height: 1, background: 'rgba(34,197,94,0.2)', marginBottom: 12 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Final Payout</span>
            <span style={{ fontSize: 28, fontWeight: 800, color: '#22c55e', letterSpacing: -0.5 }}>€16.96</span>
          </div>
        </div>

        <button onClick={onNext} style={{
          width: '100%', padding: '18px', background: '#22c55e',
          borderRadius: 14, fontSize: 17, fontWeight: 800, color: '#fff',
          boxShadow: '0 4px 24px rgba(34,197,94,0.4)', marginBottom: 10,
          letterSpacing: -0.3,
        }}>
          Accept & Get Paid →
        </button>
        <button style={{ width: '100%', padding: '14px', background: 'transparent', borderRadius: 14, fontSize: 14, fontWeight: 600, color: '#64748b', border: '1px solid #1e293b' }}>
          Dispute Weight / Condition
        </button>
      </div>
    </div>
  );
}

function CalcRow({ label, value, color }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span style={{ fontSize: 13, color: '#64748b' }}>{label}</span>
      <span style={{ fontSize: 13, fontWeight: 600, color: color || '#fff' }}>{value}</span>
    </div>
  );
}
