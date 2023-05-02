import "./header.css"
import data from './data'
import HeaderImg from '../../assets/MohamedLebda.jpg'
const Header = () => {
  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImg} alt="header" />
        </div>
        <h3>Mohamed Lebda</h3>
        <p>Building a responsive, and speedy website for your business is just a click away!</p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">Let's Talk</a>
          <a href="#portfolio" className="btn light">My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </section>
  )
}

export default Header