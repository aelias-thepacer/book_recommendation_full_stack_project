import { useEffect } from 'react';
import '../../assets/css/PlacePage.css';
//import { Loader } from "@googlemaps/js-api-loader"
// import { useState } from 'react';
import { Map, useMap} from '@vis.gl/react-google-maps';
//console.log("Env: ", import.meta.env.VITE_GOOGLE_MAPS_API_KEY)
/*
loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    });
    });
    */
   const PlacePage = () => {
    const map = useMap();
    useEffect(() => {
      if (!map) return;
      // here you can interact with the imperative maps API
    }, [map]);
     /*
     const loader = new Loader({
       apiKey: 'AIzaSyAuw3y8Feor-ZLpY2zyY26jxhR_arjqXtAY',
       version: "weekly",
       // ...additionalOptions,
      });
      let map;
      // initMap is now async
      async function initMap() {
          // Request libraries when needed, not in the script tag.
          const { Map } = await google.maps.importLibrary("maps");
          // Short namespaces can be used.
          map = new Map(document.getElementById("map"), {
              center: { lat: -34.397, lng: 150.644 },
              zoom: 8,
          });
      }
      console.log("Loader: ", loader)
      useEffect(() => {
        initMap();
        */
        // Initialize the map
        /*
        loader
        .importLibrary('maps')
         .then(({Map}) => {
        console.log("response: ", Map);
        new Map(document.getElementById("map") /*, mapOptions );
      })
      .catch((err) => {
        console.log("Error: ", err)
        // do something
      });
    */
 // }, []);
  return (
    <section className='section'>
      <h2>Map</h2>
        <div className="map_inputs">
            <input
                id="pac-input"
                className="controls"
                type="text"
                placeholder="Enter a location"
            />
        </div>
        <div id="map">
        <Map
            style={{width: '50vw', height: '50vh'}}
            defaultCenter={{lat: 22.54992, lng: 0}}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            />
        </div>
        <div id="infowindow-content">
            <span id="place-name" className="title"></span><br />
            <strong>Place ID</strong>: <span id="place-id"></span><br />
            <span id="place-address"></span>
        </div>
    </section>
  )
}
export default PlacePage;






