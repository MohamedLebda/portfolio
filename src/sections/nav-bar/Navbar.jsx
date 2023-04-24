import "./navbar.css"
import data from "./data"
import { IoIosColorPalette } from "react-icons/io";
import logo from "../../assests/ml-logo.PNG"
import {  ThemeProvider, useTheme } from "../../context/themeContext"
import { useState } from "react";
import red from '../../assests/red.png'
import blue from '../../assests/blue.png'
import yellow from '../../assests/yellow.png'
import green from '../../assests/green.png'
import purple from '../../assests/purple.png'
import white from '../../assests/white.png'
import black from '../../assests/black.png'

const Navbar = () => {
  const [showColors, setShowColors] = useState(false);
  const { setColor, setBgColor } = useTheme();
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(null);
  const [selectedBgThemeIndex, setSelectedBgThemeIndex] = useState(null);

  const handleThemeChange = (color, index) => {
    setColor(color);
    setShowColors(false);
    setSelectedThemeIndex(index);
  };
  const handleBgThemeChange = (color, index) => {
    setBgColor(color);
    setShowColors(false);
    setSelectedBgThemeIndex(index);
  };

  const toggleColors = () => {
    setShowColors(!showColors);
  };

 ;
  return (
    <ThemeProvider>
    <nav>
      <div className="container nav__container" >
        <a href="index.html" className="nav__logo">
          <img src={logo} alt="logo" />
        </a>
        <ul className="nav__menu">
          {data.map(item =><li key={item.id}><a href={item.link}>{item.title}</a></li>)}
        </ul>
        <button id="theme__icon" onClick={toggleColors}>
                <IoIosColorPalette />
              </button>
              {showColors && (
                <div className="theme__color">
                  <div className="primary__theme">
                  <img className={selectedThemeIndex === 0 ? 'active' : ''} onClick={() => handleThemeChange('#D50000', 0)} src={red} alt="red"/>
                  <img className={selectedThemeIndex === 1 ? 'active' : ''} onClick={() => handleThemeChange('#1A237E', 1)} src={blue} alt="blue"/>
                  <img  className={selectedThemeIndex === 2 ? 'active' : ''} onClick={() => handleThemeChange('#1B5E20', 2)} src={green} alt="green"/>
                  <img className={selectedThemeIndex === 3 ? 'active' : ''} onClick={() => handleThemeChange('#9E9D24', 3)}src={yellow} alt="yellow"/>
                  <img className={selectedThemeIndex === 4 ? 'active' : ''} onClick={() => handleThemeChange('hsl(var(--primary-hue), 89%, 41%)', 4)}src={purple} alt="purple"/>
                  </div>
                  <h3>background</h3>
                  <div className="bg__theme">
                  <img className={selectedBgThemeIndex === 0 ? 'active__black' : ''} onClick={() => handleBgThemeChange('white', 0)} src={white} alt="white"/>
                  <img className={selectedBgThemeIndex === 1 ? 'active' : ''} onClick={() => handleBgThemeChange('black', 1) } src={black} alt="black"/>
                  </div>
                </div>
              )}
      </div>
    </nav>
    </ThemeProvider>

  )
}
export default Navbar