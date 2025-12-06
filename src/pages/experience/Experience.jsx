import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <div className='experience-body'>
      <div className={`experience-hex sheff-bg-img`}>
        <div className='hex-cover'>
        </div>
        <a href='https://welcometosheffield.co.uk' target='_blank'>
            Sheffield
        </a>
      </div>
      <div className={`experience-hex notts-bg-img`}>
        <div className='hex-cover'>
        </div>
        <a href='https://marketingnottingham.uk' target='_blank'>
            Nottingham
        </a>
      </div>
      <div className={`experience-hex north-bg-img`}>
        <div className='hex-cover'>
        </div>
        <a href='https://WeareNorthampton.com' target='_blank'>
            Northampton
        </a>
      </div>
      <div className={`experience-hex sal-bg-img`}>
        <div className='hex-cover'>
        </div>
        <a href='https://TraditionalOriginal.com' target='_blank'>
            Salisbury
        </a>
      </div>
            <div className={`experience-hex woking-bg-img`}>
        <div className='hex-cover'>
        </div>
        <a href='https://www.connecttowoking.co.uk' target='_blank'>
            Woking
        </a>
      </div>
    </div>
  )
}

export default Experience