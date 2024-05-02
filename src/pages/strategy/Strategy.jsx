import React, { useState } from 'react'
import './strategy.css'
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const Strategy = () => {
  const [triangle1, settriangle1] = useState(false);
  const [triangle2, settriangle2] = useState(false);
  const [triangle3, settriangle3] = useState(false);
  const [triangle4, settriangle4] = useState(false);
  const [triangle5, settriangle5] = useState(false);
  const [triangle6, settriangle6] = useState(false);

  function setTriangle1() {
    settriangle1(state => !state)
  }
  function setTriangle2() {
    settriangle2(state => !state)
  }
  function setTriangle3() {
    settriangle3(state => !state)
  }
  function setTriangle4() {
    settriangle4(state => !state)
  }
  function setTriangle5() {
    settriangle5(state => !state)
  }
  function setTriangle6() {
    settriangle6(state => !state)
  }

  return (
    <div className='strategy-body'>
      <button className={`triangle triangle-up triangle1 ${triangle1 ? 'viewTriangle viewTriangle1' : ''}`} onClick={setTriangle1}>Potential</button>
      <button className={`triangle triangle-up triangle2 ${triangle2 ? 'viewTriangle viewTriangle2' : ''}`} onClick={setTriangle2}>Place</button>
      <button className={`triangle triangle-up triangle3 ${triangle3 ? 'viewTriangle viewTriangle3' : ''}`} onClick={setTriangle3}>Prerequisites</button>
      <button className={`triangle triangle-down triangle4 ${triangle4 ? 'viewTriangle viewTriangle4' : ''}`} onClick={setTriangle4}>Presence</button>
      <button className={`triangle triangle-down triangle5 ${triangle5 ? 'viewTriangle viewTriangle5' : ''}`} onClick={setTriangle5}>Pulse</button>
      <button className={`triangle triangle-down triangle6 ${triangle6 ? 'viewTriangle viewTriangle6' : ''}`} onClick={setTriangle6}>People</button>
      <div className='hex grey-hex'></div>

      <div className={`text ${triangle1 ? ' textTriangle1' : ''}`}>
        <h1>Potential</h1>
        <p>Measures the perception of economic and educational opportunities within the area, such as how easy it might be to find a job, whether it&#39;s a good place to invest, do business or pursue a higher education.</p>
        <p className='flash'>Click to exit</p>
      </div>
      <div className={`text ${triangle2 ? ' textTriangle2' : ''}`}>
        <h1>Place</h1>
        <p>Exploring people&#39;s perceptions about the physical aspect of how the place presents itself in terms of cleanliness of environment and how attractive its buildings, parks and centre are.</p>
        <p className='flash'>Click to exit</p>
      </div>
      <div className={`text ${triangle3 ? ' textTriangle3' : ''}`}>
        <h1>Prerequisites</h1>
        <p>Determines how people perceive the basic qualities of the place, whether they are satisfactory, affordable and accommodating, as well as the standard of public amenities such as schools, hospitals, transportation housing and sports facilities.</p>
        <p className='flash'>Click to exit</p>
      </div>
      <div className={`text ${triangle4 ? ' textTriangle4' : ''}`}>
        <h1>Presence</h1>
        <p>Based on the city&#39;s national and international status, what is the city&#39;s contribution in science, culture and heritage.</p>
        <p className='flash'>Click to exit</p>
      </div>
      <div className={`text ${triangle5 ? ' textTriangle5' : ''}`}>
        <h1>Pulse</h1>
        <p>Measures the perception that there are interesting things to fill free time with and how exciting and vibrant the place is perceived to be in regard to new and different things to discover.</p>
        <p className='flash'>Click to exit</p>
      </div>
      <div className={`text ${triangle6 ? ' textTriangle6' : ''}`}>
        <h1>People</h1>
        <p>Reveals whether the inhabitants of the city are perceived as warm and welcoming, whether respondents think it would be easy for them to find and fit into a community that shares their language and culture and whether they would feel safe.</p>
        <p className='flash'>Click to exit</p>
      </div>

      <div className='reference'>
        Source: Anholt/Competitive Identity, place branding equity model
      </div>

      <Link to='/strategy2' className='arrow-right'>
        <MdArrowForwardIos />
      </Link>

    </div>
  )
}

export default Strategy