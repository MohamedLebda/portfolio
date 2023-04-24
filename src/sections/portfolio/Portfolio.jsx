import data from './data'
import "./portfolio.css"
import Card from "../../components/Card"


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className=' portfolio__name'>Portfolio</h2>
      <div className='portfolio__container container'>
        {data.map( item =>
          <Card className='portfolio__item' key={item.id}>
            <div className="portfolio__item-img">
              <img src={item.image} alt="portfolio image" />
            </div>
            <div className="portfolio__content">
              <h4>{item.title}</h4>
              <p>{item.about}</p>
              {item.demo? <div className="portfolio__item-cta">
              <a href={item.github} className='btn sm primary' target='_blank'>GitHub</a>
              <a href={item.demo} className='btn sm light' target='_blank'>Live demo</a>
              </div> 
              :
              <div className="portfolio__item-cta">
               <a href={item.github} className='btn primary ' target='_blank'>GitHub</a>
              </div>
              }
            </div>
          </Card> 
        )}
      </div>
      <div className="port">
        <a href="https://github.com/MohamedLebda?tab=repositories" className='btn primary ' target='_blank'>See More</a>
      </div>
    </section>
  )
}

export default Portfolio