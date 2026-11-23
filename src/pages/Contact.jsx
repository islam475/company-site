import './contact.css'
import { FcPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FcClock } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";


function Contact() {
  
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => { e.preventDefault(); console.log(form); };

  return (
    <>
      <section className="contact">
        <h1>Contact us</h1>
        <div className="lower-cards">
          <div>
            <form onSubmit={onSubmit} className="rt">
              <input
                name="name"
                placeholder="Name"
                onChange={onChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={onChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                onChange={onChange}
                required
              />
              <button className="btn">Send</button>
            </form>
          </div>
          <div className="lt">
            <div className="card">
              <h4>contact information</h4>
              <p>
                {" "}
                <MdEmail /> Cairo, Egypt
              </p>
              <p>
                {" "}
                <FaLocationDot /> info@ofoq.example
              </p>
              <p>
                {" "}
                <FcPhone /> 010000000000
              </p>
              <p>
                {" "}
                <FcClock /> Sunday to Thursday, 9 AM- 5 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact






