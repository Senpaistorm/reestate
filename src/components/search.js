import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import '../css/search.css';

class Search extends Component {
    constructor(props){
        super(props);

        this.state={
            searchValue: '',
        }
    }

    handleInputChange = (e) =>{
        console.log(e.target.value);
        this.setState({
            searchValue: e.target.value
        })
    }

    render(){
        return  <div className="container" id="search_container">
            <h2 id="search_slogan">Find your next dream place here.</h2>
                <Form id="search_form">
                    <FormControl onChange={this.handleInputChange} value={this.state.searchValue}
                 type="text" placeholder="Enter an address, neighborhood, city, or ZIP code." size="lg" />
                    <Button id="searchBtn" variant="outline-success"><i class="material-icons md-36">search</i></Button>
                </Form>
            </div>        
    }
}

export default Search;