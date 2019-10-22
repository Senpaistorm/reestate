import React from 'react';
import Mapview from './mapview';
import Listview from './listview';
import Homes_search from './homes_search';

class Homes_main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="homes_container">
                <Homes_search />
                <div className="homes_main">
                    <Mapview />
                    <Listview/>
                </div>
            </div>
        )
    }
}

export default Homes_main