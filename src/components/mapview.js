import React, { PureComponent } from 'react';
import {Map, GoogleApiWrapper, mapStyles} from 'google-maps-react';
import '../css/home_browse.css';

class Mapview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style:{
                width: '50%',
                height: '100%'
            }
        }

    }

      
    render() {
        return (        
            <Map
                google={this.props.google}
                zoom={8}
                style={this.state.style}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAJUSz3qyY5CAUeydGf2UeMtnyn_qwf_oA'
  })(Mapview);