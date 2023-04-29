import { useState, useEffect } from "react";
import {  ThemeProvider, useTheme } from "../../context/themeContext"
import "./navbar.css"
import data from "./data"
import { IoIosColorPalette } from "react-icons/io";
import {CgDarkMode} from "react-icons/cg"
import logo from "../../assests/ml-logo.PNG"
import red from '../../assests/red.png'
import blue from '../../assests/blue.png'
import yellow from '../../assests/yellow.png'
import green from '../../assests/green.png'
import purple from '../../assests/purple.png'

const Navbar = () => {
  const [showColors, setShowColors] = useState(false);
  const { setColor, setBgColor } = useTheme();
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  
  useEffect(() => {
    const savedCheckedValue = localStorage.getItem('isChecked');
    if (savedCheckedValue) {
      setIsChecked(JSON.parse(savedCheckedValue));
    }
  }, []);

  const handleThemeChange = (color, index) => {
    setColor(color);
    setShowColors(false);
    setSelectedThemeIndex(index);
  };
  const handleBgThemeChange = (color) => {
    setBgColor(color);
    setShowColors(false);
  };

  const toggleColors = () => {
    setShowColors(!showColors);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    localStorage.setItem('isChecked', JSON.stringify(event.target.checked));
  };


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
                  <div className="dark-mode">
                  <CgDarkMode className="icon"/>
                  <label className="switch">
                    <input type="checkbox" onChange={(e) => {
                      handleCheckboxChange(e)
                      handleBgThemeChange(e.target.checked)
                      }}
                       checked={isChecked}/>
                    <span className="slider"></span>
                  </label>
                  </div>
                </div>
              )}
      </div>
    </nav>
    </ThemeProvider>

  )
}
export default Navbar