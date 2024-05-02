import React from 'react'
import './strategy2.css'
import MISSION from '../../assets/missionSnap.png'
import { MdArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const Strategy2 = () => {
  return (
    <div className='body-strategy2'>
        <div className='text-strategy2'>
            <h1>Audience segmentation</h1>
            <p>Our usual approach is to develop a clear mission statement with the client that will give the branding project a clear focus. What will give us true competitive advantage? What is our priority market focus? (investment in town centre regeneration, civic pride, new visitors, talent attraction and retention?)</p>
            <p>This will be defined by the brand positioning that emerges from the the above process. This will determine priority target audiences and relevant messages. Our skill is to interpret the findings, establish an authentic brand positioning and narrative.</p>
            <p>Once we have achieved this in partnership with our stakeholders we will then develop tailored campaigns for different audiences that reflect the brand positioning.</p>
        </div>
        <div className='image-strategy2'>
            <img src={MISSION} alt='mission' ></img>
        </div>

        <Link to='/strategy' className='arrow-left'>
            <MdArrowBackIos />
        </Link>
    </div>
  )
}

export default Strategy2