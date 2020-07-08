import React from 'react';
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';

const Root = styled(Map)`
  height: 100%;
  width: 100%;
`;

const marker = new Leaflet.Icon({
  iconUrl: 'https://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png' ,
  iconSize: [64, 64],
  iconAnchor: [20, 62]
});

// must be a Class component, react-leaflet refuses to work as a functional
// component. i don't know why.
class Helsinki extends React.Component {
  state = {
    center: [60.192059, 24.945831],
    markers: [],
    zoom: 13,
  };

  setMarker = (event) => {
    this.setState({ markers: [event.latlng]} );
  };

  render() {
    return (
      <Root className={this.props.className}
        center={this.state.center}
        onClick={this.setMarker}
        zoom={this.state.zoom}
      >
        <TileLayer
          attribution={'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}
          url={'https://cdn.digitransit.fi/map/v1/hsl-map-256/{z}/{x}/{y}.png'}
        />
        {this.state.markers.map((position, i) => (
          <Marker
            icon={marker}
            key={`marker-${i}`}
            position={position}>
            <Popup>
              <span>Popup!!!</span>
            </Popup>
          </Marker>
        ))}
        {this.props.children}
      </Root>
    );
  }
}

export default Helsinki;
