import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';

const Root = styled(Map)`
  height: 400px;
  width: 100%;
`;

// must be a Class component, react-leaflet refuses to work as a functional
// component. i don't know why.
class Helsinki extends React.Component {
  state = {
    center: [51.505, -0.091],
    zoom: 13,
  };

  render() {
    return (
      <Root center={this.state.center} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={this.state.center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Root>
    );
  }
}

export default Helsinki;
