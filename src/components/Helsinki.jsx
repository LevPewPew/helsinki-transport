import React, { useRef } from 'react';
import Leaflet from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { v1 as uuidv1 } from 'uuid';
import styled from 'styled-components';
import { COLORS } from 'styles';
import 'leaflet/dist/leaflet.css';

const Root = styled(Map)`
  height: 100%;
  width: 100%;

  .remove-marker-btn {
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      color: ${COLORS.POP}
    }
  }
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
  constructor(props) {
    super(props);
  
    this.state = {
      center: [60.192059, 24.945831],
      userMarkers: [],
      zoom: 13,
    };

    this.mapRef = React.createRef();
  }

  addUserMarker = (event) => {
    const marker = {
      __typename: "Marker",
      id: uuidv1(),
      lat: event.latlng.lat,
      lng: event.latlng.lng
    }
    const newUserMarkers = this.state.userMarkers;
    newUserMarkers.push(marker);

    this.setState({ userMarkers: newUserMarkers });
  };

  removeUserMarker = (id) => {
    const newUserMarkers = this.state.userMarkers
      .filter((obj) => obj.id !== id);

    this.setState({ userMarkers: newUserMarkers });
    // .closePopup() closes all open Popups. this step is required as for some
    // reason when a marker is removed via the span "button" in the pop,
    // in some conditions leaflet get's confused and opens up a remaining
    // Markers Popup.
    this.mapRef.current.leafletElement.closePopup();
  };

  componentDidUpdate(nextProps) {
    if (nextProps.routeStops[0] !== this.props.routeStops[0]) {
      this.setState({ center: this.props.routeStops[0] });
      this.setState({ zoom: 15 });
    }
  }

  render() {
    return (
      <Root
        className={this.props.className}
        center={this.state.center}
        onClick={this.addUserMarker}
        ref={this.mapRef}
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
            position={[marker.lat, marker.lng]}
          >
            <Popup >
              <span className="remove-marker-btn" onClick={() => this.removeUserMarker(marker.id)}>Remove pin</span>
            </Popup>
          </Marker>
        ))}
        {this.props.routeStops.map((stop, i) => (
          <Marker
            icon={bluePushpinIcon}
            key={`routeMarker${i}`}
            position={[stop.lat, stop.lng]}
          />
        ))}
        {this.props.children}
      </Root>
    );
  }
}

export default Helsinki;
