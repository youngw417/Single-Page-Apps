import React from "react";


export default function WelcomePage() {
  return (
    <section className="welcome-page" style ={{textAlign: 'center'}}>
      <header> 
        <h1>Welcome to the ultimate fan site!</h1>
        <img 
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
          style = {{boxShadow: '5px 5px 10px #333', border: '1px solid black'}}
         
        />
      
      </header>
    </section>
  );
}
