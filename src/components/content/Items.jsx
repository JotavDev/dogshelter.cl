import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './items.css'

function BasicExample() {
  return (
    <Card className='card' style={{ width: '36rem' }}>
      <Card.Img className="imagenPerritos" variant="top" src="https://i.imgur.com/cw7BMGb.jpg" />
      <Card.Body className='cardContainer'>
        <Card.Title className='contentCard'><strong>Card Title</strong></Card.Title>
        <Button variant="outline-warning">¡Conóceme!</Button>{' '}
      </Card.Body>
    </Card>
  );
}

export default BasicExample;