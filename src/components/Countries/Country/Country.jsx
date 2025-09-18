import React, { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    // console.log()
    const [visited, setVisited] = useState(false);


    const handleVIsited =()=>{
        // console.log("btn clicked")
        // Basic system one way for toggolling
        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }
        //Second system Another way using condition
    //    setVisited(visited ? false : true) ;
    // Third system
    setVisited(!visited)
    }

    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital[0]}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small country"}</p>
            <button onClick={handleVIsited}>
                {
                    visited ? "Visited" : "Not Visited"
                }
            </button>
        </div>
    );
};

export default Country;