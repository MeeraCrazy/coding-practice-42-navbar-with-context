// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutbgClassName = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTextClassName = isDarkTheme
        ? 'about-light-text'
        : 'about-dark-text'

      return (
        <div className={`about-app-container ${aboutbgClassName}`}>
          <Navbar />
          <div className="about-container">
            <img src={aboutImageUrl} className="about-image" alt="about" />
            <h1 className={`about-heading ${aboutTextClassName}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
