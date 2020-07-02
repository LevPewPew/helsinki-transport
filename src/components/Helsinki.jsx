import React from 'react';
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';

const Root = styled(Map)`
  height: 500px;
  width: 500px;
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
    zoom: 13,
  };

  render() {
    return (
      <Root center={this.state.center} zoom={this.state.zoom}>
        <TileLayer
          attribution={'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}
          url={'https://cdn.digitransit.fi/map/v1/hsl-map-256/{z}/{x}/{y}.png'}
        />
        <Marker icon={marker} position={this.state.center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Root>
    );
  }
}

export default Helsinki;
