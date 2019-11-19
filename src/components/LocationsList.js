import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import styled from 'styled-components';
import SearchForm from './SearchForm';



export default function LocationsList() {

const [locations, setLocations] = useState([]);

const search = (myArray) => {
    setLocations(myArray);
}

useEffect( () => {
    axios.get('https://rickandmortyapi.com/api/location/')
    .then( res => {

        setLocations(res.data.results);
       

    })
    .catch( err => console.log(err))



},[]);

return (
    <div className="wrapper">

        <h2>List of Location</h2>
        <div className="searchForm">
        <SearchForm search={search} characters={locations}/>
        { locations.length === 0 ? <p style ={{textAlign: 'center'}}>No name found in this search</p> : null}
        </div>

        {
            locations.map( each => {
               return <LocationCard key = {each.id} location={each} />
            })
        }


    </div>


)

}
