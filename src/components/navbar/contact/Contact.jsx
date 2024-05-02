import React, { useState } from 'react'
import './contact.css'
import { IoMdMail } from "react-icons/io";
import { ImCross } from "react-icons/im";
// EMAILJS 
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [contact, setContact] = useState(false)

  function showContact() {
    setContact(show => !show)
  }

  // service_05kt7ok
  // template_hn0zttk
  // vpsaU4skkrEhuZEZy
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_05kt7ok', 'template_hn0zttk', form.current, {
        publicKey: 'vpsaU4skkrEhuZEZy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
        <div className='contact-float' onClick={showContact}>
            <span>Contact us</span>
            <IoMdMail />
        </div>
        {contact ? 
        <div className='contact-popup'>
            <h1>Contact us</h1>
            <div className='exit' onClick={showContact}><ImCross /></div>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='email' required placeholder='email' />
                <input type='text' name='name' required placeholder='name' />
                <textarea name='message' required placeholder='Write your message here'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
        :
        ''
        }
    </>
  )
}


export default Contact