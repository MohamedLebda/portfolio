import React from 'react'
import {AiOutlineDownload} from "react-icons/ai"
import aboutVideo from '../../assets/about.mp4'
import CV from"../../assets/Mohamed-Lebda-CV.pdf"
import Card from "../../components/Card"
import data from "./data"
import "./about.css"

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
          <video src={aboutVideo} autoPlay loop />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
            data.map(item => (
            <Card key={item.id} className="about__card">
              <span className="about__card-icon">
                {item.icon}
              </span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>))
            }
          </div>
          <p>
          Actively learning and improving. Developing web applications using (ReactJS, NodeJS, MongoDB, JavaScript, HTML5, CSS3) 
          </p>
          <a href={CV} download className='btn primary'>Download CV <AiOutlineDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About