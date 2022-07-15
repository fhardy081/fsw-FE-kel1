import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const token = useSelector(state => state.api.token)

    const navigate = useNavigate();
    // const [setIsLoggedIn] = useState(true);
    // const [setUser] = useState({});
    
    const logout = () => {
        localStorage.removeItem("token");

        // setIsLoggedIn(false);
        // setUser({});
        navigate("/");
    };

    const infoprofil = () => {
        navigate("/info-profil");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="/">&nbsp;</a>
                    <form class="search-bar d-flex">
                        <input className="form-control cari-produk" type="search" placeholder="Cari di sini ..." aria-label="Search" />
                    </form>
                    {(() => {
                        if (!token) {
                            return (
                                <form>
                                    <Link to='/login' className='btn btn-primary' type='button'>Masuk</Link>
                                </form>)
                        }
                        return (
                            <div className="collapse navbar-collapse justify-content-end" id="navbarProductPage">
                                <ul className="navbar-nav navbar-top">
                                    <li className="nav-item">
                                        <a className="nav-link nav-item-list active" aria-current="page" href="/">&nbsp;</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className="nav-link nav-item-notification" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            &nbsp;
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li>
                                                <a className="dropdown-item" href="/">
                                                    <div className="card-notification">
                                                        <div className="card-body-notification">
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <img src="assets/images/image_seller.png" className="seller-image d-block" alt="Seller" />
                                                                </div>
                                                                <div className="col-md-10" style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 32 }}>
                                                                    <div className="row">
                                                                        <div className="col-md-8">
                                                                            <p className="card-text-notification">Penawaran Produk</p>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <p className="card-text-notification">20 Apr, 14:04</p>
                                                                        </div>
                                                                    </div>
                                                                    <h5 className="card-title-product" style={{ marginBottom: 4 }}>Jam Tangan Casio</h5>
                                                                    <h5 className="card-title-price-linethrough" style={{ marginBottom: 4 }}>Rp 250.000</h5>
                                                                    <h5 className="card-title-bargain" style={{ marginBottom: 4 }}>Berhasil Ditawar Rp 200.000</h5>
                                                                    <p className="card-text-notification">Kamu akan segera dihubungi penjual via whatsapp</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/">
                                                    <div className="card-notification">
                                                        <div className="card-body-notification">
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <img src="assets/images/image_seller.png" className="seller-image d-block" alt="Seller" />
                                                                </div>
                                                                <div className="col-md-10" style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 32 }}>
                                                                    <div className="row">
                                                                        <div className="col-md-8">
                                                                            <p className="card-text-notification">Penawaran Produk</p>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <p className="card-text-notification">20 Apr, 14:04</p>
                                                                        </div>
                                                                    </div>
                                                                    <h5 className="card-title-product" style={{ marginBottom: 4 }}>Jam Tangan Casio</h5>
                                                                    <h5 className="card-title-price-linethrough" style={{ marginBottom: 4 }}>Rp 250.000</h5>
                                                                    <h5 className="card-title-bargain" style={{ marginBottom: 4 }}>Berhasil Ditawar Rp 200.000</h5>
                                                                    <p className="card-text-notification">Kamu akan segera dihubungi penjual via whatsapp</p>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link nav-item-user" href="/">&nbsp;</a>
                                    </li> */}
                                    <li className='nav-item'>
                                        <a className="nav-link nav-item-user" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            &nbsp;
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink" id="dropdown-profil">
                                            <li className='nav-item'>
                                                <p className="dropdown-item" onClick={infoprofil}>Profile</p>
                                            </li>
                                            <li className='nav-item'>
                                                <p className="dropdown-item" onClick={logout}>Logout</p>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>)
                    })()}
                </div>
            </nav>
        </>

    )
}
export default Navbar;