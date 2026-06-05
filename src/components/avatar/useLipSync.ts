import { useState, useRef, useCallback } from 'react'

export type MorphValues = Record<string, number>

const VISEME_SEQUENCE = [
  'viseme_aa', 'viseme_E', 'viseme_I', 'viseme_O', 'viseme_U',
  'viseme_PP', 'viseme_FF', 'viseme_SS', 'viseme_nn', 'viseme_RR',
  'viseme_DD', 'viseme_kk', 'viseme_CH', 'viseme_TH',
]

const ZERO_MORPH: MorphValues = Object.fromEntries(
  VISEME_SEQUENCE.map((v) => [v, 0])
)

function charToViseme(ch: string): string {
  const c = ch.toLowerCase()
  if ('aeiou'.includes(c)) {
    const map: Record<string, string> = { a: 'viseme_aa', e: 'viseme_E', i: 'viseme_I', o: 'viseme_O', u: 'viseme_U' }
    return map[c] ?? 'viseme_aa'
  }
  if ('pbm'.includes(c)) return 'viseme_PP'
  if ('fv'.includes(c)) return 'viseme_FF'
  if ('sz'.includes(c)) return 'viseme_SS'
  if ('nl'.includes(c)) return 'viseme_nn'
  if ('r'.includes(c)) return 'viseme_RR'
  if ('td'.includes(c)) return 'viseme_DD'
  if ('kg'.includes(c)) return 'viseme_kk'
  return 'viseme_aa'
}

export function useLipSync() {
  const [morphValues, setMorphValues] = useState<MorphValues>(ZERO_MORPH)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (!('speechSynthesis' in window)) {
      onEnd?.()
      return
    }

    window.speechSynthesis.cancel()
    clearTimers()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.92
    utterance.pitch = 1.05
    utterance.volume = 1

    // Schedule phoneme-approximated visemes based on character timing
    const chars = text.replace(/[^a-zA-Z\s]/g, '').split('')
    const msPerChar = 80

    chars.forEach((ch, i) => {
      if (ch === ' ') return
      const viseme = charToViseme(ch)
      const t1 = setTimeout(() => {
        setMorphValues({ ...ZERO_MORPH, [viseme]: 0.85 })
      }, i * msPerChar)
      const t2 = setTimeout(() => {
        setMorphValues(ZERO_MORPH)
      }, i * msPerChar + 60)
      timersRef.current.push(t1, t2)
    })

    utterance.onend = () => {
      clearTimers()
      setMorphValues(ZERO_MORPH)
      onEnd?.()
    }

    utterance.onerror = () => {
      clearTimers()
      setMorphValues(ZERO_MORPH)
      onEnd?.()
    }

    window.speechSynthesis.speak(utterance)
  }, [clearTimers])

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel()
    clearTimers()
    setMorphValues(ZERO_MORPH)
  }, [clearTimers])

  return { morphValues, speak, stop }
}
