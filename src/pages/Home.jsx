import Button from '../component/Button'
import './home.css'
import { FaLaptopCode } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FcSmartphoneTablet } from "react-icons/fc";
import { Link } from "react-router-dom";

function Home() {
  return (




    <>
    <section className="hero">
      <h1>Welcome to Company</h1>
      <p>We build great digital products.</p>
      <Link to="/contact"> <Button className='btn-home' text='Start your project' /> </Link>
    </section>



    <div className="container-home">
      <section className="hero">
        <h1>We build technological solutions that grow your business</h1>
        <p>At Afaq, we design and develop high-quality websites and applications to help your company reach its customers easily</p>

        

      </section>

      <section className='home'>
        <div className='upper'>
          <div>
            <FaLaptopCode size={50} />
            <h4>Website development </h4>
            <p>Wibsite that are fast and responsive across all screns</p>
          </div>
          <div>
            <FcSmartphoneTablet size={50} />
            <h4>Moblie applications </h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
          <div>
            <IoColorPaletteOutline size={50} />
            <h4>Identity design </h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>

        <div className='lower'>
          <div>
            <h4>120+</h4>
            <p>implemented project</p>
          </div>

          <div>
            <h4>60+</h4>
            <p>Happy customer </p>
          </div>

          <div>
            <h4>8</h4>
            <p> Years of experience</p>
          </div>
        </div>
      </section>
    </div>





    </>
  )
}

export default Home




