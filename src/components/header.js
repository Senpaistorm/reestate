import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';

// the header component
const Header = () => {
    return  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Reestate</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#buy">Buy</Nav.Link>
        <Nav.Link href="#sell">Sell</Nav.Link>
        <Nav.Link href="#rent">Rent</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#loans">Home Loans</Nav.Link>
        <Nav.Link href="#list_rental">List your rental</Nav.Link>
        <Nav.Link href="#advertise">Advertise</Nav.Link>
        <Nav.Link href="#signin">Sign in</Nav.Link>
        <Nav.Link href="#join">Join</Nav.Link>
        <Nav.Link href="#join">Help</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>; 
}

export default Header;