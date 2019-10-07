import React from 'react';
import {Button, Dropdown, ButtonGroup, Container} from 'react-bootstrap';

class RentMenu extends React.Component{
    render(){
        return <Dropdown as={ButtonGroup}>
            <Button >Rent</Button>
            <Dropdown.Toggle split   />
            <Dropdown.Menu id="rent_dropdown">
            <Dropdown.Header>Search for rentals</Dropdown.Header>  
            <Dropdown.Item href="#/action-1">Rental buildings</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Apartments for rent</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Houses for rent</Dropdown.Item>
            <Dropdown.Item href="#/action-3">All rental listings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>I'm a Rental Manager</Dropdown.Header> 
            <Dropdown.Item href="#/action-3">Sign in to see your listings</Dropdown.Item>
            <Dropdown.Item href="#/action-3">List a rental</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Resource center</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>I'm a Renter</Dropdown.Header> 
            <Dropdown.Item href="#/action-3">My rental payments</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Rent affordability calculator</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Renters guide</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>;
    }
}

export default RentMenu;