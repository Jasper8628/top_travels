import React from 'react'
import './style.css'

function Index({ value, color, skew }) {
  const randian = Math.abs(Math.cos(value / 480 * Math.PI));
  const y = Math.sin(value / 540 * Math.PI + Math.PI / 2);
  const angle = -value - 165;
  const alpha = 120 / (Math.abs(240 - value) + 1) * 0.4

  return (
    <div >
      <div className='cardContainer'
        style={{
          transform: `perspective(1000px) rotateX( 30deg)  rotateY(${angle}deg)`,
          transition: "0.5s",
          display: value < -80 || value > 600 ? 'none' : 'inline',
          zIndex: value < 200 ? 1 : 10
        }}
      >
        <div style={{
          transform: `rotateY(45deg ) rotateX(-30deg)  skewX(${skew * 15}deg) rotateZ(${randian * 15}deg) translateZ(clamp(450px,28vw,600px) )`,
          top: `${y * 40 + 10}vh`,
          transition: "0.5s",
          background: value < 200 || value > 280 ? `rgba(200, 200, 200, ${alpha})` : 'red'
        }}
          className='card'
        >
        </div>

      </div>
    </div>
  )
}

export default Index
