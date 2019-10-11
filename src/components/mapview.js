import React, { PureComponent } from 'react';
import {Map, GoogleApiWrapper, mapStyles} from 'google-maps-react';

class Mapview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

      
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAJUSz3qyY5CAUeydGf2UeMtnyn_qwf_oA'
  })(Mapview);