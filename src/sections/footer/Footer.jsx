import React from 'react'
import "./footer.css"
import data from "../header/data"  

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> <div className="logo">
            <h3>ML</h3>
          </div></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
         {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
      </div>
      <div className="footer__copyright">
        <small>&copy; ML, All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer