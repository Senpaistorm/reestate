import React from 'react';
import {Button, Dropdown, ButtonGroup, Nav} from 'react-bootstrap';

class BuyMenu extends React.Component{
    render(){
        return <Dropdown as={ButtonGroup}>
            <Nav.Link href="#Buy">Buy</Nav.Link>
            <Dropdown.Toggle split id="nav_buy_btn" variant="success"  />
        
            <Dropdown.Menu id="buy_dropdown">
            <Dropdown.Header>Homes for Sale</Dropdown.Header>  
            <Dropdown.Item href="#/action-1">Homes for sale</Dropdown.Item>
            <Dropdown.Item href="#/action-2">New construction</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Foreclosures</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Coming soon</Dropdown.Item>
            <Dropdown.Item href="#/action-3">For sale by owner</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Recent home sales</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Open houses</Dropdown.Item>
            <Dropdown.Item href="#/action-3">All homes</Dropdown.Item>
            <Dropdown.Divider />
            </Dropdown.Menu>
        </Dropdown>;
    }
}

export default BuyMenu;