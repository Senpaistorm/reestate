import React from 'react'
import {Button} from 'react-bootstrap'
import '../css/homes_main.css'

class HomeSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchValue: "",
            price: 0,
            beds: 0,
            homeType: null,
            optional: []
        }
    }

    handleInputChange = (e) =>{
        this.setState({searchValue: e.target.value});
    }

    render() {
        return (
            <div id="homes_search_container" className="container">
                <div className="row">
                    <input id="homes_search_bar" onChange={this.handleInputChange} value={this.state.searchValue}
                    type="text" placeholder="" size="lg" />
                    <button className="btn btn-primary" id="searchBtn"><i className="material-icons md-36">search</i></button>
                    <button className="btn btn-primary">For sale</button>
                    <button className="btn btn-primary">Price</button>
                    <button className="btn btn-primary">Beds</button>
                    <button className="btn btn-primary">Home Type</button>
                    <button className="btn btn-primary">More</button>
                    <button className="btn btn-primary">Save Search</button>
                </div>
            </div>
        )
    }
}

export default HomeSearch