// import React
import React, { Component } from 'react';

// import Google Maps
import GoogleMapReact from 'google-map-react';

// import Icon for map-marker
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

// defing the location and text for the map
const Location = ({ text }) => (
    <div>
        <Icon icon={locationIcon} className="pin-icon" />
        <h3 className="pin-text">{text}</h3>
    </div>
)

// Displaying information about the location and displaying the map
//      Map is showing information based on the latitude and longitude 
//      with a pin location and name of place
class Map extends Component {
    static defaultProps = {
        center: {
            lat: 40.795253,
            lng: -89.209284
        },
        zoom: 15
    };
    render() {
        return (
            <div>
                <div>
                    <h2>Where I am Located</h2>
                    <h4>Address: <br />203 N 3rd St, Roanoke, Ill. 61561</h4>
                </div>
                <div className="map">
                    <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.API_KEY}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <Location
                            lat={40.795253}
                            lng={-89.209284}
                            text="JB Designs"
                        />
                    </GoogleMapReact>
                    </div>
                </div>
                
            </div>
        )
    }
}

// export Map
export default Map;