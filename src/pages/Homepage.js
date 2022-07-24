import React, { useEffect, useState } from "react";
import Imgbanner from "../Assets/img banner.png";
import Banner2 from "../Assets/banner2.png";
import Banner3 from "../Assets/banner3.png";
import Navbar from "../components/Navbar";
import { Link, useSearchParams } from "react-router-dom";
import api from "../lib/api"

const Homepage = () => {
  const [post, setPost] = useState([]);
  const [category, setCategory] = useState([""]);
  const [query] = useSearchParams()
  const categories = category ? `${category}` : "";

  const getProductPublish = async (text) => {
    try {
      const response = await api.get(
        `/api/v1/products?name=${text ? text : ""}`
      )
      const data = await response.data.products;
      let products = []
      for (let i in data) {
        if (data[i].is_sold === false) {
          if (categories) {
            console.log(categories)
            if (categories === data[i].category) {
              products.push(data[i])
            }
          } else {
            products.push(data[i])
          }
        }
      }
      setPost(products);
    } catch (err) {
      console.log(err);
    }
  }

  const updateSearch = (text) => {
    getProductPublish(text)
  }

  useEffect(() => {
    if (window.Loadowlcarousel) {
      window.Loadowlcarousel("#owl-carousel")
    }

    if (!query.get('q')) {
      getProductPublish();
    }
  }, [categories, query]);

  useEffect(() => {
    if (query.get('q')) {
      updateSearch(query.get('q'))
    }
  }, [query]);

  return (
    <div id="home">
      {/*Nav*/}
      <Navbar onSearch={text => updateSearch(text)} text={query.get('q')} />
      <div className='container pt-2 pb-4'>
        <div className="row">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{background: "white", marginTop:20, marginLeft:10}}
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
            <ul style={{ paddingLeft: '0.25rem' }}>
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

      {/*Carousel*/}
      <div id="carousel" style={{ overflowX: 'hidden' }} >
        <div className="owl-carousel" id="owl-carousel">

          <div className="slide-item">
            <img src={Imgbanner} className="banner-pic" alt="banner" />
          </div>

          <div className="slide-item">
            <img src={Banner2} className="banner-pic" alt="banner" />
          </div>

          <div className="slide-item">
            <img src={Banner3} className="banner-pic" alt="banner" />
          </div>

          <div className="slide-item">
            <img src={Imgbanner} className="banner-pic" alt="banner" />
          </div>

          <div className="slide-item">
            <img src={Banner2} className="banner-pic" alt="banner" />
          </div>

          <div className="slide-item">
            <img src={Banner3} className="banner-pic" alt="banner" />
          </div>

        </div>
      </div>

      <div className="bg">
        <img src="/assets/images/Group_9.png"></img>
      </div>

      {/*Telusuri Kategori*/}
      <div className="container mt-4 mb-1">
        <h2 className="category-title">Telusuri Kategori</h2>
      </div>

      {/*Category*/}
      <div className="container mb-3">
        {/* <h2 className="category-title">Telusuri Kategori</h2> */}
        <div className="filter-category">
          <button onClick={() => setCategory(null)} className="btn btn-filter m-2"><i className="bi bi-search"></i>&nbsp;Semua</button>
          <button onClick={() => setCategory("Hobi")} className="btn btn-filter m-2"><i className="bi bi-search"></i>&nbsp;Hobi</button>
          <button onClick={() => setCategory("Kendaraan")} className="btn btn-filter m-2"><i className="bi bi-search"></i>&nbsp;Kendaraan</button>
          <button onClick={() => setCategory("Baju")} className="btn btn-filter m-2"><i className="bi bi-search"></i>&nbsp;Baju</button>
          <button onClick={() => setCategory("Elektronik")} className="btn btn-filter m-2"><i className="bi bi-search"></i>&nbsp;Elektronik</button>
          <button onClick={() => setCategory("Kesehatan")} className="btn btn-filter m-2"><i className="bi bi-search"></i>&nbsp;Kesehatan</button>
        </div>
      </div>

      {/*Product Card*/}
      <div className="container pt-2">
        <div className="row">
          {post?.map((post) =>
            <Link to={`/product/${post?.id}`} className="card ms-4 mb-4" style={{ width: "18rem", height: "18rem", color: "black", textDecoration: "none" }}>
              <img src={post?.photo} alt={post?.photo} className="card-img-top mt-3" width={'50%'} height={'50%'} />
              <div className="card-body">
                <h5 className="card-title">{post?.name}</h5>
                <p className="jenis-barang">{post?.category}</p>
                <h5 className="card-text">
                  Rp {post?.price.toLocaleString()}
                  <p />
                </h5>
              </div>
            </Link>
          ).reverse()}
        </div>
      </div>
      {/* Tombol Jual */}
      <Link to='/infoproduct'><button className="tombol-jual-homepage"><i className="bi bi-plus"></i>&nbsp;Jual</button></Link>
    </div>

  )
}

export default Homepage;