import { useState, useEffect } from 'react'
import { analyzeScrapMetal } from '../services/metalAnalysis'

const STEPS = [
  { label: 'Uploading photos...', icon: '📤' },
  { label: 'Detecting metal type...', icon: '🔍' },
  { label: 'Assessing condition...', icon: '🧪' },
  { label: 'Estimating weight...', icon: '⚖️' },
  { label: 'Calculating value...', icon: '💰' },
]

const METAL_LABELS = {
  copper: 'Copper',
  aluminum: 'Aluminum',
  steel: 'Steel',
  brass: 'Brass',
  stainless_steel: 'Stainless Steel',
  lead: 'Lead',
  iron: 'Iron',
  unknown: 'Unknown',
}

const PRICE_PER_KG_EUR = {
  copper: 3.2,
  aluminum: 1.2,
  steel: 0.3,
  brass: 2.4,
  stainless_steel: 1.5,
  lead: 1.0,
  iron: 0.25,
  unknown: 0.5,
}

function humanizeValue(value) {
  if (!value || typeof value !== 'string') return 'Unknown'
  const normalized = value.replaceAll('_', ' ')
  return normalized.charAt(0).toUpperCase() + normalized.slice(1)
}

function mapAnalysisToResultData(analysis) {
  const metalType = analysis?.metal_type || 'unknown'
  const formFactor = analysis?.form_factor
  const metal = [METAL_LABELS[metalType] || 'Unknown', formFactor && formFactor !== 'mixed' ? humanizeValue(formFactor) : null]
    .filter(Boolean)
    .join(' ')

  const rawMin = Number(analysis?.estimated_weight_kg?.min)
  const rawMax = Number(analysis?.estimated_weight_kg?.max)
  const weightMin = Number.isFinite(rawMin) ? Math.max(0, rawMin) : 0
  const weightMaxBase = Number.isFinite(rawMax) ? Math.max(0, rawMax) : weightMin
  const weightMax = weightMaxBase < weightMin ? weightMin : weightMaxBase
  const rate = PRICE_PER_KG_EUR[metalType] ?? PRICE_PER_KG_EUR.unknown

  const confidenceScore = Number(analysis?.confidence)
  const confidence = Number.isFinite(confidenceScore)
    ? confidenceScore >= 0.75
      ? 'high'
      : confidenceScore >= 0.45
        ? 'medium'
        : 'low'
    : 'medium'

  return {
    metal,
    grade: analysis?.cleanliness_grade === 'clean' && analysis?.surface_condition === 'pristine' ? 1 : 2,
    condition: analysis?.condition_notes || 'Condition could not be determined from photos.',
    cleanliness: humanizeValue(analysis?.cleanliness_grade) || 'Mixed',
    surface: humanizeValue(analysis?.surface_condition),
    weightMin,
    weightMax,
    valueMin: Number((weightMin * rate).toFixed(2)),
    valueMax: Number((weightMax * rate).toFixed(2)),
    tip: analysis?.improvement_tip || 'Separate metals by type and remove attachments for a better payout.',
    confidence,
  }
}

export default function AnalysisScreen({ go }) {
  const [step, setStep] = useState(0)
  const [analysisError, setAnalysisError] = useState('')
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    let cancelled = false
    let navTimer

    setAnalysisError('')
    setStep(0)

    const runAnalysis = async () => {
      try {
        const storedImages = sessionStorage.getItem('scrapx_capture_images')
        const imageFiles = storedImages ? JSON.parse(storedImages) : []

        if (!Array.isArray(imageFiles) || imageFiles.length === 0) {
          throw new Error('No photos found. Please go back and capture your photos again.')
        }

        const analysis = await analyzeScrapMetal(imageFiles)
        if (cancelled) return

        const mappedResult = mapAnalysisToResultData(analysis)
        sessionStorage.setItem('scrapx_analysis_result', JSON.stringify(mappedResult))

        setStep(STEPS.length)
        navTimer = setTimeout(() => {
          if (!cancelled) go('result')
        }, 600)
      } catch (error) {
        if (cancelled) return
        setAnalysisError(error?.message || 'Analysis failed. Please try again.')
      }
    }

    runAnalysis()

    return () => {
      cancelled = true
      if (navTimer) clearTimeout(navTimer)
    }
  }, [go, retryCount])

  useEffect(() => {
    if (analysisError || step >= STEPS.length) return
    const t = setTimeout(() => setStep(s => Math.min(s + 1, STEPS.length)), 1000)
    return () => clearTimeout(t)
  }, [analysisError, step])

  const progress = Math.round((step / STEPS.length) * 100)

  return (
    <div className="screen" style={{ alignItems: 'center', justifyContent: 'center', background: '#ffffff' }}>
      <div style={{ width: '100%', maxWidth: 300, textAlign: 'center', padding: '0 20px' }}>

        <div style={{ position: 'relative', marginBottom: 32 }}>
          <svg width="120" height="120" viewBox="0 0 120 120" style={{ display: 'block', margin: '0 auto' }}>
            <circle cx="60" cy="60" r="52" fill="none" stroke="#f0f0f0" strokeWidth="8"/>
            <circle
              cx="60" cy="60" r="52"
              fill="none"
              stroke="#000000"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 52}`}
              strokeDashoffset={`${2 * Math.PI * 52 * (1 - progress / 100)}`}
              style={{ transition: 'stroke-dashoffset 0.5s ease', transform: 'rotate(-90deg)', transformOrigin: '60px 60px' }}
            />
          </svg>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)', textAlign: 'center'
          }}>
            <div style={{ fontSize: 26 }}>
              {step < STEPS.length ? STEPS[Math.min(step, STEPS.length - 1)].icon : '✅'}
            </div>
            <div style={{ color: '#1a1a1a', fontSize: 14, fontWeight: 700 }}>{progress}%</div>
          </div>
        </div>

        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>
          Analysing your scrap
        </h2>
        <p style={{ color: '#888888', fontSize: 14, marginBottom: 32 }}>
          {analysisError ? 'Could not finish AI analysis.' : 'AI is identifying your metal...'}
        </p>

        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 99,
                background: i < step ? '#000000' : '#f0f0f0',
                border: i === step ? '2px solid #000000' : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, flexShrink: 0, transition: 'background 0.3s',
                color: i < step ? '#ffffff' : '#888888'
              }}>
                {i < step ? '✓' : s.icon}
              </div>
              <span style={{
                color: i < step ? '#1a1a1a' : i === step ? '#1a1a1a' : '#cccccc',
                fontSize: 14, fontWeight: i === step ? 600 : 400,
                transition: 'color 0.3s'
              }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {analysisError ? (
          <div style={{ marginTop: 22 }}>
            <p style={{ color: '#dc2626', fontSize: 13, marginBottom: 12, lineHeight: 1.5 }}>{analysisError}</p>
            <button className="btn-primary" onClick={() => setRetryCount(c => c + 1)}>
              Retry analysis
            </button>
          </div>
        ) : (
          <p style={{ color: '#cccccc', fontSize: 12, marginTop: 28 }}>Usually takes under 10 seconds</p>
        )}
      </div>
    </div>
  )
}
