import { useState } from 'react';

export default function PricingSetupScreen({ onNext, onBack }) {
  const [mode, setMode] = useState('auto');

  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      <div style={{ padding: '20px 24px 0', flex: 1, overflowY: 'auto' }}>
        <button onClick={onBack} style={{ background: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', marginBottom: 22 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span style={{ fontSize: 14 }}>Dashboard</span>
        </button>

        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: -0.4, marginBottom: 4 }}>Pricing Setup</h2>
        <p style={{ fontSize: 14, color: '#64748b', marginBottom: 24 }}>Choose how prices are set each day</p>

        {/* Mode cards */}
        {[
          {
            id: 'auto',
            icon: '📊',
            title: 'Auto Market Pricing',
            desc: 'System sets prices daily based on live LME / market rates per metal type and condition',
            badge: 'Recommended',
            badgeColor: '#22c55e',
          },
          {
            id: 'manual',
            icon: '✏️',
            title: 'Manual Pricing',
            desc: 'Set prices per metal type and condition grade each morning',
            badge: null,
          },
        ].map(opt => (
          <button key={opt.id} onClick={() => setMode(opt.id)} style={{
            width: '100%', background: mode === opt.id ? (opt.id === 'auto' ? 'rgba(34,197,94,0.06)' : 'rgba(249,115,22,0.06)') : '#1e293b',
            border: `1.5px solid ${mode === opt.id ? (opt.id === 'auto' ? '#22c55e' : '#f97316') : '#334155'}`,
            borderRadius: 16, padding: '18px 20px', display: 'flex', alignItems: 'flex-start', gap: 14,
            marginBottom: 12, textAlign: 'left',
            boxShadow: mode === opt.id ? `0 0 0 1px ${opt.id === 'auto' ? 'rgba(34,197,94,0.2)' : 'rgba(249,115,22,0.2)'}` : 'none',
          }}>
            <span style={{ fontSize: 28, flexShrink: 0 }}>{opt.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{opt.title}</p>
                {opt.badge && <span style={{ fontSize: 10, fontWeight: 700, color: opt.badgeColor, background: `rgba(34,197,94,0.1)`, padding: '2px 7px', borderRadius: 5 }}>{opt.badge}</span>}
              </div>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{opt.desc}</p>
            </div>
            <div style={{ width: 22, height: 22, borderRadius: 11, border: `2px solid ${mode === opt.id ? (opt.id === 'auto' ? '#22c55e' : '#f97316') : '#334155'}`, background: mode === opt.id ? (opt.id === 'auto' ? '#22c55e' : '#f97316') : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
              {mode === opt.id && <div style={{ width: 8, height: 8, borderRadius: 4, background: '#fff' }} />}
            </div>
          </button>
        ))}

        {/* Manual price table (shown when manual) */}
        {mode === 'manual' && (
          <div style={{ marginTop: 8, marginBottom: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Set Today's Prices</p>
            <div style={{ background: '#1e293b', borderRadius: 14, overflow: 'hidden', border: '1px solid #334155' }}>
              <div style={{ padding: '8px 16px', background: '#0f172a', display: 'flex' }}>
                <span style={{ flex: 1, fontSize: 11, color: '#475569', fontWeight: 600, textTransform: 'uppercase' }}>Metal / Grade</span>
                <span style={{ width: 90, fontSize: 11, color: '#475569', fontWeight: 600, textTransform: 'uppercase', textAlign: 'right' }}>€/kg</span>
              </div>
              {[
                ['Copper — Grade 1', '4.10'],
                ['Copper — Grade 2', '3.20'],
                ['Copper — Grade 3', '2.60'],
                ['Aluminium — Clean', '1.05'],
                ['Aluminium — Mixed', '0.80'],
                ['Steel — Heavy', '0.22'],
              ].map(([name, price], i, arr) => (
                <div key={i} style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', borderBottom: i < arr.length - 1 ? '1px solid #0f172a' : 'none' }}>
                  <span style={{ flex: 1, fontSize: 13, color: '#94a3b8' }}>{name}</span>
                  <div style={{ width: 90, background: '#0f172a', border: '1px solid #334155', borderRadius: 8, padding: '6px 10px', textAlign: 'right' }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#f97316' }}>{price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Market rate note for auto */}
        {mode === 'auto' && (
          <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 12, padding: '14px', marginBottom: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#86efac', marginBottom: 6 }}>Today's auto-set rates preview</p>
            {[['Copper G1','4.10'],['Copper G2','3.20'],['Aluminium','1.05'],['Steel','0.22']].map(([m,p]) => (
              <div key={m} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                <span style={{ fontSize: 12, color: '#475569' }}>{m}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#22c55e' }}>€{p}/kg</span>
              </div>
            ))}
            <p style={{ fontSize: 11, color: '#334155', marginTop: 8 }}>Updated daily at 06:00 · Source: LME feed</p>
          </div>
        )}

        <button onClick={onNext} style={{
          width: '100%', padding: '16px', background: '#3b82f6',
          borderRadius: 14, fontSize: 16, fontWeight: 700, color: '#fff',
          boxShadow: '0 4px 20px rgba(59,130,246,0.3)', marginBottom: 24,
        }}>
          Save & Continue →
        </button>
      </div>
    </div>
  );
}
