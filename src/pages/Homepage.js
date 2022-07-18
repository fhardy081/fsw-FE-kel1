import React, { useEffect, useState } from "react";
import Imgbanner from "../Assets/img banner.png";
import Banner2 from "../Assets/banner2.png";
import Banner3 from "../Assets/banner3.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import api from "../lib/api"

const Homepage = () => {
  const [post, setPost] = useState([]);
  const [category, setCategory] = useState([""]);

  const categories = category ? `${category}` : "";

  useEffect(() => {
    if (window.Loadowlcarousel) {
      window.Loadowlcarousel("#owl-carousel")
    }

    const getProductPublish = async () => {
      try {
        const response = await api.get(
          `/api/v1/products`
        )
        const data = await response.data.products;
        let products = []
        for (let i in data) {
          if (categories) {
            console.log(categories)
            if (categories == data[i].category) {
              products.push(data[i])
            }
          } else {
            products.push(data[i])
          }
        }
        setPost(products);
      } catch (err) {
        console.log(err);
      }
    }

    getProductPublish();
  }, [categories]);

  return (
    <div id="home">
      {/*Nav*/}
      <Navbar />
      {/*Carousel*/}
      <div style={{ overflowX: 'hidden' }}>
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
            <Link to={`/product/${post.id}`} className="card ms-2" style={{ width: "18rem" }}>
              <img src={post.photo} alt={post.photo} className="card-img-top mt-3" />
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
      <button className="tombol-jual-homepage"><i class="bi bi-plus"></i>&nbsp;Jual</button>
    </div>
  )
}

export default Homepage;