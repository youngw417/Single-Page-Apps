import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Col
} from 'reactstrap';


export default function CharacterCard(props) {

console.log('props',props);
 const {character} = props;

  return (





      <Card className = "charater-card" style = {{margin: ' 30px 30px', marginLeft:'40px', width: '25%', textAlign: 'center', boxShadow: '5px 5px 10px #333', padding: '15px 6px', display:"inline-block"}}>
            <CardImg top width = "70%" src ={character.image} alt ="character" style = {{marginBottom: '20px', marginTop: '20px'}}/>
            {/* {gsap.from(".character-card", {x: -100, stager: 0.2, duration: 0.8})} */}
            <CardBody >
              <CardTitle> Name: {character.name}</CardTitle>
              <CardText>ID: {character.id}</CardText>
              
              <CardText>Status: {character.status}</CardText>
              <CardText>Species: {character.species}</CardText>
            </CardBody>
      </Card>

      
 
    
      

  )
  
  
}
