import './about.css'
function About() {
  return (
    <>
    <section className="about">
      <h1>Who are we ?</h1>
      <div className='card'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim delectus commodi porro, ab ipsum debitis voluptatem accusantium explicabo, ad voluptates nostrum sapiente perspiciatis vero atque magni quae. Fuga, odio.</p>
      </div>

      <div className="lower-about">
        <div className="card">
          <h1>Our Vision</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quo!</p>
        </div>

        <div className="card">
          <h1>Our mission</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quo!</p>
        </div>

        <div className="card">
          <h1>Our values</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quo!</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About