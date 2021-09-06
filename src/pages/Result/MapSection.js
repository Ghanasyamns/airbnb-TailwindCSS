
import { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoic3lhbTk4IiwiYSI6ImNrdDg3anExYTB6NzEyd245cmMycjZ0bDUifQ.PVpMWZ1hUxSzDQG0PuLBUg';


function MapSection() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(77.5946);
  const [lat, setLat] = useState(12.9716);
  const [zoom, setZoom] = useState(9);
useEffect(() => {
  // if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
  });
});
return (
  <div>
    <div ref={mapContainer} className="map-container" />
  </div>
);
}

export default MapSection








// mapboxgl.accessToken = 'pk.eyJ1Ijoic3lhbTk4IiwiYSI6ImNrdDg3anExYTB6NzEyd245cmMycjZ0bDUifQ.PVpMWZ1hUxSzDQG0PuLBUg';
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/syam98/ckt883d8e1rlv19v1kbzkv2x4', // style URL
//     center: [12.9716, 77.5946], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });

