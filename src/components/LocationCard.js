import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle, Col
} from 'reactstrap';


export default function LocationCard(props) {
  const {name, type, dimension} = props.location;
  return (

     
      <Card className = "location-card" style = {{margin: '30px 20px',marginLeft: '50px', textAlign: 'center', width: '20%', boxShadow: '5px 5px 10px #333', padding: '20px 30px', display:"inline-block"}}>
            
            <CardBody >
              <CardTitle> Name: {name}</CardTitle>
              <CardText>Type: {type}</CardText>
              
              <CardText>Dimension: {dimension}</CardText>
              {/* <CardText>Residents: {residents}</CardText> */}
            </CardBody>
      </Card>






  )
  
}
