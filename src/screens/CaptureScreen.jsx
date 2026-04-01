import { useRef, useState } from 'react'

const PHOTO_PROMPTS = [
  { label: 'Front view', hint: 'Take a front photo of your scrap', icon: '📷' },
  { label: 'Different angle', hint: 'Take a photo from a different angle', icon: '🔄' },
  { label: 'Close-up / scale', hint: 'Add a close-up or place a coin/hand next to it for scale', icon: '🔍' },
]

export default function CaptureScreen({ go }) {
  const [photos, setPhotos] = useState([null, null, null])
  const [active, setActive] = useState(0)
  const [description, setDescription] = useState('')
  const [captureError, setCaptureError] = useState('')
  const fileInputRefs = useRef([])

  const triggerCapture = (index) => {
    setCaptureError('')
    fileInputRefs.current[index]?.click()
  }

  const onPhotoSelected = async (index, event) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = () => reject(new Error('Failed to read selected image file'))
        reader.readAsDataURL(file)
      })

      const next = [...photos]
      next[index] = dataUrl
      setPhotos(next)
      if (index < 2) setActive(index + 1)
    } catch {
      setCaptureError('Could not read this photo. Please try another one.')
    } finally {
      event.target.value = ''
    }
  }

  const handleIdentify = () => {
    sessionStorage.setItem('scrapx_capture_images', JSON.stringify(photos.filter(Boolean)))
    sessionStorage.setItem('scrapx_capture_description', description.trim())
    sessionStorage.removeItem('scrapx_analysis_result')
    go('analysis')
  }

  const allDone = photos.every(Boolean)

  return (
    <div className="screen" style={{ paddingBottom: 120, background: '#ffffff' }}>
      <div className="status-bar" />
      <div style={{ padding: '12px 20px 0' }}>
        <button className="back-btn" onClick={() => go('location')}>← Back</button>

        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', margin: '20px 0 6px' }}>
          Photograph your scrap
        </h2>
        <p style={{ color: '#888888', fontSize: 14, marginBottom: 24 }}>
          3 photos helps our AI give you the best estimate
        </p>

        {/* Photo thumbnails */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          {PHOTO_PROMPTS.map((p, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                flex: 1, aspectRatio: '1', borderRadius: 12, cursor: 'pointer',
                border: active === i ? '2px solid #000000' : '1px solid #e8e8e8',
                background: photos[i] ? '#f0f0f0' : '#fafafa',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 4
              }}
            >
              {photos[i] ? (
                <>
                  <span style={{ fontSize: 22 }}>✅</span>
                  <span style={{ color: '#1a1a1a', fontSize: 10, fontWeight: 600 }}>Photo {i+1}</span>
                </>
              ) : (
                <>
                  <span style={{ fontSize: 22, opacity: active === i ? 1 : 0.35 }}>{p.icon}</span>
                  <span style={{ color: active === i ? '#888888' : '#cccccc', fontSize: 10 }}>Photo {i+1}</span>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Active capture area */}
        <div style={{
          height: 220, borderRadius: 16,
          background: '#f6f6f6', border: '1px solid #e8e8e8',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 12, marginBottom: 16, position: 'relative', overflow: 'hidden'
        }}>
          {!photos[active] && (
            <>
              <div style={{ position: 'absolute', top: 16, left: 16, width: 20, height: 20,
                borderTop: '2px solid #cccccc', borderLeft: '2px solid #cccccc' }} />
              <div style={{ position: 'absolute', top: 16, right: 16, width: 20, height: 20,
                borderTop: '2px solid #cccccc', borderRight: '2px solid #cccccc' }} />
              <div style={{ position: 'absolute', bottom: 16, left: 16, width: 20, height: 20,
                borderBottom: '2px solid #cccccc', borderLeft: '2px solid #cccccc' }} />
              <div style={{ position: 'absolute', bottom: 16, right: 16, width: 20, height: 20,
                borderBottom: '2px solid #cccccc', borderRight: '2px solid #cccccc' }} />
            </>
          )}

          {photos[active] ? (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 44, marginBottom: 8 }}>✅</div>
              <p style={{ color: '#1a1a1a', fontWeight: 600 }}>Photo {active + 1} captured</p>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '0 20px' }}>
              <div style={{ fontSize: 34, marginBottom: 10 }}>{PHOTO_PROMPTS[active].icon}</div>
              <p style={{ color: '#1a1a1a', fontWeight: 600, marginBottom: 6 }}>{PHOTO_PROMPTS[active].label}</p>
              <p style={{ color: '#888888', fontSize: 13, lineHeight: 1.5 }}>{PHOTO_PROMPTS[active].hint}</p>
            </div>
          )}
        </div>

        {!photos[active] && (
          <button className="btn-primary" style={{ marginBottom: 12 }} onClick={() => triggerCapture(active)}>
            📷 Take Photo {active + 1}
          </button>
        )}

        {captureError && (
          <p style={{ color: '#dc2626', fontSize: 12, marginBottom: 10, textAlign: 'center' }}>
            {captureError}
          </p>
        )}

        {PHOTO_PROMPTS.map((_, i) => (
          <input
            key={`photo-input-${i}`}
            ref={(el) => { fileInputRefs.current[i] = el }}
            type="file"
            accept="image/*"
            capture="environment"
            style={{ display: 'none' }}
            onChange={(event) => onPhotoSelected(i, event)}
          />
        ))}

        <div style={{ marginBottom: 16 }}>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="e.g. Old copper pipes from renovation"
            style={{ resize: 'none', minHeight: 72, lineHeight: 1.5 }}
          />
        </div>

        <button
          className="btn-primary"
          style={{ opacity: allDone ? 1 : 0.3 }}
          disabled={!allDone}
          onClick={handleIdentify}
        >
          Identify My Scrap →
        </button>

        {!allDone && (
          <p style={{ textAlign: 'center', color: '#aaaaaa', fontSize: 12, marginTop: 8 }}>
            {photos.filter(Boolean).length} of 3 photos taken
          </p>
        )}
      </div>
    </div>
  )
}
