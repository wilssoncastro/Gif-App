import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>WILSON CASTRO</a>
    
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/wilssoncastro/" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/wilssoncastro" target="_blank"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Wilson Castro. All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer