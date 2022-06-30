/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/ListProduct.css';

function ItemCard(props) {
  const {
    title, type, price, image, imageAlt,
  } = props;

  return (
    <Card className="card-items" style={{height: '100%', width: '100%'}}>
      <Card.Img src={image} className="mx-auto card-img-top" alt={imageAlt} style={{width: '71%', height: '71%'}}/>
      {/* <Card.Body style={{height: '65%', width: '80%'}}> */}
        <Card.Title style={{ fontWeight: 'bold', marginLeft: '10px', marginTop: '2%' }}>{title}</Card.Title>
        <Card.Text style={{ color: 'grey', marginLeft: '10px' }}>{type}</Card.Text>
        <Card.Text style={{ fontWeight: '400', marginLeft: '10px' }}>{price}</Card.Text>
      {/* </Card.Body> */}
    </Card>
  );
}

export default ItemCard;