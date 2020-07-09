import React from 'react';
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';

const Root = styled(Map)`
  height: 100%;
  width: 100%;
`;

const redPushpinIcon = new Leaflet.Icon({
  iconUrl: 'https://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png' ,
  iconSize: [64, 64],
  iconAnchor: [20, 62]
});

// must be a Class component, react-leaflet refuses to work as a functional
// component. i don't know why.
class Helsinki extends React.Component {
  // the Map component from react-leaflet seems to constantly unmount and
  // remount, losing it's state... so as a work around, we get the state from
  // cached values in order for them to be persistant.
  state = {
    center: [60.192059, 24.945831],
    userMarkers: [],
    routeMarkers: this.props.routeMarkers,
    zoom: 13,
  };

  setUserMarker = (event) => {
    const marker = {
      __typename: "Marker",
      lat: event.latlng.lat,
      lng: event.latlng.lng,
      icon: redPushpinIcon
    }
    const newUserMarkers = this.state.userMarkers;
    newUserMarkers.push(marker);

    this.setState({ userMarkers: newUserMarkers });
  };

  render() {
    return (
      <Root className={this.props.className}
        center={this.state.center}
        onClick={this.setUserMarker}
        zoom={this.state.zoom}
      >
        <TileLayer
          attribution={'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}
          url={'https://cdn.digitransit.fi/map/v1/hsl-map-256/{z}/{x}/{y}.png'}
        />
        {this.state.userMarkers.map((marker, i) => (
          <Marker
            icon={marker.icon}
            key={`marker-${i}`}
            position={[marker.lat, marker.lng]}>
            <Popup>
              <span>Popup!!! move this so it starts at better spot on the pin graphic</span>
            </Popup>
          </Marker>
        ))}
        {this.props.children}
      </Root>
    );
  }
}

export default Helsinki;
