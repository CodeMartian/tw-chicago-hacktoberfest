import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import brand from './assets/brand.png'
import './Header.css'

const Header = () => {
  return (
    <Navbar className="Header" bg="light" variant="light" expand="lg">
      <Navbar.Brand>
        <img
          src={brand}
          alt="Hacktoberfest at ThoughtWorks Chicago"
          width="200"
        /> at <a className="link" href="https://www.thoughtworks.com">TW Chicago</a>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Agenda</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
