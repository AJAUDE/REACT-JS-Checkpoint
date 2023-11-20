import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCom({Title, Text, imgurl, price}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgurl} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Text>{Text}</Card.Text>
        <Button variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCom;