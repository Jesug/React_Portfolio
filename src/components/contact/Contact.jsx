import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { SiLinkedin } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8lnp16r', 'template_dbbdedk', form.current, 'lpQxuF1hhr59HP2kZ')
      
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            < MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>jesugeeh@outlook.com</h5>
            <a href="mailto:jesugeeh@outlook.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact_option">
            < SiLinkedin className='contact_option-icon' />
            <h4>Linkedin</h4>
            <h5>Jesugbemisola Olufunmike Ilori</h5>
            <a href="https://www.linkedin.com/in/jesug23/" target='_blank'>Send a Message</a>
          </article>

          <article className="contact_option">
            < BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+2347025765498</h5>
            <a href="https://wa.me/2347025765498" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact