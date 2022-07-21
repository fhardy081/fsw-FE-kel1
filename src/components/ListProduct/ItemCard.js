/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/ListProduct.css';

function ItemCard(props) {
  const {
    title, type, price, image, imageAlt,
  } = props;

  return (
    <Card className="card-items" style={{ height: '220px', width: '250px' }}>
      <Card.Img src={image} className="mx-auto card-img-top" alt={imageAlt} style={{ width: '220px', height: '100px' }} />
      {/* <Card.Body style={{height: '65%', width: '80%'}}> */}
      <Card.Title style={{ fontWeight: 'bold', marginLeft: '10px', marginTop: '8px' }}>{title}</Card.Title>
      <Card.Text style={{ color: 'grey', marginLeft: '10px' }}>{type}</Card.Text>
      <Card.Text style={{ fontWeight: '400', marginLeft: '10px', fontSize: '14px', color: "black" }}>{price}</Card.Text>
      {/* </Card.Body> */}
    </Card>
  );
}

export default ItemCard;