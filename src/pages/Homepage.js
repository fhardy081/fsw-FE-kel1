import React, { useEffect } from "react";
import Imgbanner from "../Assets/img banner.png";
import Banner2 from "../Assets/banner2.png";
import Banner3 from "../Assets/banner3.png";
import Rectangle23 from "../Assets/Rectangle 23.png";
import Rectangle24 from "../Assets/Rectangle 24.png";

const Homepage = () => {
  useEffect(() => {
    if (window.Loadowlcarousel) {
      window.Loadowlcarousel("/owl-carousel")
    }
  }, [])
  return (
    <>
      {/*Nav*/}<nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/">&nbsp;</a>
                <form class="search-bar d-flex">
                    <input className="form-control cari-produk" type="search" placeholder="Cari di sini ..." aria-label="Search"/>
                </form>
                <button className="btn btn-masuk"><i class="bi bi-box-arrow-in-right"></i>&nbsp;Masuk</button>
            </div>
        </nav>
      {/*Carousel*/}
      <div className="container" style={{ paddingTop: 30 }}>
        <div className="row">
          <div className="col-12">
            <div className="owl-carousel" id="owl-carousel">
              <div>
                <img
                  src={Imgbanner}
                  className="banner-pic"
                  alt="banner"
                />
              </div>
              <div>
                <img
                  src={Banner2}
                  className="banner-pic"
                  alt="banner"
                /></div>
              <div>
                <img
                  src={Banner3}
                  className="banner-pic"
                  alt="banner"
                /></div>
            </div>
          </div>
        </div>
      </div>
      {/*Category*/}
      <div className="container mb-3 pt-5">
        <h2 className="category-title">Telusuri Kategori</h2>
        <div className="row">
          <button className="btn btn-filter m-2"><i class="bi bi-search"></i>&nbsp;Semua</button>
          <button className="btn btn-filter m-2"><i class="bi bi-search"></i>&nbsp;Hobi</button>
          <button className="btn btn-filter m-2"><i class="bi bi-search"></i>&nbsp;Kendaraan</button>
          <button className="btn btn-filter m-2"><i class="bi bi-search"></i>&nbsp;Baju</button>
          <button className="btn btn-filter m-2"><i class="bi bi-search"></i>&nbsp;Elektronik</button>
          <button className="btn btn-filter m-2"><i class="bi bi-search"></i>&nbsp;Kesehatan</button>
        </div>
      </div>
      {/*Product Card*/}
      <div className="container pt-2">
        <div className="row">
          <div className="card ms-2" style={{ width: "18rem" }}>
            <img
              src={Rectangle23}
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
              src={Rectangle24}
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