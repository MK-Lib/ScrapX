export default function PhoneFrame({ children }) {
  return (
    <div style={{
      width: 390,
      height: 844,
      background: '#111827',
      borderRadius: 52,
      border: '10px solid #1f2937',
      boxShadow: '0 0 0 1px #374151, 0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      {/* Notch */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 126, height: 34, background: '#0a0a0f',
        borderRadius: '0 0 20px 20px', zIndex: 100,
      }} />
      {/* Status bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 44,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px', zIndex: 99,
      }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>9:41</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect x="0" y="4" width="3" height="8" rx="0.5" fill="white" opacity="0.4"/>
            <rect x="4.5" y="2.5" width="3" height="9.5" rx="0.5" fill="white" opacity="0.6"/>
            <rect x="9" y="0.5" width="3" height="11.5" rx="0.5" fill="white"/>
            <rect x="13.5" y="1.5" width="2" height="9" rx="0.5" fill="white" opacity="0.3"/>
          </svg>
          <svg width="15" height="12" viewBox="0 0 15 12" fill="white" opacity="0.9">
            <path d="M7.5 2.5C9.8 2.5 11.8 3.5 13.2 5.1L14.5 3.8C12.7 1.8 10.2 0.5 7.5 0.5C4.8 0.5 2.3 1.8 0.5 3.8L1.8 5.1C3.2 3.5 5.2 2.5 7.5 2.5Z" />
            <path d="M7.5 5.5C9 5.5 10.3 6.1 11.3 7.1L12.6 5.8C11.2 4.4 9.4 3.5 7.5 3.5C5.6 3.5 3.8 4.4 2.4 5.8L3.7 7.1C4.7 6.1 6 5.5 7.5 5.5Z" />
            <circle cx="7.5" cy="10" r="1.5" />
          </svg>
          <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <div style={{ width: 22, height: 11, border: '1.5px solid rgba(255,255,255,0.7)', borderRadius: 3, position: 'relative', display: 'flex', alignItems: 'center', padding: '1px' }}>
              <div style={{ width: '80%', height: '100%', background: '#22c55e', borderRadius: 1.5 }} />
              <div style={{ width: 2, height: 5, background: 'rgba(255,255,255,0.5)', borderRadius: 1, position: 'absolute', right: -4 }} />
            </div>
          </div>
        </div>
      </div>
      {/* Screen content */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        overflow: 'hidden',
        borderRadius: 42,
      }}>
        {children}
      </div>
      {/* Home indicator */}
      <div style={{
        position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
        width: 134, height: 5, background: 'rgba(255,255,255,0.3)',
        borderRadius: 3, zIndex: 100,
      }} />
    </div>
  );
}
