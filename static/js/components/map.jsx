import React from "react";
import mapboxgl from 'mapbox-gl';

// use default public token
mapboxgl.accessToken="pk.eyJ1IjoiamVubmdlb3JnZSIsImEiOiJjamkwZmdhcXgxN2tnM3BwZHV3N3ZydnJwIn0.eim2pGkoIAQUb88O2dxXJA";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 5,
      lng: 34,
      zoom: 1.5
    };
    this.mapContainer = React.createRef();

  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { newLng, newLat } = map.getCenter();

      this.setState({
        lng: newLng.toFixed(4),
        lat: newLat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    const {lat, lng, zoom} = this.state;
    return(
      <div style={{height: '500px', width: '500px'}}>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={this.mapContainer} className="absolute top right left bottom" />
      </div>
    );
  }
}
