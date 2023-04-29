import React from 'react'
import {BsPatchCheckFill} from "react-icons/bs"
import "./skills.css"
const Skills = () => {
  return (
    <section id='skills'>
      <h2 className='skills__header'>Skills</h2>
      <div className="container skills__container">
         <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
            <h4>React.Js</h4>
            </div>
            </article>
           
            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            </div>
            </article>
            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>              
            <h4>Tailwind</h4>
            </div>
            </article>
            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
              
            <h4>CSS</h4>
              </div>
            </article>
            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
              
            <h4>HTML</h4>
            </div>
            </article>
          </div>
         </div>
         <div className="skills__backend">
         <h3>Backend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
              
            <h4>Node.JS</h4>
              </div>
            </article>
            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
              
            <h4>MongoDB</h4>
              </div>
            </article>
            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
            <h4>MySQL</h4>
            </div>
            </article>
          </div>
         </div>
      </div>
    </section>
  )
}

export default Skills