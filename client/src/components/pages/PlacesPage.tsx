import '../../assets/css/PlacePage.css'
// import { useState } from 'react';


const PlacePage = () => {

  return (
    <section className='section'>
        <div className="map_inputs">
            <input
                id="pac-input"
                className="controls"
                type="text"
                placeholder="Enter a location"
            />
        </div>
        <div id="map"></div>
        <div id="infowindow-content">
            <span id="place-name" className="title"></span><br />
            <strong>Place ID</strong>: <span id="place-id"></span><br />
            <span id="place-address"></span>
        </div>
    </section>
  )
}

export default PlacePage;
