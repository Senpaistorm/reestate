import React from 'react';
import {Button, Dropdown, ButtonGroup, Container} from 'react-bootstrap';

class SellMenu extends React.Component{
    render(){
        return <Dropdown as={ButtonGroup}>
            <Button variant="primary">Sell</Button>
            <Dropdown.Toggle split variant="primary"  />
            <Dropdown.Menu id="buy_dropdown">
            <Dropdown.Header>Resources</Dropdown.Header>  
            <Dropdown.Item href="#/action-1">Explore your options</Dropdown.Item>
            <Dropdown.Item href="#/action-2">See your home's estimate</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Home values</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sellers guide</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Selling Options</Dropdown.Header> 
            <Dropdown.Item href="#/action-3">Sell with Zillow offers</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Find a seller's agent</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Post for Sale by Owner</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>;
    }
}

export default SellMenu;