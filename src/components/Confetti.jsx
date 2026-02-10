import React, { useMemo } from 'react'

function rand(min, max) {
  return Math.random() * (max - min) + min
}

export default function Confetti({count = 80}){
  console.log('Confetti rendered, count=', count)
  const pieces = useMemo(() => {
    return Array.from({length: count}).map((_, i) => ({
      id: i,
      left: rand(0, 100),
      delay: rand(0, 0.6),
      duration: rand(2, 4),
      size: Math.floor(rand(6, 14)),
      rotate: Math.floor(rand(0, 360)),
      bg: ['#ff6159','#ffd166','#06d6a0','#118ab2','#ef476f'][Math.floor(rand(0,5))]
    }))
  }, [count])

  return (
    <div className="confetti-root" aria-hidden>
      {pieces.map(p => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            background: p.bg,
            width: p.size,
            height: p.size * 1.6,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`
          }}
        />
      ))}
    </div>
  )
}
