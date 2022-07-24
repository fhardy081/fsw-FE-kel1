import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { FaCube, FaRegHeart, FaDollarSign, FaPlus } from 'react-icons/fa';

import ItemCard from '../components/ListProduct/ItemCard';
import '../components/css/ListProduct.css';
import Navbar from '../components/Navbar';
import api from '../lib/api';

function ListProduct() {
  const [products, setProducts] = useState([])
  const [user, setUser] = useState({})
  const [photo, setPhoto] = useState(`${process.env.PUBLIC_URL}/assets/images/image_seller.png`)

  useEffect(() => {
    api.get('/api/v1/listonsaleproducts').then(res => {
      setProducts([...res.data.products])
    })
  }, [])

  useEffect(() => {
    api.get('/api/v1/whoami').then(res => {
      setUser(res.data.user_data)
      if (user.photo) {
        setPhoto(user.photo)
      }
      // console.log(user.photo)
    })
  }, [user])

  return (
    <div id="list-product">
      <Navbar />
        {/* Offcanvas */}
        <div className='container pt-2 pb-4'>
          <div className="row">
          <h2 className='offcanvas-title'>Daftar Jual Saya</h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                {/* <span className="navbar-toggler-icon" /> */}
                <i className="bi bi-list"></i>
              </span>
            </button>
          </div>
          
          <div
            className="offcanvas offcanvas-start justify-content-end offcanvas-size"
            tabIndex={-1}
            id="offcanvasRight"
            aria-labelledby="offcanvasTopLabel"
          >
            <div className="offcanvas-body">
            <p className='offcanvas-sidetitle'>Second Hand</p>
              <ul style={{ paddingLeft: '0.25rem'}}>
                <li>
                  <a className="offcanvas-sub" href="#">Notifikasi</a>
                </li>
                <li> 
                  <a className="offcanvas-sub" href="#">Daftar Jual</a>
                </li>
                <li>
                  <a className="offcanvas-sub" href="#">Akun Saya</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      <Container>
        <div className="mb-4 title-list">
          <h4 style={{ fontWeight: 'bold', marginTop: "50px", fontSize: '20px' }}>Daftar Jual Saya</h4>
        </div>
        <Card className="upper">
          <Row>
            <Col xs={1}>
              <img src={photo} style={{ paddingLeft: '16px', paddingTop: '16px', borderRadius: '5px' }} width="80%" alt="" />
            </Col>
            <Col xs={9}>
              <h5 style={{ fontWeight: 'bold', paddingTop: '12px', marginRight: '20%' }}>{user.name}</h5>
              <p>{user.city}</p>
            </Col>
            <Col xs={2} style={{ paddingTop: '20px', paddingLeft: '120px' }}>
              <Link to="/info-profil">
                <Button className="seller-btn" variant="" style={{ borderColor: "#7126B5" }}>Edit</Button>
              </Link>
            </Col>
          </Row>
        </Card>
        <Row style={{ marginTop: '25px' }}>
          <Col>
            <div className="card-test">
              <div className="card-body1">
                <h5 className="px-3 pt-1">Kategori</h5>
                <ListGroup className="py-2 text-decoration" variant="flush">
                  <ListGroup.Item className="py-3">
                    <Link to="/listproduct" className="text-decoration">
                      <i type="button" className="link">
                        <FaCube />
                        {' '}
                        Semua Produk
                      </i>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="py-3">
                    <Link to="/listproduct2" className="text-decoration">
                      <i type="button" className="link">
                        <FaRegHeart style={{ color: '#8A8A8A' }} />
                        {' '}
                        Diminati
                      </i>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="py-3">
                    <Link to="/listproduct3" className="text-decoration">
                      <i type="button" className="link">
                        <FaDollarSign style={{ color: '#8A8A8A' }} />
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
            <div className="card content" type="button" style={{  width: '250px',height: '250px',marginTop: '25px' }}>
              <FaPlus />
              {' '}
              <p className="pt-2">Tambah Produk</p>
            </div>
          </Col>
          {products.map((product, idx) => {
            return (
              <Col md={3} key={product.id}>
                <Link to={`/infoproduct/${product.id}`} style={{ color: "black", textDecoration: "none" }}>
                  <ItemCard
                    title={product.name}
                    type={product.category}
                    price={'Rp. ' + product.price.toLocaleString()}
                    image={product.photo}
                    imageAlt={product.name}
                  />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>

  );
}

export default ListProduct;