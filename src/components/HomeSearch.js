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

    render() {
        return (
            <div id="homes_search_container" className="flex-container">
                <input id="homes_search_bar" onChange={this.handleInputChange} value={this.state.searchValue}
                 type="text" placeholder="" size="lg" />
                <Button id="searchBtn" variant="outline-success"><i className="material-icons md-36">search</i></Button>
                <button>For sale</button>
                <button>Price</button>
                <button>Beds</button>
                <button>Home Type</button>
                <button>More</button>
                <button>Save Search</button>
            </div>
            
        )
    }
}

export default HomeSearch