import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/jesug23/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Jesug" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://twitter.com/OmoniyiJesugbe1" target='_blank' rel="noreferrer"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocial