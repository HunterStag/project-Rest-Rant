import React from 'react';
import Def from '../default'; // need to go up one directory where default.jsx resides
const router = require('express').Router()

// This function builds the html 
function index (data) {
    // console.log("In views index") // using this to debug
    
    let placesFormatted = data.places.map((place) => {
        return (
        <div>
            <h2>{place.name}</h2>
            <img src={place.pic} alt={place.name}/>
        </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}
      
export default index;


   