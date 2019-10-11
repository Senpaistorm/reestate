import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import '../css/search.css';

class Search extends Component {
    render(){
        return  <div className="container" id="search_container">
            <h2 id="search_slogan">Find your next dream place here.</h2>
                <Form id="search_form">
                    <FormControl inline type="text" placeholder="Enter an address, neighborhood, city, or ZIP code." size="lg" />
                    <Button inline variant="outline-success">Search</Button>
                </Form>
            </div>        
    }
}

export default Search;