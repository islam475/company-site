import Navbar from "./component/Navbar"
import Home from "./pages/Home"
import News from './pages/News'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from "./component/Footer"


function App() {
  return (
    <>
    <Navbar/>
    <Home />
    <News />
    <About />
    <Contact />
    <Footer />
    </>
  )
}

export default App