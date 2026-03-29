export default function RegisterScreen({ onNext }) {
  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      <div style={{ padding: '24px 28px 0', flex: 1, overflowY: 'auto' }}>
        {/* Logo */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{ width: 36, height: 36, background: '#f97316', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: -0.5 }}>ScrapX</span>
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: '#fff', letterSpacing: -0.5, marginBottom: 6 }}>Create account</h2>
          <p style={{ fontSize: 14, color: '#64748b' }}>Sell your scrap metal in minutes</p>
        </div>

        {/* Steps indicator */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 28 }}>
          {['Phone', 'Identity', 'Payment'].map((s, i) => (
            <div key={s} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ height: 3, width: '100%', background: i === 0 ? '#f97316' : '#1e293b', borderRadius: 2 }} />
              <span style={{ fontSize: 10, color: i === 0 ? '#f97316' : '#475569', fontWeight: 500 }}>{s}</span>
            </div>
          ))}
        </div>

        {/* Phone field */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#94a3b8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Phone Number</label>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 70, background: '#1e293b', border: '1px solid #334155', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
              <span style={{ fontSize: 16 }}>🇱🇻</span>
              <span style={{ fontSize: 13, color: '#94a3b8' }}>+371</span>
            </div>
            <div style={{ flex: 1, background: '#1e293b', border: '1.5px solid #f97316', borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: 15, color: '#fff' }}>2X XXX XXXX</span>
              <div style={{ width: 2, height: 18, background: '#f97316', marginLeft: 2, borderRadius: 1, animation: 'pulse 1s infinite' }} />
            </div>
          </div>
        </div>

        {/* Full Name */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#94a3b8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Full Name</label>
          <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 12, padding: '14px 16px' }}>
            <span style={{ fontSize: 15, color: '#475569' }}>Enter your full name</span>
          </div>
        </div>

        {/* Country */}
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#94a3b8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Country</label>
          <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 12, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16 }}>🇱🇻</span>
              <span style={{ fontSize: 15, color: '#fff' }}>Latvia</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>

        {/* KYC note */}
        <div style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 12, padding: '12px 14px', display: 'flex', gap: 10, marginBottom: 24, alignItems: 'flex-start' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}>
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p style={{ fontSize: 12, color: '#fed7aa', lineHeight: 1.5 }}>
            You'll need to upload a valid ID document. Verification usually takes under 2 hours.
          </p>
        </div>

        {/* CTA */}
        <button onClick={onNext} style={{
          width: '100%', padding: '16px', background: '#f97316',
          borderRadius: 14, fontSize: 16, fontWeight: 700, color: '#fff',
          letterSpacing: -0.2, marginBottom: 16,
          boxShadow: '0 4px 20px rgba(249,115,22,0.35)',
        }}>
          Send OTP →
        </button>

        <p style={{ textAlign: 'center', fontSize: 13, color: '#475569' }}>
          Already have an account? <span style={{ color: '#f97316', fontWeight: 600 }}>Sign in</span>
        </p>
      </div>
    </div>
  );
}
