import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="About">
      <h1 className="header">
        <span className="highlight">
          About
        </span>
      </h1>
      <div className="text">
        <p className="message">
          Welcome to ThoughtWorks Chicago's first annual office Hacktoberfest hackathon! Any ThoughtWorker in Chicago — whether your home office is Chicago or you're simply visiting the city, etc. — is welcome to join us for an evening food, drinks, and some fun coding comradery.
        </p>
        <p><span className="bold">Date:</span><br />Friday, October 25, 2019</p>
        <p><span className="bold">Time:</span><br />5:00 - 8:00 PM</p>
        <p><span className="bold">Location:</span></p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5940.828151082608!2d-87.63737032293899!3d41.883951154504366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca629acfcbf%3A0x5f2790f235b59a1a!2sThoughtWorks%2C%20Inc.!5e0!3m2!1sen!2sus!4v1570308413616!5m2!1sen!2sus"
          width="600"
          height="450"
          frameBorder="0"
          style={{border: '0'}}
          allowFullScreen=""
          title="ThoughtWorks Chicago location"
        ></iframe>
      </div>
    </div>
  )
}

export default About
