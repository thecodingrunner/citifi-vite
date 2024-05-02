import React from 'react'
import './who.css'
import PROFILE from '../../assets/brendan-profile.webp'

const Who = () => {
  return (
    <div className='profile'>
      <div className='profile__text'>
        <h1>Brendan Moffett</h1>
        <h2>Managing Director</h2>
        <p>Brendan is a highly experienced marketing and communications professional and a Fellow of the Chartered Institute of Marketing and the Institute of Place Management. Brendan works with a network of specialists to provide tailored solutions for Citifi clients. </p>
      </div>
      <div className='profile__image'>
        <img src={PROFILE} alt='brendan profile' />
      </div>
    </div>
  )
}

export default Who