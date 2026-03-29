import { useState } from 'react';
import PhoneFrame from './components/PhoneFrame';

// Seller screens
import RegisterScreen from './screens/seller/RegisterScreen';
import HomeScreen from './screens/seller/HomeScreen';
import LocationScreen from './screens/seller/LocationScreen';
import CaptureScreen from './screens/seller/CaptureScreen';
import AIAnalysisScreen from './screens/seller/AIAnalysisScreen';
import MapViewScreen from './screens/seller/MapViewScreen';
import YardDetailScreen from './screens/seller/YardDetailScreen';
import ConfirmRequestScreen from './screens/seller/ConfirmRequestScreen';
import MatchedScreen from './screens/seller/MatchedScreen';
import DeliveryScreen from './screens/seller/DeliveryScreen';
import PaidScreen from './screens/seller/PaidScreen';

// Yard screens
import YardRegisterScreen from './screens/yard/YardRegisterScreen';
import PricingSetupScreen from './screens/yard/PricingSetupScreen';
import AcceptanceSetupScreen from './screens/yard/AcceptanceSetupScreen';
import IncomingRequestScreen from './screens/yard/IncomingRequestScreen';
import ActiveJobScreen from './screens/yard/ActiveJobScreen';
import InventoryScreen from './screens/yard/InventoryScreen';

const SELLER_FLOW = [
  { id: 'register', label: 'Register', component: RegisterScreen },
  { id: 'home', label: 'Home', component: HomeScreen },
  { id: 'location', label: 'Location', component: LocationScreen },
  { id: 'capture', label: 'Capture Photos', component: CaptureScreen },
  { id: 'ai', label: 'AI Analysis', component: AIAnalysisScreen },
  { id: 'map', label: 'Map View', component: MapViewScreen },
  { id: 'yard-detail', label: 'Yard Detail', component: YardDetailScreen },
  { id: 'confirm', label: 'Confirm Request', component: ConfirmRequestScreen },
  { id: 'matched', label: 'Matched', component: MatchedScreen },
  { id: 'delivery', label: 'Weigh-in', component: DeliveryScreen },
  { id: 'paid', label: 'Paid', component: PaidScreen },
];

const YARD_FLOW = [
  { id: 'y-register', label: 'Register', component: YardRegisterScreen },
  { id: 'y-pricing', label: 'Pricing Setup', component: PricingSetupScreen },
  { id: 'y-acceptance', label: 'Acceptance Setup', component: AcceptanceSetupScreen },
  { id: 'y-request', label: 'New Request', component: IncomingRequestScreen },
  { id: 'y-job', label: 'Active Job', component: ActiveJobScreen },
  { id: 'y-inventory', label: 'Stockpile', component: InventoryScreen },
];

export default function App() {
  const [flow, setFlow] = useState('seller');
  const [screenIdx, setScreenIdx] = useState(0);

  const screens = flow === 'seller' ? SELLER_FLOW : YARD_FLOW;
  const current = screens[screenIdx];
  const Screen = current.component;

  const goNext = () => setScreenIdx(i => Math.min(i + 1, screens.length - 1));
  const goBack = () => setScreenIdx(i => Math.max(i - 1, 0));

  const switchFlow = (f) => {
    setFlow(f);
    setScreenIdx(0);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', display: 'flex', flexDirection: 'column' }}>
      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px', height: 56,
        background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 50,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, background: '#f97316', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: -0.3 }}>ScrapX</span>
          <span style={{ fontSize: 12, color: '#475569', fontWeight: 400 }}>· UI Prototype</span>
        </div>

        {/* Flow toggle */}
        <div style={{ display: 'flex', background: '#1e293b', borderRadius: 12, padding: 4, gap: 4 }}>
          {[
            { id: 'seller', label: '👤 Seller Flow' },
            { id: 'yard', label: '🏭 Yard Flow' },
          ].map(f => (
            <button key={f.id} onClick={() => switchFlow(f.id)} style={{
              padding: '7px 16px', borderRadius: 8, border: 'none', fontSize: 13, fontWeight: 600,
              background: flow === f.id ? (f.id === 'seller' ? '#f97316' : '#3b82f6') : 'transparent',
              color: flow === f.id ? '#fff' : '#64748b',
              cursor: 'pointer',
            }}>
              {f.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
          <span style={{ fontSize: 12, color: '#475569' }}>Prototype</span>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', padding: '32px', gap: 32, justifyContent: 'center', alignItems: 'flex-start', overflowX: 'auto' }}>

        {/* Screen nav sidebar */}
        <div style={{ width: 192, flexShrink: 0, paddingTop: 8 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
            {flow === 'seller' ? '👤 Seller' : '🏭 Yard'} Screens
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {screens.map((s, i) => (
              <button key={s.id} onClick={() => setScreenIdx(i)} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '9px 10px', borderRadius: 10, border: 'none', textAlign: 'left',
                background: i === screenIdx
                  ? (flow === 'seller' ? 'rgba(249,115,22,0.12)' : 'rgba(59,130,246,0.12)')
                  : 'transparent',
                cursor: 'pointer', width: '100%',
              }}>
                <div style={{
                  width: 24, height: 24, borderRadius: 7,
                  background: i === screenIdx
                    ? (flow === 'seller' ? '#f97316' : '#3b82f6')
                    : i < screenIdx ? 'rgba(34,197,94,0.15)' : '#1e293b',
                  border: i < screenIdx ? '1px solid rgba(34,197,94,0.3)' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {i < screenIdx
                    ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                    : <span style={{ fontSize: 9, fontWeight: 700, color: i === screenIdx ? '#fff' : '#475569' }}>{i + 1}</span>
                  }
                </div>
                <span style={{
                  fontSize: 12, fontWeight: i === screenIdx ? 700 : 400,
                  color: i === screenIdx ? '#fff' : i < screenIdx ? '#64748b' : '#475569',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: 16, padding: '12px', background: '#1e293b', borderRadius: 12, border: '1px solid #334155' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 11, color: '#475569', fontWeight: 600 }}>Progress</span>
              <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700 }}>{screenIdx + 1}/{screens.length}</span>
            </div>
            <div style={{ height: 4, background: '#0f172a', borderRadius: 2 }}>
              <div style={{
                height: '100%',
                width: `${((screenIdx + 1) / screens.length) * 100}%`,
                background: flow === 'seller' ? '#f97316' : '#3b82f6',
                borderRadius: 2, transition: 'width 0.3s',
              }} />
            </div>
          </div>
        </div>

        {/* Phone + nav buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <PhoneFrame>
            <Screen onNext={goNext} onBack={goBack} />
          </PhoneFrame>

          {/* Nav controls */}
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={goBack} disabled={screenIdx === 0} style={{
              padding: '10px 20px', background: screenIdx === 0 ? 'transparent' : '#1e293b',
              border: `1px solid ${screenIdx === 0 ? '#1a1a2e' : '#334155'}`,
              borderRadius: 10, fontSize: 13, fontWeight: 600,
              color: screenIdx === 0 ? '#1e293b' : '#94a3b8',
              cursor: screenIdx === 0 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back
            </button>

            <div style={{ display: 'flex', alignItems: 'center', background: '#1e293b', border: '1px solid #334155', borderRadius: 10, padding: '0 16px' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#64748b' }}>{current.label}</span>
            </div>

            <button onClick={goNext} disabled={screenIdx === screens.length - 1} style={{
              padding: '10px 20px',
              background: screenIdx === screens.length - 1
                ? 'transparent'
                : (flow === 'seller' ? '#f97316' : '#3b82f6'),
              border: `1px solid ${screenIdx === screens.length - 1 ? '#1a1a2e' : 'transparent'}`,
              borderRadius: 10, fontSize: 13, fontWeight: 600,
              color: screenIdx === screens.length - 1 ? '#1e293b' : '#fff',
              cursor: screenIdx === screens.length - 1 ? 'default' : 'pointer',
              boxShadow: screenIdx < screens.length - 1
                ? `0 4px 14px ${flow === 'seller' ? 'rgba(249,115,22,0.3)' : 'rgba(59,130,246,0.3)'}`
                : 'none',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              Next
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Right info panel */}
        <div style={{ width: 192, flexShrink: 0, paddingTop: 8 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
            Screen Info
          </p>

          <div style={{ background: '#1e293b', borderRadius: 12, padding: '14px', border: '1px solid #334155', marginBottom: 12 }}>
            <p style={{ fontSize: 11, color: '#475569', marginBottom: 4 }}>Current</p>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{current.label}</p>
            <p style={{ fontSize: 11, color: '#475569', marginBottom: 4 }}>Flow</p>
            <p style={{ fontSize: 13, fontWeight: 600, color: flow === 'seller' ? '#f97316' : '#3b82f6' }}>
              {flow === 'seller' ? 'Seller Flow' : 'Scrap Yard Flow'}
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12, padding: '14px', marginBottom: 12 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>Legend</p>
            {[
              { color: '#f97316', label: 'CTAs advance flow' },
              { color: '#3b82f6', label: 'Yard flow accent' },
              { color: '#22c55e', label: 'Success / paid' },
              { color: '#eab308', label: 'Tips & warnings' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: item.color, flexShrink: 0 }} />
                <span style={{ fontSize: 11, color: '#475569' }}>{item.label}</span>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12, padding: '14px' }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 }}>Coverage</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { label: 'Seller screens', val: '11', color: '#f97316' },
                { label: 'Yard screens', val: '6', color: '#3b82f6' },
                { label: 'Total screens', val: '17', color: '#22c55e' },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 11, color: '#475569' }}>{s.label}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: s.color }}>{s.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
