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
  iconUrl: 'https://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png',
  iconSize: [64, 64],
  iconAnchor: [20, 62]
});

const bluePushpinIcon = new Leaflet.Icon({
  iconUrl: 'https://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png',
  iconSize: [64, 64],
  iconAnchor: [20, 62]
});

// NOTE: must be a Class component,
// react-leaflet refuses to work as a functional component. i don't know why.
//
// NOTE: for latitude and longitude,
// leaflet map package uses "lat","lng",
// but HSL graphql schema uses "lat", "lon"
class Helsinki extends React.Component {
  state = {
    center: [60.192059, 24.945831],
    userMarkers: [],
    zoom: 13,
  };

  addUserMarker = (event) => {
    const marker = {
      __typename: "Marker",
      lat: event.latlng.lat,
      lng: event.latlng.lng
    }
    const newUserMarkers = this.state.userMarkers;
    newUserMarkers.push(marker);

    this.setState({ userMarkers: newUserMarkers });
  };

  componentDidUpdate(nextProps) {
    if (nextProps.routeStops[0] !== this.props.routeStops[0]) {
      this.setState({ center: this.props.routeStops[0] });
      this.setState({ zoom: 15 });
    }
  }

  render() {
    return (
      <Root className={this.props.className}
        center={this.state.center}
        onClick={this.addUserMarker}
        zoom={this.state.zoom}
        zoomControl={false}
      >
        <TileLayer
          attribution={'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}
          url={'https://cdn.digitransit.fi/map/v1/hsl-map-256/{z}/{x}/{y}.png'}
        />
        {this.state.userMarkers.map((marker, i) => (
          <Marker
            icon={redPushpinIcon}
            key={`userMarker${i}`}
            position={[marker.lat, marker.lng]}>
            <Popup>
              <span>Popup!!! move this so it starts at better spot on the pin graphic</span>
            </Popup>
          </Marker>
        ))}
        {this.props.routeStops.map((stop, i) => (
          <Marker
            icon={bluePushpinIcon}
            key={`routeMarker${i}`}
            position={[stop.lat, stop.lng]}
          >
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
