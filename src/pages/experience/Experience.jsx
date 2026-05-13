import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <div className='experience-body'>
      <a href='https://welcometosheffield.co.uk' target='_blank' className={`experience-hex sheff-bg-img`}>
        <div className='hex-cover'>
        </div>
        <h3>
            Sheffield
        </h3>
      </a>
      <a href='https://marketingnottingham.uk' target='_blank' className={`experience-hex notts-bg-img`}>
        <div className='hex-cover'>
        </div>
        <h3>
            Nottingham
        </h3>
      </a>
      <a href='https://WeareNorthampton.com' target='_blank' className={`experience-hex north-bg-img`}>
        <div className='hex-cover'>
        </div>
        <h3>
            Northampton
        </h3>
      </a>
      <a href='https://TraditionalOriginal.com' target='_blank' className={`experience-hex sal-bg-img`}>
        <div className='hex-cover'>
        </div>
        <h3>
            Salisbury
        </h3>
      </a>
      <a href='https://www.connecttowoking.co.uk' target='_blank' className={`experience-hex woking-bg-img`}>
        <div className='hex-cover'>
        </div>
        <h3>
            Woking
        </h3>
      </a>
    </div>
  )
}

export default Experience