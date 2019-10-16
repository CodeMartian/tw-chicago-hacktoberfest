import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const AgendaCard = (props) => {
    return (
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={props.eventKey}>
              {props.header}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={props.eventKey}>
            <Card.Body>
              <p>Time: {props.time}</p>
              <p>Duration: {props.duration}</p>
              <p>Details: {props.details}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    );
}

export default AgendaCard;