const HF_ENDPOINT = 'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-11B-Vision-Instruct/v1/chat/completions'

const SYSTEM_PROMPT = `You are an expert scrap metal evaluator with 20 years of experience.
   Analyze the provided photos and return ONLY valid JSON, no explanation, no markdown.`

const USER_PROMPT = `{
  "metal_type": "copper|aluminum|steel|brass|stainless_steel|lead|iron|unknown",
  "form_factor": "pipe|wire|sheet|extrusion|casting|mixed",
  "cleanliness_grade": "clean|mixed|contaminated",
  "surface_condition": "pristine|oxidised|rusty|heavily_corroded",
  "condition_notes": "one sentence description",
  "estimated_weight_kg": { "min": 0, "max": 0 },
  "confidence": 0.0,
  "improvement_tip": "actionable tip to increase payout, or null"
}`

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(new Error('Failed to read one of the selected images'))
    reader.readAsDataURL(file)
  })
}

async function normalizeImageInput(imageFile) {
  if (imageFile instanceof File) {
    return fileToDataUrl(imageFile)
  }

  if (typeof imageFile === 'string') {
    const trimmed = imageFile.trim()
    if (!trimmed) throw new Error('One of the provided image strings is empty')
    if (trimmed.startsWith('data:image')) return trimmed
    return `data:image/jpeg;base64,${trimmed}`
  }

  throw new Error('imageFiles must contain File objects or base64 strings')
}

function extractModelText(payload) {
  const content = payload?.choices?.[0]?.message?.content

  if (typeof content === 'string') return content

  if (Array.isArray(content)) {
    return content
      .filter(block => block?.type === 'text' && typeof block.text === 'string')
      .map(block => block.text)
      .join('\n')
  }

  return payload?.choices?.[0]?.text || ''
}

export async function analyzeScrapMetal(imageFiles) {
  if (!Array.isArray(imageFiles) || imageFiles.length < 1 || imageFiles.length > 3) {
    throw new Error('analyzeScrapMetal expects an array of 1 to 3 images')
  }

  const token = import.meta.env.VITE_HUGGING_FACE_TOKEN
  if (!token) {
    throw new Error('Missing VITE_HUGGING_FACE_TOKEN. Add it to your .env file with the VITE_ prefix.')
  }

  const imageUrls = await Promise.all(imageFiles.map(normalizeImageInput))

  const response = await fetch(HF_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      messages: [
        {
          role: 'system',
          content: SYSTEM_PROMPT,
        },
        {
          role: 'user',
          content: [
            { type: 'text', text: USER_PROMPT },
            ...imageUrls.map(url => ({
              type: 'image_url',
              image_url: { url },
            })),
          ],
        },
      ],
      max_tokens: 512,
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`Hugging Face request failed (${response.status}): ${errorBody || response.statusText}`)
  }

  const payload = await response.json()
  const modelText = extractModelText(payload)

  if (!modelText) {
    throw new Error('Hugging Face returned an empty response body')
  }

  const jsonMatch = modelText.match(/\{[\s\S]*\}/)
  if (!jsonMatch) {
    throw new Error(`Could not find a JSON object in model response: ${modelText}`)
  }

  try {
    return JSON.parse(jsonMatch[0])
  } catch (error) {
    throw new Error(`Failed to parse model JSON: ${error.message}`)
  }
}
