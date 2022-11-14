import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './items.css'
import Aside from "./Aside"
import {useState, useEffect} from "react";

function BasicExample({text, imageUrl}) {

  return (
    <Card className='card' style={{ width: '36rem' }}>
      <Card.Img className="imagenPerritos" variant="top" src={imageUrl} />
      <Card.Body className='cardContainer'>
        <Card.Title className='contentCard'><strong>{text}</strong></Card.Title>
        <Button variant="outline-warning">¡Conóceme!</Button>{' '}
      </Card.Body>
    </Card>
  );
}

export default BasicExample;