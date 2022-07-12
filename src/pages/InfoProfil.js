import React from "react";
import '../components/css/info-profil.css'

const InfoProfil = () => {
    return (
        <div id="info-profil">
            {/*Nav*/}
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid px-5">
                    <a className="navbar-brand" href="/">&nbsp;</a>
                    <h2 className="title text-center">Lengkapi Info Akunmu</h2>
                </div>
            </nav>
            {/* Foto Profil */}
                <div className="profpic"></div>
            {/*Info*/}
            <div className="container" id="card">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Nama
                    </label>
                    <input
                        type="name"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Nama"
                        required=""
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Kota
                    </label>
                    <select
                        className="form-select form-control mb-3"
                        aria-label=".form-select example"
                        required=""
                    >
                        <option selected="">Pilih Kota</option>
                        <option value={1}>Jakarta</option>
                        <option value={2}>Bandung</option>
                        <option value={3}>Semarang</option>
                        <option value={4}>Surabaya</option>
                        <option value={5}>Bali</option>
                    </select>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Alamat
                    </label>
                    <input
                        type="name"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Contoh: Jalan Ikan Hiu 33"
                        required=""
                    />
                    {/* <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        No.Handphone
                    </label>
                    <input
                        type="name"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="contoh: +628123456789"
                        required=""
                    />
                </div>
                <div className="mb-3">
                    <button className="btn-submit">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default InfoProfil;
