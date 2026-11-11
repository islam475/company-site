import { Link } from "react-router-dom"
import './navbar.css'

function Navbar() {
  return (
    <>
    <header className="header"> 
      <div className="container-nav">
        <Link className="headerLink" to='../pages/News.jsx'>OfoQ</Link>
        <ul>
          <li><a href="../pages/News.jsx">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>

      </div>
    </header>
    </>
  )
}

export default Navbar