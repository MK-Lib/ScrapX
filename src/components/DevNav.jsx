const SELLER_SCREENS = [
  { id: 'register', label: 'Register' },
  { id: 'home', label: 'Home' },
  { id: 'location', label: 'Location' },
  { id: 'capture', label: 'Capture' },
  { id: 'analysis', label: 'AI Scan' },
  { id: 'result', label: 'Result' },
  { id: 'map', label: 'Map' },
  { id: 'yard-detail', label: 'Yard' },
  { id: 'confirm-request', label: 'Confirm' },
  { id: 'matched', label: 'Matched' },
  { id: 'deliver', label: 'Deliver' },
  { id: 'paid', label: 'Paid' },
]

const YARD_SCREENS = [
  { id: 'yard-dashboard', label: 'Dashboard' },
  { id: 'yard-incoming', label: 'Incoming' },
  { id: 'yard-active', label: 'Active Job' },
  { id: 'yard-inventory', label: 'Inventory' },
]

export default function DevNav({ screen, go, role, setRole }) {
  const screens = role === 'seller' ? SELLER_SCREENS : YARD_SCREENS

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 390,
      background: '#ffffff',
      borderTop: '1px solid #e8e8e8',
      padding: '8px 12px 12px',
      zIndex: 9999,
      boxShadow: '0 -2px 12px rgba(0,0,0,0.06)',
    }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
        <button
          onClick={() => { setRole('seller'); go('home') }}
          style={{
            flex: 1, padding: '5px 0', borderRadius: 8, border: 'none',
            background: role === 'seller' ? '#000000' : '#f0f0f0',
            color: role === 'seller' ? '#fff' : '#666666',
            fontSize: 11, fontWeight: 600, cursor: 'pointer'
          }}
        >Seller Flow</button>
        <button
          onClick={() => { setRole('yard'); go('yard-dashboard') }}
          style={{
            flex: 1, padding: '5px 0', borderRadius: 8, border: 'none',
            background: role === 'yard' ? '#000000' : '#f0f0f0',
            color: role === 'yard' ? '#fff' : '#666666',
            fontSize: 11, fontWeight: 600, cursor: 'pointer'
          }}
        >Yard Flow</button>
      </div>
      <div style={{ display: 'flex', gap: 4, overflowX: 'auto', paddingBottom: 2 }}>
        {screens.map(s => (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            style={{
              flexShrink: 0, padding: '4px 10px', borderRadius: 20, border: 'none',
              background: screen === s.id ? '#000000' : '#f0f0f0',
              color: screen === s.id ? '#fff' : '#888888',
              fontSize: 10, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap'
            }}
          >{s.label}</button>
        ))}
      </div>
    </div>
  )
}
