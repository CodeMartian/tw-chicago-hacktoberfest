import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import brand from './assets/brand.png'
import banner from './assets/banner.png'
import './Header.css'

const Header = () => {
  return (
    <header className="Header">
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand>
          <a href="/">
          <img
            className="brand"
            src={brand}
            alt="Hacktoberfest brand"
          />
          </a> at <a href="https://www.thoughtworks.com">TW Chicago</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as="span">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link as ="span">
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link as ="span">
              <Link to="/agenda">Agenda</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <img
        className="banner"
        src={banner}
        alt="Hacktoberfest banner"
      />
    </header>
  )
}

export default Header
