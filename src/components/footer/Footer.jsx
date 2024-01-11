import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://web.facebook.com/jesugbemi.omoniyi">< FaFacebook /></a>
        <a href="https://www.instagram.com/ifeoluwah23/">< BsInstagram /></a>
        <a href="https://twitter.com/OmoniyiJesugbe1">< BsTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Jesugbemisola. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer