import { useState } from 'react'
import './index.css'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import LocationScreen from './screens/LocationScreen'
import CaptureScreen from './screens/CaptureScreen'
import AnalysisScreen from './screens/AnalysisScreen'
import ResultScreen from './screens/ResultScreen'
import MapScreen from './screens/MapScreen'
import YardDetailScreen from './screens/YardDetailScreen'
import ConfirmRequestScreen from './screens/ConfirmRequestScreen'
import MatchedScreen from './screens/MatchedScreen'
import DeliverScreen from './screens/DeliverScreen'
import PaidScreen from './screens/PaidScreen'
import YardDashboardScreen from './screens/YardDashboardScreen'
import YardIncomingScreen from './screens/YardIncomingScreen'
import YardActiveJobScreen from './screens/YardActiveJobScreen'
import YardInventoryScreen from './screens/YardInventoryScreen'
import DevNav from './components/DevNav'

export default function App() {
  const [screen, setScreen] = useState('register')
  const [role, setRole] = useState('seller')

  const analysisData = {
    metal: 'Copper Pipe',
    grade: 2,
    condition: 'Oxidised surface, fittings attached',
    cleanliness: 'Mixed',
    weightMin: 4,
    weightMax: 7,
    valueMin: 14,
    valueMax: 22,
    tip: 'Removing fittings and cleaning the surface could increase your payout by up to 20%',
    confidence: 'high'
  }

  const selectedYard = {
    name: 'MetalPoint Riga',
    address: 'Krasta iela 52, Riga',
    price: 3.20,
    distance: '1.2 km',
    rating: 4.8,
    pickup: true,
    hours: '08:00–18:00'
  }

  const go = (s) => setScreen(s)

  const renderScreen = () => {
    switch (screen) {
      case 'register':        return <RegisterScreen go={go} role={role} setRole={setRole} />
      case 'home':            return <HomeScreen go={go} role={role} />
      case 'location':        return <LocationScreen go={go} />
      case 'capture':         return <CaptureScreen go={go} />
      case 'analysis':        return <AnalysisScreen go={go} />
      case 'result':          return <ResultScreen go={go} data={analysisData} />
      case 'map':             return <MapScreen go={go} data={analysisData} />
      case 'yard-detail':     return <YardDetailScreen go={go} yard={selectedYard} data={analysisData} />
      case 'confirm-request': return <ConfirmRequestScreen go={go} yard={selectedYard} data={analysisData} />
      case 'matched':         return <MatchedScreen go={go} yard={selectedYard} data={analysisData} />
      case 'deliver':         return <DeliverScreen go={go} yard={selectedYard} data={analysisData} />
      case 'paid':            return <PaidScreen go={go} />
      case 'yard-dashboard':  return <YardDashboardScreen go={go} />
      case 'yard-incoming':   return <YardIncomingScreen go={go} />
      case 'yard-active':     return <YardActiveJobScreen go={go} />
      case 'yard-inventory':  return <YardInventoryScreen go={go} />
      default:                return <HomeScreen go={go} role={role} />
    }
  }

  return (
    <div className="phone-shell">
      {renderScreen()}
      <DevNav screen={screen} go={go} role={role} setRole={setRole} />
    </div>
  )
}
