import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import '../css/search.css';

class Search extends Component {
    render(){
        return  <div className="container">
            <h2>Your next dream home starts here.</h2>
                <Form>
                    <FormControl type="text" placeholder="Enter an address, neighborhood, city, or ZIP code" size="lg" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>        
    }
}

export default Search;