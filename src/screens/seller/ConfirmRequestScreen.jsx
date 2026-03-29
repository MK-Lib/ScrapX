export default function ConfirmRequestScreen({ onNext, onBack }) {
  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      <div style={{ padding: '20px 24px 0', flex: 1, overflowY: 'auto' }}>
        <button onClick={onBack} style={{ background: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', marginBottom: 22 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span style={{ fontSize: 14 }}>Back</span>
        </button>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: -0.4, marginBottom: 4 }}>Confirm Request</h2>
        <p style={{ fontSize: 14, color: '#64748b', marginBottom: 24 }}>Review your details before sending</p>

        {/* Summary card */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 20, padding: '20px', marginBottom: 16 }}>
          <SummaryRow label="Yard" value="MetalPoint Riga" icon="🏭" />
          <Divider />
          <SummaryRow label="Metal" value="Copper Pipe" icon="🔧" />
          <SummaryRow label="Grade" value="Grade 2 — Mixed" icon="📊" />
          <SummaryRow label="Condition" value="Oxidised surface" icon="🔍" />
          <Divider />
          <SummaryRow label="Est. Weight" value="4–7 kg" icon="⚖️" />
          <SummaryRow label="Today's Rate" value="€3.20 / kg" icon="📈" highlight="#22c55e" />
          <Divider />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16 }}>💰</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>Est. Payout</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: 22, fontWeight: 800, color: '#22c55e', letterSpacing: -0.5 }}>€16–€22</p>
              <p style={{ fontSize: 11, color: '#475569' }}>Final at yard weigh-in</p>
            </div>
          </div>
        </div>

        {/* Method */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 16, padding: '14px 16px', marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, background: 'rgba(249,115,22,0.12)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 16 }}>🚗</span>
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>Delivering myself</p>
                <p style={{ fontSize: 12, color: '#475569' }}>1.2 km · Est. 8 min drive</p>
              </div>
            </div>
            <button style={{ fontSize: 12, color: '#f97316', background: 'none', fontWeight: 600 }}>Change</button>
          </div>
        </div>

        {/* Directions preview */}
        <div style={{ background: '#111827', borderRadius: 14, height: 100, border: '1px solid #1e293b', overflow: 'hidden', marginBottom: 16, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            {Array.from({length:5}).map((_,i) => <div key={i} style={{ position: 'absolute', left: 0, right: 0, top: `${i*25}px`, height: 1, background: 'rgba(255,255,255,0.03)' }} />)}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '40%', width: 7, background: 'rgba(255,255,255,0.06)' }} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '70%', width: 7, background: 'rgba(255,255,255,0.06)' }} />
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 9, background: 'rgba(255,255,255,0.08)' }} />
          </div>
          {/* Route line */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <path d="M 40 80 Q 120 50 200 50 Q 280 50 320 25" stroke="#3b82f6" strokeWidth="3" fill="none" strokeDasharray="6 3" opacity="0.8"/>
          </svg>
          {/* Origin */}
          <div style={{ position: 'absolute', left: 32, bottom: 12, width: 12, height: 12, background: '#3b82f6', borderRadius: 6, border: '2px solid #fff' }} />
          {/* Destination */}
          <div style={{ position: 'absolute', right: 48, top: 12 }}>
            <div style={{ width: 16, height: 16, background: '#f97316', borderRadius: 8, border: '2.5px solid #fff', boxShadow: '0 0 0 3px rgba(249,115,22,0.3)' }} />
            <div style={{ width: 2, height: 6, background: '#f97316', margin: '0 auto' }} />
          </div>
          <div style={{ background: 'rgba(0,0,0,0.7)', padding: '5px 10px', borderRadius: 8 }}>
            <p style={{ fontSize: 12, color: '#fff', fontWeight: 600 }}>MetalPoint Riga · 1.2 km</p>
          </div>
        </div>

        {/* Terms note */}
        <div style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)', borderRadius: 12, padding: '12px 14px', display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 24 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}>
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
          </svg>
          <p style={{ fontSize: 12, color: '#93c5fd', lineHeight: 1.5 }}>
            Final weight and condition are confirmed on-site. Payout is processed immediately after confirmation.
          </p>
        </div>

        <button onClick={onNext} style={{
          width: '100%', padding: '16px', background: '#f97316',
          borderRadius: 14, fontSize: 16, fontWeight: 700, color: '#fff',
          boxShadow: '0 4px 20px rgba(249,115,22,0.35)', marginBottom: 24,
        }}>
          Send Request →
        </button>
      </div>
    </div>
  );
}

function SummaryRow({ label, value, icon, highlight }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 14 }}>{icon}</span>
        <span style={{ fontSize: 13, color: '#64748b' }}>{label}</span>
      </div>
      <span style={{ fontSize: 14, fontWeight: 600, color: highlight || '#fff' }}>{value}</span>
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: '#0f172a', margin: '4px 0' }} />;
}
