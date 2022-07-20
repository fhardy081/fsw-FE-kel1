import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { FaCube, FaRegHeart, FaDollarSign, FaPlus } from 'react-icons/fa';

import ItemCard from '../components/ListProduct/ItemCard';
import '../components/css/ListProduct.css';
import Navbar from '../components/Navbar';

function ListProduct() {
  return (
    <div id="list-product">
      <Navbar/>

      <Container>
      <div className="mb-4 title-list">
        <h4 style={{ fontWeight: 'bold', marginTop: "50px", fontSize: '20px' }}>Daftar Jual Saya</h4>
      </div>
        <Card className="upper">
          <Row>
            <Col xs={1}>
              <img src={`${process.env.PUBLIC_URL}/assets/images/image_seller.png`} style={{ paddingLeft: '16px', paddingTop: '16px' }} alt="" />
            </Col>
            <Col xs={9}>
              <h5 style={{ fontWeight: 'bold', paddingTop: '12px', marginRight: '20%' }}>Fitri</h5>
              <p>Jakarta</p>
            </Col>
            <Col xs={2} style={{ paddingTop: '20px', paddingLeft: '120px' }}>
              <Link to="/info-profil">
                <Button className="seller-btn" variant="" style={{ borderColor: "#7126B5" }}>Edit</Button>
              </Link>
            </Col>
          </Row>
        </Card>
        <Row style={{ marginTop: '25px'}}>
          <Col>
            <div className="card-test">
              <div className="card-body1">
                <h5 className="px-3 pt-1">Kategori</h5>
                <ListGroup className="py-2 text-decoration" variant="flush">
                  <ListGroup.Item className="py-3">
                    <Link to="/" className="text-decoration">
                      <i type="button" className="link">
                        <FaCube />
                        {' '}
                        Semua Produk
                      </i>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="py-3">
                    <Link to="/" className="text-decoration">
                      <i type="button" className="link">
                        <FaRegHeart style={{ color: '#8A8A8A', fontStyle: 'normal' }} />
                        {' '}
                        Diminati
                      </i>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="py-3">
                    <Link to="/" className="text-decoration">
                      <i type="button" className="link">
                        <FaDollarSign style={{ color: '#8A8A8A', fontStyle: 'normal' }} />
                        {' '}
                        Terjual
                      </i>
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card content" type="button" style={{ height: '100%' }}>
              <FaPlus />
              {' '}
              <p className="pt-2">Tambah Produk</p>
            </div>
          </Col>
          {Array.from({ length: 2 }).map((_, idx) => {
            return (
              <Col>
                <ItemCard
                  title="Jam Tangan Casio"
                  type="Aksesoris"
                  price="Rp 250.000"
                  image="https://placeimg.com/165/100/any"
                  imageAlt="Gambar jam tangan"
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>

  );
}

export default ListProduct;