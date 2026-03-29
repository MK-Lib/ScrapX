import { useState, useEffect } from 'react';

export default function AIAnalysisScreen({ onNext, onBack }) {
  const [phase, setPhase] = useState('scanning'); // scanning | result

  useEffect(() => {
    const t = setTimeout(() => setPhase('result'), 2000);
    return () => clearTimeout(t);
  }, []);

  if (phase === 'scanning') {
    return <ScanningScreen />;
  }

  return <ResultScreen onNext={onNext} onBack={onBack} />;
}

function ScanningScreen() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(p => p + 1), 400);
    return () => clearInterval(t);
  }, []);

  const steps = ['Detecting metal composition...', 'Assessing surface condition...', 'Estimating weight range...', 'Calculating market value...'];
  const activeStep = tick % steps.length;

  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28, padding: '0 32px', paddingTop: 56 }}>
      {/* Pulse animation */}
      <div style={{ position: 'relative', width: 120, height: 120 }}>
        {[1,2,3].map(i => (
          <div key={i} style={{
            position: 'absolute', inset: `${-(i * 12)}px`,
            border: `2px solid rgba(249,115,22,${0.3 - i * 0.08})`,
            borderRadius: '50%',
            animation: `ping ${0.8 + i * 0.2}s ease-out infinite`,
          }} />
        ))}
        <div style={{ width: 120, height: 120, background: 'linear-gradient(135deg,rgba(249,115,22,0.2),rgba(249,115,22,0.05))', border: '2px solid rgba(249,115,22,0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: -0.4, marginBottom: 6 }}>Analysing your scrap</h2>
        <p style={{ fontSize: 14, color: '#64748b' }}>AI is identifying your metal...</p>
      </div>

      {/* Steps */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: i <= activeStep ? 1 : 0.3, transition: 'opacity 0.3s' }}>
            <div style={{ width: 20, height: 20, borderRadius: 10, background: i < activeStep ? '#22c55e' : i === activeStep ? 'rgba(249,115,22,0.2)' : '#1e293b', border: `2px solid ${i < activeStep ? '#22c55e' : i === activeStep ? '#f97316' : '#334155'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {i < activeStep && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
            </div>
            <span style={{ fontSize: 13, color: i <= activeStep ? '#e2e8f0' : '#475569', fontWeight: i === activeStep ? 600 : 400 }}>{s}</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 12, color: '#334155', textAlign: 'center' }}>Usually under 10 seconds</p>

      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function ResultScreen({ onNext, onBack }) {
  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56, overflowY: 'auto' }}>
      <div style={{ padding: '20px 24px 24px', flex: 1 }}>
        <button onClick={onBack} style={{ background: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', marginBottom: 20 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span style={{ fontSize: 14 }}>Back</span>
        </button>

        {/* Success header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <div style={{ width: 32, height: 32, background: 'rgba(34,197,94,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: -0.3 }}>Identified: Copper pipe</h2>
            <p style={{ fontSize: 13, color: '#22c55e', fontWeight: 500 }}>High confidence · AI match 94%</p>
          </div>
        </div>

        {/* Main result card */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 20, padding: '20px', marginBottom: 16 }}>
          {/* Metal icon row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, paddingBottom: 18, borderBottom: '1px solid #0f172a' }}>
            <div style={{ width: 54, height: 54, background: 'linear-gradient(135deg,#7c3a1a,#4a2510)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 28 }}>🔧</span>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Copper Pipe</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <Tag color="#f97316" bg="rgba(249,115,22,0.12)">Grade 2</Tag>
                <Tag color="#94a3b8" bg="rgba(148,163,184,0.1)">Mixed</Tag>
                <Tag color="#94a3b8" bg="rgba(148,163,184,0.1)">Oxidised</Tag>
              </div>
            </div>
            <button style={{ background: 'none', padding: 4 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
            </button>
          </div>

          {/* Condition detail */}
          <div style={{ marginBottom: 18 }}>
            <p style={{ fontSize: 11, color: '#475569', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10, fontWeight: 600 }}>Condition Assessment</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <ConditionRow label="Cleanliness" value="Mixed" color="#eab308" />
              <ConditionRow label="Surface" value="Oxidised" color="#f97316" />
              <ConditionRow label="Notes" value="Fittings attached, some paint" color="#94a3b8" />
            </div>
          </div>

          {/* Weight & value */}
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ flex: 1, background: '#0f172a', borderRadius: 12, padding: '14px', textAlign: 'center' }}>
              <p style={{ fontSize: 11, color: '#475569', marginBottom: 6, fontWeight: 500 }}>Est. Weight</p>
              <p style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: -0.5 }}>4–7 kg</p>
            </div>
            <div style={{ flex: 1, background: '#0f172a', borderRadius: 12, padding: '14px', textAlign: 'center' }}>
              <p style={{ fontSize: 11, color: '#475569', marginBottom: 6, fontWeight: 500 }}>Est. Value</p>
              <p style={{ fontSize: 22, fontWeight: 800, color: '#22c55e', letterSpacing: -0.5 }}>€14–22</p>
            </div>
          </div>
        </div>

        {/* Tip */}
        <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 14, padding: '14px', display: 'flex', gap: 10, marginBottom: 24, alignItems: 'flex-start' }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>💡</span>
          <p style={{ fontSize: 13, color: '#fef08a', lineHeight: 1.6 }}>
            Removing fittings and cleaning the surface could increase your payout by <strong>up to 20%</strong>
          </p>
        </div>

        {/* Photos strip */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 12, color: '#475569', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>Your photos</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {['linear-gradient(160deg,#7c3a1a,#4a2510)','linear-gradient(160deg,#6b3a1a,#3d2010)','linear-gradient(160deg,#5a2a0a,#2d1508)'].map((bg, i) => (
              <div key={i} style={{ flex: 1, height: 64, borderRadius: 10, background: bg, border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 30, height: 10, background: 'rgba(180,90,30,0.7)', borderRadius: 5 }} />
              </div>
            ))}
          </div>
        </div>

        <button onClick={onNext} style={{
          width: '100%', padding: '16px', background: '#f97316',
          borderRadius: 14, fontSize: 16, fontWeight: 700, color: '#fff',
          boxShadow: '0 4px 20px rgba(249,115,22,0.35)', marginBottom: 10,
        }}>
          Find Nearby Scrap Yards →
        </button>
        <button style={{ width: '100%', padding: '14px', background: 'transparent', borderRadius: 14, fontSize: 14, fontWeight: 600, color: '#64748b', border: '1px solid #1e293b' }}>
          Re-identify / Change Metal Type
        </button>
      </div>
    </div>
  );
}

function Tag({ children, color, bg }) {
  return (
    <span style={{ fontSize: 11, fontWeight: 600, color, background: bg, padding: '3px 8px', borderRadius: 6 }}>
      {children}
    </span>
  );
}

function ConditionRow({ label, value, color }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 13, color: '#64748b' }}>{label}</span>
      <span style={{ fontSize: 13, fontWeight: 600, color }}>{value}</span>
    </div>
  );
}
