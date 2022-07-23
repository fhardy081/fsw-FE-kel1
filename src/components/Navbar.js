import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../reducers/api-store";
import api from "../lib/api";

const Navbar = (props) => {

    const dispatch = useDispatch();
    const token = useSelector(state => state.api.token);

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [search, setSearch] = useState(props.text || "");
    const [notif, setNotif] = useState([]);

    const logout = () => {
        dispatch(removeToken())

        setIsLoggedIn(false);
        navigate("/login");
    };

    const infoprofil = () => {
        navigate("/info-profil");
    }

    const onClickNotif = (e, notif) => {
        e.preventDefault()
        let tokens = token.split(".")
        let user = JSON.parse(atob(tokens[1]))
        if (notif.bid_price > 0 && notif.bidder_id !== user.id) {
            navigate(`/infooffer/${notif.bidder_id}`)
        }
    }

    const onSearch = (e) => {
        e.preventDefault()
        navigate(`/?q=${search}`)
    }

    useEffect(() => {
        api.get('/api/v1/notification').then(res => {
            setNotif([...res.data.notifications])
        })
    }, [])

    useEffect(() => {
        if (props.onSearch) {
            props.onSearch(search)
        }
    }, [search])

    useEffect(() => {
        setIsLoggedIn(!!token)
    }, [token])

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="/">&nbsp;</a>
                    <form className="search-bar d-flex" onSubmit={e => onSearch(e)}>
                        <button className='btn btn-primary d-none' type="submit"></button>
                        <input className="form-control cari-produk" type="search" placeholder="Cari di sini ..." aria-label="Search" onChange={e => setSearch(e.target.value)} value={search} />
                    </form>
                    {(() => {
                        if (!isLoggedIn) {
                            return (
                                <form>
                                    <Link to='/login' className='btn btn-primary' type='button'><i className="bi bi-box-arrow-in-right"></i>&nbsp;Masuk</Link>
                                </form>)
                        }
                        return (
                            <div className="collapse navbar-collapse justify-content-end" id="navbarProductPage">
                                <ul className="navbar-nav navbar-top">
                                    <li className="nav-item">
                                        <a className="nav-link nav-item-list active" aria-current="page" href="/listproduct">&nbsp;</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className="nav-link nav-item-notification" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            &nbsp;
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            {
                                                notif.map((notif) => {
                                                    return (
                                                        <li key={notif.date}>
                                                            <a href="#" onClick={e => onClickNotif(e,notif)} className="dropdown-item">
                                                                <div className="card-notification">
                                                                    <div className="card-body-notification">
                                                                        <div className="row">
                                                                            <div className="col-md-2">
                                                                                <img src={notif.photo} className="seller-image d-block" alt="Seller" />
                                                                            </div>
                                                                            <div className="col-md-10" style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 32 }}>
                                                                                <div className="row">
                                                                                    <div className="col-md-8">
                                                                                        <p className="card-text-notification">{notif.title}</p>
                                                                                    </div>
                                                                                    <div className="col-md-4">
                                                                                        <p className="card-text-notification">{notif.date.replace(/T.*/,"")}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <h5 className="card-title-product" style={{ marginBottom: 4 }}>{notif.name}</h5>
                                                                                <h5 className={notif.bid_price ? "card-title-price-linethrough" : "card-title-product"} style={{ marginBottom: 4 }}>{'Rp. ' + notif.price.toLocaleString()}</h5>
                                                                                {notif.bid_price ?
                                                                                    <h5 className="card-title-bargain" style={{ marginBottom: 4 }}>{'Ditawar ' + notif.bid_price.toLocaleString()}</h5>
                                                                                : ""
                                                                            }
                                                                                <p className="card-text-notification">{notif.message}</p>
                                                                                {/* {(() => {
                                                                                    switch (notif.name.toLowerCase()) {
                                                                                        case "berhasil di update":
                                                                                            return <p className="card-text-notification">produk berhasil di update</p>
                                                                                            break;
                                                                                        case "berhasil diterbitkan":
                                                                                        case "berhasil di terbitkan":
                                                                                            return <p className="card-text-notification">produk berhasil diterbitkan</p>
                                                                                            break;
                                                                                        case "berhasil terjual":
                                                                                            return <p className="card-text-notification">produk berhasil terjual</p>
                                                                                            break;
                                                                                        case "penawaran produk":
                                                                                            return <p className="card-text-notification">Kamu akan segera dihubungi penjual via whatsapp</p>
                                                                                            break;
                                                                                        default:
                                                                                            return <></>
                                                                                            break;
                                                                                    }
                                                                                })()} */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
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