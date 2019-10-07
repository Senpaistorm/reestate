import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import '../css/header.css';
import BuyMenu from './buy_menu';
import RentMenu from './rent_menu';
import SellMenu from './sell_menu';


// the header component
class Header extends React.Component{ 
  constructor(props){
    super(props);
  }

  render() { 
    return <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Reestate</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <BuyMenu></BuyMenu>
        <RentMenu></RentMenu>
        <SellMenu></SellMenu>
        {/* <NavDropdown onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} 
          open={this.state.dropdownOpen} title="Dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link href="#loans">Home Loans</Nav.Link>
        
        <Nav.Link href="#list_rental">List your rental</Nav.Link>
        <Nav.Link href="#advertise">Advertise</Nav.Link>
        <Nav.Link href="#signin">Sign in</Nav.Link>
        <Nav.Link href="#join">Join</Nav.Link>
        <Nav.Link href="#help">Help</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>; 
  }
}

export default Header;