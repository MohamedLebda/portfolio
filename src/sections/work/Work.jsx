import React from 'react'
import {FaDotCircle} from 'react-icons/fa'
import "./work.css"
const Work = () => {
  return (
    <section id='work'>
      <h2 className='work__name'>Work History</h2>
      <div className="container work__container">
        <article className='work__history'>
          <div className="work__header">
            <h3>Software Engineer</h3>
            <h4>at</h4>
            <h3>Improvedtube</h3>
            <h6>(Hamburg, Germany · Remote)</h6>
            <h3>Feb 2023 - Present</h3>
          </div>
          <ul className='work__disc'>
            <li>
              <FaDotCircle className='work__icon'/>
              <p>Fix Improvedtube - extension bugs. </p>
            </li>
            <li>
              <FaDotCircle className='work__icon'/>
              <p>Develop new features.  </p>
            </li>
            <li>
              <FaDotCircle className='work__icon'/>
              <p>Review, test, and refine the extension code for better performance. </p>
            </li>
          </ul>
        </article>
        <article className='work__history'>
          <div className="work__header">
            <h3>PMO Senior Engineer</h3>
            <h4>at</h4>
            <h3>El-Araby Group</h3>
            <h6>(Banha, Al Qalyubiyah, Egypt)</h6>
            <h3>Mar 2022 - Nov 2022</h3>
          </div>
          <ul className='work__disc'>
            <li>
              <FaDotCircle className='work__icon'/>
              <p>Work on evaluating and reviewing technical projects to ensure their implementation according to the set plan. </p>
            </li>
            <li>
              <FaDotCircle className='work__icon'/>
              <p> Resolve the problems related to projects with other parties to comply with the set plan. </p>
            </li>
            <li>
              <FaDotCircle className='work__icon'/>
              <p> Review the real time cost of projects to ensure compliance with their budget. </p>
            </li>
          </ul>
        </article>
        <article className='work__history'>
          <div className="work__header">
            <h3>QC Engineer</h3>
            <h4>at</h4>
            <h3>EEI</h3>
            <h6>(6th of October, Giza, Egypt)</h6>
            <h3>Feb 2021 - Mar 2022 </h3>
          </div>
          <ul className='work__disc'>
            <li>
              <FaDotCircle className='work__icon'/>
              <p>Develop and initiate quality standards for tests, inspections and evaluations. </p>
            </li>
            <li>
              <FaDotCircle className='work__icon'/>
              <p>Direct leading and technical assistance to professionals and staff in testing a product or a service.g </p>
            </li>  
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Work