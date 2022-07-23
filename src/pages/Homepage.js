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
        `/api/v1/products?name=${text?text:""}`
      )
      const data = await response.data.products;
      let products = []
      for (let i in data) {
        if (data[i].is_sold == false) {
          if (categories) {
            console.log(categories)
            if (categories == data[i].category) {
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
  }, [categories,query]);

  useEffect(() => {
    if (query.get('q')) {
      updateSearch(query.get('q'))
    }
    // console.log(query.get('q'))
  }, [query]);

  return (
    <div id="home">
      {/*Nav*/}
      <Navbar onSearch={text => updateSearch(text)} text={query.get('q')} />
      <div className="bg">
        {/* <nav class="navbar navbar-expand-lg navbar-light nav-resp" onSearch={text => updateSearch(text)}>
          <div class="container-fluid" style={{marginBottom: 200}}>

            <div className="row">

              <div className="col">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{background:"white"}}>
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>

              <div className="col">
                <form class="search-bar d-flex">
                  <input className="form-control cari-produk" type="search" placeholder="Cari di sini ..." aria-label="Search" />
                </form>
              </div>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

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
      </div>

      {/*Category*/}
      <div className="container mb-3">
        <h2 className="category-title">Telusuri Kategori</h2>
        <div className="row">
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
          {post.map((post) =>
            <Link to={`/product/${post.id}`} className="card ms-4 mb-4" style={{ width: "18rem", height: "18rem", color: "black", textDecoration: "none" }}>
              <img src={post.photo} alt={post.photo} className="card-img-top mt-3" width={'50%'} height={'50%'} />
              <div className="card-body">
                <h5 className="card-title">{post.name}</h5>
                <p className="jenis-barang">{post.category}</p>
                <h5 className="card-text">
                  Rp {post.price.toLocaleString()}
                  <p />
                </h5>
              </div>
            </Link>
          ).reverse()}
        </div>
      </div>
      {/* Tombol Jual */}
      <Link to='/infoproduct'><button className="tombol-jual-homepage"><i class="bi bi-plus"></i>&nbsp;Jual</button></Link>
    </div>

  )
}

export default Homepage;