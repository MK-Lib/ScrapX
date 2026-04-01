import { useState } from 'react'

const steps = ['phone', 'otp', 'details', 'kyc', 'payment']

export default function RegisterScreen({ go, role, setRole }) {
  const [step, setStep] = useState('phone')
  const [otp, setOtp] = useState(['', '', '', ''])

  const next = () => {
    const idx = steps.indexOf(step)
    if (idx < steps.length - 1) setStep(steps[idx + 1])
    else go('home')
  }

  const handleOtp = (val, i) => {
    const next_ = [...otp]
    next_[i] = val.slice(-1)
    setOtp(next_)
    if (val && i < 3) document.getElementById(`otp-${i + 1}`)?.focus()
  }

  return (
    <div className="screen" style={{ padding: '0 0 120px', background: '#ffffff' }}>
      <div className="status-bar" />

      <div style={{ padding: '24px 20px 0' }}>
        {/* Logo */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: '#000000',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20
            }}>♻️</div>
            <span style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a' }}>ScrapX</span>
          </div>
          <p style={{ color: '#888888', fontSize: 14 }}>Turn scrap into cash, instantly.</p>
        </div>

        {/* Role toggle */}
        <div style={{
          display: 'flex', background: '#f6f6f6', borderRadius: 12,
          padding: 4, marginBottom: 28, border: '1px solid #e8e8e8'
        }}>
          {['seller', 'yard'].map(r => (
            <button
              key={r}
              onClick={() => setRole(r)}
              style={{
                flex: 1, padding: '10px 0', borderRadius: 9, border: 'none',
                background: role === r ? '#000000' : 'transparent',
                color: role === r ? '#ffffff' : '#888888',
                fontWeight: 600, fontSize: 14, cursor: 'pointer', transition: 'all 0.2s'
              }}
            >{r === 'seller' ? '🛒 Sell Scrap' : '🏭 Scrap Yard'}</button>
          ))}
        </div>

        {/* Step indicator */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 28 }}>
          {steps.map((s, i) => (
            <div key={s} style={{
              flex: 1, height: 3, borderRadius: 99,
              background: steps.indexOf(step) >= i ? '#000000' : '#e8e8e8'
            }} />
          ))}
        </div>

        {step === 'phone' && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>
              {role === 'seller' ? 'Create your account' : 'Register your yard'}
            </h2>
            <p style={{ color: '#888888', fontSize: 14, marginBottom: 24 }}>Enter your mobile number to get started</p>
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              <select style={{ width: 80, flexShrink: 0 }}>
                <option>+371</option><option>+44</option><option>+49</option>
              </select>
              <input placeholder="Phone number" type="tel" />
            </div>
            <button className="btn-primary" onClick={next}>Send OTP →</button>
          </div>
        )}

        {step === 'otp' && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>Verify number</h2>
            <p style={{ color: '#888888', fontSize: 14, marginBottom: 24 }}>Enter the 4-digit code sent to your phone</p>
            <div style={{ display: 'flex', gap: 10, marginBottom: 24, justifyContent: 'center' }}>
              {otp.map((v, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  value={v}
                  onChange={e => handleOtp(e.target.value, i)}
                  style={{
                    width: 56, height: 64, textAlign: 'center',
                    fontSize: 24, fontWeight: 700, borderRadius: 12,
                    border: v ? '2px solid #000000' : '1px solid #d0d0d0',
                    background: '#ffffff', color: '#1a1a1a'
                  }}
                  maxLength={1}
                />
              ))}
            </div>
            <button className="btn-primary" onClick={next}>Verify →</button>
            <p style={{ textAlign: 'center', color: '#888888', fontSize: 13, marginTop: 12 }}>
              Didn't receive it? <span style={{ color: '#000000', fontWeight: 600, cursor: 'pointer' }}>Resend</span>
            </p>
          </div>
        )}

        {step === 'details' && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>
              {role === 'seller' ? 'Your details' : 'Company details'}
            </h2>
            <p style={{ color: '#888888', fontSize: 14, marginBottom: 24 }}>
              {role === 'seller' ? 'Tell us about yourself' : 'Company information for KYB'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {role === 'seller' ? (
                <>
                  <input placeholder="Full name" />
                  <select><option>Latvia</option><option>Estonia</option><option>Lithuania</option><option>Germany</option></select>
                </>
              ) : (
                <>
                  <input placeholder="Company name" />
                  <input placeholder="Registration number" />
                  <input placeholder="Business address" />
                </>
              )}
            </div>
            <button className="btn-primary" style={{ marginTop: 20 }} onClick={next}>Continue →</button>
          </div>
        )}

        {step === 'kyc' && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>
              {role === 'seller' ? 'Identity check' : 'Business verification'}
            </h2>
            <p style={{ color: '#888888', fontSize: 14, marginBottom: 24 }}>
              {role === 'seller' ? 'Upload a government-issued ID' : 'Upload director ID for KYB review'}
            </p>
            <div style={{
              border: '2px dashed #d0d0d0', borderRadius: 16,
              padding: 32, textAlign: 'center', marginBottom: 20, cursor: 'pointer',
              background: '#fafafa'
            }} onClick={next}>
              <div style={{ fontSize: 40, marginBottom: 8 }}>📄</div>
              <p style={{ color: '#1a1a1a', fontWeight: 600, marginBottom: 4 }}>Tap to upload document</p>
              <p style={{ color: '#888888', fontSize: 13 }}>Passport, ID card or driving licence</p>
            </div>
            <div style={{
              background: '#f6f6f6', border: '1px solid #e8e8e8',
              borderRadius: 10, padding: '10px 14px',
              display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 16
            }}>
              <span>🔒</span>
              <p style={{ color: '#888888', fontSize: 12, lineHeight: 1.5 }}>
                Your document is encrypted and reviewed within 24h. Status updates sent by SMS.
              </p>
            </div>
            <button className="btn-primary" onClick={next}>Submit for Review →</button>
          </div>
        )}

        {step === 'payment' && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>Payment details</h2>
            <p style={{ color: '#888888', fontSize: 14, marginBottom: 24 }}>
              Where should we send your {role === 'seller' ? 'payouts' : 'payments'}?
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
              <input placeholder="Full name on account" />
              <input placeholder="IBAN (e.g. LV80BANK0000435195001)" />
              <input placeholder="BIC / SWIFT" />
            </div>
            <div className="card" style={{ padding: '12px 14px', marginBottom: 16, display: 'flex', gap: 10, alignItems: 'center' }}>
              <span style={{ fontSize: 20 }}>✅</span>
              <div>
                <p style={{ color: '#1a1a1a', fontSize: 13, fontWeight: 600 }}>Almost done!</p>
                <p style={{ color: '#888888', fontSize: 12 }}>Account pending verification. You'll be notified when approved.</p>
              </div>
            </div>
            <button className="btn-primary" onClick={() => go('home')}>
              {role === 'seller' ? 'Start Selling →' : 'Go to Dashboard →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
