import React from 'react';
import Mapview from './mapview';

class Homes_main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="homes_main">
                <div><Mapview /></div>
                
                <p>list view</p>
            </div>
        )
    }
}

export default Homes_main