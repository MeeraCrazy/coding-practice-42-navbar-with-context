// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notfoundBgClassName = isDarkTheme
        ? 'notfound-bg-dark'
        : 'notfound-bg-light'

      const notfoundTextHeading = isDarkTheme
        ? 'not-found-light-text-heading'
        : 'not-found-dark-text-heading'

      const notfoundTextContent = isDarkTheme
        ? 'not-found-light-text-content'
        : 'not-found-dark-text-content'

      return (
        <div className={`notfound-app-container ${notfoundBgClassName}`}>
          <Navbar />
          <div className="notfound-responsive-container">
            <div className="not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-img"
              />
              <h1 className={`not-found-heading ${notfoundTextHeading}`}>
                Lost Your Way?
              </h1>
              <p className={`not-found-content ${notfoundTextContent}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
