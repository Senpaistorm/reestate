import React, { createRef} from 'react';

class Mapview extends React.Component {
    constructor(props) {
        super(props);

        this.googleMapRef = createRef();
    }

    googleMapDiv(){
        return document.getElementById("google-map");
    }

    createGoogleMap = () => 
        new window.google.maps.Map(this.googleMapRef.current, {
            zoom: 16,
            center: {
                lat: 43.642567,
                lng: -79.387000,
            },
            disableDefaultUI: true,
        })

    createMarker = () =>
        new window.google.maps.Marker({
          position: { lat: 43.642567, lng: -79.387054 },
          map: this.googleMap,
        })

    componentDidMount(){
        const googleScript = document.createElement('script');
        googleScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAJUSz3qyY5CAUeydGf2UeMtnyn_qwf_oA&libraries=places`;
        window.document.body.appendChild(googleScript);

        googleScript.addEventListener('load', () => {
            this.googleMap = this.createGoogleMap()
            this.marker = this.createMarker()
        })
    }
      
    render() {
        return (        
            <div id="google-map" ref={this.googleMapRef} 
                style={{width: '100%', height:'85vh', overflow:'hidden'}}>
            </div>
        );
    }
}

export default Mapview;