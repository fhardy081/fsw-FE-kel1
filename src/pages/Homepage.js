import React from "react";
import "./homepage.css";

const Homepage = () => {
    return (
        <>
  {/*Nav*/}
  <nav className="navbar navbar-expand-lg sticky-top">
    <div className="container">
      <a className="navbar-brand" href="#" />
      <div className="navbar-nav navbar-top">
        <input
          className="form-control cari-produk"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-masuk"><a href="/login" style={{color: "white"}}>Masuk</a></button>
      </div>
    </div>
  </nav>
  {/*Carousel*/}
  <div className="container" style={{ paddingTop: 30 }}>
    <div className="row">
      <div className="col-12">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              data-bs-interval={500}
              id="imgbanner"
            >
              <img
                src="/assets/img banner.png"
                className="d-block w-100"
                alt="banner"
              />
            </div>
            <div
              className="carousel-item"
              data-bs-interval={500}
              id="carousel-body2"
            ></div>
            <div
              className="carousel-item"
              data-bs-interval={500}
              id="carousel-body3"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Category*/}
  <div className="container mb-3 pt-5">
    <h2 className="category-title">Telusuri Kategori</h2>
    <div className="row">
      <button className="btn btn-filter m-2">Semua</button>
      <button className="btn btn-filter m-2">Hobi</button>
      <button className="btn btn-filter m-2">Kendaraan</button>
      <button className="btn btn-filter m-2">Baju</button>
      <button className="btn btn-filter m-2">Elektronik</button>
      <button className="btn btn-filter m-2">Kesehatan</button>
    </div>
  </div>
  {/*Product Card*/}
  <div className="container pt-2">
    <div className="row">
      <div className="card ms-2" style={{ width: "18rem" }}>
        <img
          src="/assets/Rectangle 23.png"
          className="card-img-top"
          alt="jam"
        />
        <div className="card-body">
          <h5 className="card-title">Jam Tangan Casio</h5>
          <p className="jenis-barang">Aksesoris</p>
          <h5 className="card-text">
            RP250.000
            <p />
          </h5>
        </div>
      </div>
      <div className="card ms-2" style={{ width: "18rem" }}>
        <img
          src="/assets/Rectangle 24.png"
          className="card-img-top"
          alt="jam"
        />
        <div className="card-body">
          <h5 className="card-title">Jam Tangan Casio</h5>
          <p className="jenis-barang">Aksesoris</p>
          <h5 className="card-text">
            RP250.000
            <p />
          </h5>
        </div>
      </div>
    </div>
  </div>
</>
    )
}

export default Homepage;
