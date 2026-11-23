import { Link ,NavLink } from "react-router-dom"
import './navbar.css'

function Navbar() {
  return (
    <>
    <header className="header"> 
      <div className="container-nav">
        <Link className="headerLink" to='../pages/News.jsx'>OfoQ</Link>
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/news">News</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact us</NavLink></li>
        </ul>

      </div>
    </header>
    </>
  )
}

export default Navbar