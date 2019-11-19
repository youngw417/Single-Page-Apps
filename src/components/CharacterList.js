import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';
import SearchForm from "./SearchForm";






export default function CharacterList() {
  // TODO: Add useState to track data from useEffect\

  // const [characters, setCharacters]= useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const search = (newArray) => {
    setSearchResults(newArray);
  };

// TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    

    useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        
        // setCharacters(res.data.results);
        setSearchResults(res.data.results);
        
        console.log(res);
      })
      .catch(err => console.log(err));
    }, []);
  

  return (
    <section className="character-list">
        <h2>List of Characters</h2>
        <div className = "searchForm">
          <SearchForm search={search} characters = {searchResults}/>
        </div>

        { searchResults.length === 0 ? <p style ={{textAlign: 'center'}}>No name found in this search</p> : null}
      <div className="wrapper">
      

        {     
             
                searchResults.map( each => 
                {console.log(each);
                
                return <CharacterCard key={each.id} character = {each}  />
                }
                )

              
            

            }

      </div>
    
    </section>
  );
}
