import React, { useEffect, useState } from 'react'
import './what.css'
import { Link } from 'react-router-dom'

const What = () => {
  const [hex1active, sethex1active] = useState(false)
  const [hex2active, sethex2active] = useState(false)
  const [hex3active, sethex3active] = useState(false)
  const [hex4active, sethex4active] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    console.log(window.screenY)
  }, [window.screenY])

  function setHex1() {
    console.log(document.documentElement.scrollTop);
    sethex1active(state => !state);
    setActive(state => !state);
  }

  function setHex2() {
    sethex2active(state => !state);
    setActive(state => !state);
  }

  function setHex3() {
    sethex3active(state => !state);
    setActive(state => !state);
  }

  function setHex4() {
    // if (!hex4active) {
    //   window.scrollTo(0,0)
    // }
    console.log(document.body.scrollTop);
    sethex4active(state => !state);
    setActive(state => !state);
  }


  return (
    <div className={`what-body no-overflow ${active ? 'cutoff' : ''}`}>
      <div className='hexagons'>
        <button className={`small-hex hex hex1 ${hex1active ? ' viewHex1 viewHex' : ''}`} onClick={setHex1}>Place Branding</button>
        <button className={`small-hex hex hex2 ${hex2active ? ' viewHex2 viewHex' : ''}`} onClick={setHex2}>Brand Strategy</button>
        <button className={`small-hex hex hex3 ${hex3active ? ' viewHex3 viewHex' : ''}`} onClick={setHex3}>Stakeholder Engagement</button>
        <button className={`small-hex hex hex4 ${hex4active ? ' viewHex4 viewHex' : ''}`} onClick={setHex4}>Stategic Communications</button>
        <div className='large-hex hex'></div>
        <div className='circle'></div>
      </div>

      <div className={`textHex1 textHex ${hex1active ? ' textView' : ''}`}>
        <h1>Place Branding</h1>
        <p>Place branding goes beyond traditional marketing approaches by emphasizing the unique characteristics, values, culture, and assets of a place to differentiate it from competitors and attract attention, investment, tourism, or talent. It aims to create a distinctive and desirable identity that aligns with the aspirations and goals of the place's stakeholders.</p>
        <p className='flash'>Click to exit</p>
      </div>
      <div className={`textHex2 textHex ${hex2active ? ' textView' : ''}`}>
        <h1>Brand Strategy</h1>
        <p>The primary objective of a brand strategy is to create a unique and compelling brand identity that resonates with the intended audience, fosters trust and loyalty, and distinguishes the brand from its competitors. It guides all aspects of brand management, including product development, marketing campaigns, customer interactions, and brand extensions.</p>
        <p className='flash'>Click to exit</p>
      </div>
      <div className={`textHex3 textHex ${hex3active ? ' textView' : ''}`}>
        <h1>Stakeholder Engagement</h1>
        <p>Stakeholder engagement is crucial in various fields, including business, government, nonprofit organizations, and community development. It helps ensure that stakeholders' needs and interests are considered and balanced, fosters transparency and accountability, promotes collaboration and cooperation, and ultimately contributes to the success and sustainability of projects and organizations.</p>
        <p className='flash'>Click to exit</p>  
      </div>
      <div className={`textHex4 textHex ${hex4active ? ' textView' : ''}`}>
        <h1>Stategic Communications</h1>
        <p>Strategic communication encompasses various elements, such as message development, audience analysis, media selection, channel optimization, and evaluation of communication efforts. It often involves careful planning, research, and analysis to understand the needs and preferences of the audience, identify key messages, determine the most appropriate channels, and measure the impact of communication initiatives.</p>
        <p className='flash'>Click to exit</p>
      </div>

      {/* <div className='strategy'> */}
        <Link to='/strategy' className='strategy-link'>How We Work</Link>
      {/* </div> */}
    </div>
  )
}

export default What