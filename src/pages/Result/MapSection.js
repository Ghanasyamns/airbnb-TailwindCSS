import {useState,useMemo,useContext } from 'react';
import getCenter from 'geolib/es/getCenter'
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css'
import { StarIcon } from "@heroicons/react/solid";
import { Link } from 'react-router-dom';
import latLong from './latLong.json';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import { activeContext } from './Result';
const config = require("../../config");



function MapSection(props) {  
  const [mapCard, setMapCard] = useState({})
const context = useContext(activeContext)

const latAndLong=latLong.map((result)=>({latitude:result.lat,longitude:result.long}))

let center=getCenter(latAndLong)



const [viewport, setViewport] = useState({
  
  height:'100vh',
  width:'100%',
  latitude: center.latitude,
  longitude: center.longitude,
  zoom: 8
});

const markers = useMemo(() => props.data?.map(
  (city,i) => (
    <div key={i}>
    <Marker onClick={()=>setMapCard({city:city,id:i,showPopup:true})} longitude={latLong[i].long} latitude={latLong[i].lat} >
      <div  className={`flex justify-center items-center w-14 h-8 cursor-pointer
       rounded-full ${context.active===i?'bg-gray-700 text-white':'bg-white'} shadow-sm animate-bounce`}>
        <h1 className=" font-bold text-lg">${city.pricePerNight}</h1></div>
    </Marker>
   
    </div>
    )
  ), [props.data,context.active]);
return (
  <ReactMapGL  mapStyle="mapbox://styles/syam98/cktbgnsec0pn417rjvpwpejso" mapboxApiAccessToken={config.mapToken}
    {...viewport}
    onViewportChange={nextViewport => setViewport(nextViewport)}
  >{markers}
  {mapCard.showPopup&&(
    <Popup  
    latitude={latLong[mapCard.id].lat}
    longitude={latLong[mapCard.id].long}
    offsetLeft={27}
    closeButton={false}
    closeOnClick={true}
    onClose={() =>setMapCard({})}
    anchor="bottom" >
    <Link to={`/venue/${mapCard.city.id}`} >

    <div className="relative w-[270px] h-[300px]  ">
      <div>
      <img src={mapCard.city.imageUrl} alt="card-img" className="  w-full h-[180px] "/>
    </div>
     
      <div className="flex mt-1 space-x-1 text-base">
              <StarIcon className="w-5 h-5 text-red-400  " />
              <h1 className=" font-semibold">
                {mapCard.city.rating} </h1>
                <span className="text-gray-500 ml-1">(5)</span>
             
            </div>
            <div className="text-lg mt-2">
              <h1 className=" ">
               Entire cottage.{mapCard.city.location.charAt(0).toUpperCase()+mapCard.city.location.slice(1).toLowerCase()}
                </h1>
              <h1 className="truncate">{mapCard.city.title.charAt(0).toUpperCase()+mapCard.city.title.slice(1).toLowerCase()}</h1>
            </div>
            <div className="text-xl flex mt-2">
              <h1 className="font-bold">${mapCard.city.pricePerNight} </h1>
              <span>/ night</span>
            </div>
    </div>
    </Link>
  </Popup>
  
  )}
  </ReactMapGL>
);

}

export default MapSection










