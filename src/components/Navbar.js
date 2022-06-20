import React from 'react';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/">&nbsp;</a>
                <form class="search-bar d-flex">
                        <input className="form-control cari-produk" type="search" placeholder="Cari di sini ..." aria-label="Search"/>
                    </form>
                <div className="navbar-nav navbar-top">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item-list">
                            <a className="nav-link active" aria-current="page" href="/">&nbsp;</a>
                            </li>
                            <li className="nav-item-notification">
                            <a className="nav-link" href="/">&nbsp;</a>
                            </li>
                            <li className="nav-item-user">
                            <a className="nav-link" href="/">&nbsp;</a>
                            </li>
                        </ul>
                    </div>        
                </div>
            </div>
        </nav>
        </>
           
    )    
}
export default Navbar;