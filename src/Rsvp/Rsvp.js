import React from 'react'
import './Rsvp.css'

const Rsvp = () => {
  return (
    <div className="Rsvp">
      <h1 className="header">Join <span className="highlight">ThoughtWorks Chicago</span> for our first <span className="highlight">Hacktoberfest</span>!</h1>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeKKhOWXB0_fIVZBelSKNHJ3_uRR5dW9vQHX4C0_h5QG5APUg/viewform?embedded=true"
        width="100%"
        height="1100"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="RSVP form"
      >
        Loading...
      </iframe>
    </div>
  )
}

export default Rsvp
