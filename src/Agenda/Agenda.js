import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Agenda.css'

const Agenda = () => {
  return (
    <div className="Agenda">
      <h1 className="header">
        <span className="highlight">
          Agenda
        </span>
      </h1>
      <p className="message">
        Below is an outline of the evening to get you excited! Some things may change a bit, and we're still getting a few of the details in order, so check back for updated information!
      </p>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Introduction to Hacktoberfest
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Details coming soon...</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Open Source Lightning Talk
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Details coming soon...</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              First Pull Request Workshop
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Details coming soon...</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Hack time!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Details coming soon...</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Experience Sharing & Feedback
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>Details coming soon...</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              Pub Night
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>Details coming soon...</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default Agenda
