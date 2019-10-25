import React from 'react';
import Mapview from './Mapview';
import Listview from './Listview';
import HomeSearch from './HomeSearch';

class HomesMain extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="homes_container">
                <HomeSearch />
                <div className="homes_main">
                    <Mapview />
                    <Listview/>
                </div>
            </div>
        )
    }
}

export default HomesMain