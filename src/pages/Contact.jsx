import Button from '../component/Button'
import './contact.css'
import { FcPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FcClock } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <>
    <section className="contact">
      <h1>Contact us</h1>
      <div className='lower-cards'>
        <div className="rt">
          <input type="text" placeholder='name'/>
          <input type="email" placeholder='email'/>
          <input className='massage' type="text" placeholder='your massage'/> 
          <Button  text='send' />
        </div>
        <div className="lt">
          <div className='card'>
            <h4>contact information</h4>
            <p> <MdEmail /> Cairo, Egypt</p>
            <p> <FaLocationDot /> info@ofoq.example</p>
            <p> <FcPhone /> 010000000000</p>
            <p> <FcClock  /> Sunday to Thursday, 9 AM- 5 PM</p>
           
          </div>
        </div>
      </div>
    </section>    
    </>
  )
}

export default Contact