export default function YardRegisterScreen({ onNext }) {
  return (
    <div style={{ height: '100%', background: '#0f172a', display: 'flex', flexDirection: 'column', paddingTop: 56 }}>
      <div style={{ padding: '24px 28px 0', flex: 1, overflowY: 'auto' }}>
        {/* Logo */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{ width: 36, height: 36, background: '#3b82f6', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
              </svg>
            </div>
            <span style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: -0.5 }}>ScrapX <span style={{ color: '#3b82f6', fontSize: 14, fontWeight: 600 }}>Business</span></span>
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: '#fff', letterSpacing: -0.5, marginBottom: 6 }}>Register your yard</h2>
          <p style={{ fontSize: 14, color: '#64748b' }}>Start buying scrap from verified sellers</p>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 28 }}>
          {['Business', 'Director ID', 'Bank'].map((s, i) => (
            <div key={s} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ height: 3, width: '100%', background: i === 0 ? '#3b82f6' : '#1e293b', borderRadius: 2 }} />
              <span style={{ fontSize: 10, color: i === 0 ? '#3b82f6' : '#475569', fontWeight: 500 }}>{s}</span>
            </div>
          ))}
        </div>

        {/* Fields */}
        {[
          { label: 'Company Name', placeholder: 'MetalPoint SIA', icon: '🏢' },
          { label: 'Registration Number', placeholder: '40003XXXXXX', icon: '🔢' },
          { label: 'Business Address', placeholder: 'Maskavas iela 24, Rīga', icon: '📍' },
        ].map(f => (
          <div key={f.label} style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#94a3b8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>{f.label}</label>
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 16 }}>{f.icon}</span>
              <span style={{ fontSize: 15, color: '#475569' }}>{f.placeholder}</span>
            </div>
          </div>
        ))}

        {/* KYB notice */}
        <div style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 12, padding: '12px 14px', display: 'flex', gap: 10, marginBottom: 24, alignItems: 'flex-start' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <p style={{ fontSize: 12, color: '#93c5fd', lineHeight: 1.5 }}>
            Business verification (KYB) required. Director ID upload and review takes 1–24 hours. You'll be notified when approved.
          </p>
        </div>

        <button onClick={onNext} style={{
          width: '100%', padding: '16px', background: '#3b82f6',
          borderRadius: 14, fontSize: 16, fontWeight: 700, color: '#fff',
          boxShadow: '0 4px 20px rgba(59,130,246,0.35)', marginBottom: 16,
        }}>
          Continue →
        </button>
        <p style={{ textAlign: 'center', fontSize: 13, color: '#475569', marginBottom: 24 }}>
          Already registered? <span style={{ color: '#3b82f6', fontWeight: 600 }}>Sign in</span>
        </p>
      </div>
    </div>
  );
}
