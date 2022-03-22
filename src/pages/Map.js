import React from 'react';
import '../index.css';
import MapComponent from '../components/MapComponent';

const Map = () => {

    return (
        <div className='map'>
            <h1>MAP</h1>
            <MapComponent className='map-component'/>
        </div>
    )
}

export default Map;