import React from 'react';
import Mapview from './Mapview';
import Listview from './Listview';
import HomeSearch from './HomeSearch';

class HomesMain extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div className="search-page-container">
            <HomeSearch />
            <div id="homes_main_container" className="container">
                    <div id="listview" >
                        <Listview props={this.data}/>
                    </div>
                    <div id="mapview" >
                        <Mapview props={this.data}/>
                    </div>
                    

            </div>
            </div>
        )
    }
}

export default HomesMain