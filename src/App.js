import React from "react";
import Header from "./components/Header.js";
import {Route, NavLink} from 'react-router-dom';
import CharacterList from './components/CharacterList';
import styled from 'styled-components';
import WelcomePage from './components/WelcomePage';
import LocationsList from './components/LocationsList';
import Episode from './components/Episode';


const WrapNav = styled.div`
background-color: grey;
height: 15vh;
color: white;
margin: 0;
padding: 20px;

`;



export default function App() {

  


  return (
    <main>
    

      <WrapNav className="nav-links">
        <NavLink to ="/" className="nav-link">Home</NavLink >
        <NavLink to="/character-list" className="nav-link" >Characters</NavLink>
        <NavLink to = "/location-list" className="nav-link">Locations</NavLink>
        <NavLink to="/episode" className="nav-link">Episode</NavLink>
        <Header />
      </WrapNav>
     
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/character-list" render={ props =>
      <CharacterList /> }/>
      <Route exact path="/location-list" component={LocationsList} />
      <Route exact path="/episode" component={Episode} />
    

   
{/* style = {{ paddingTop:'20px', padding: '10px', textDecoration: 'none', color: 'white', fontSize:'20px'}} */}

    </main>
  );
}
