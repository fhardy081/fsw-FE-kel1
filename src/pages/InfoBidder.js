const InfoBidder = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top d-none d-sm-block" style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)" }}>
                <div className="container">
                    <a className="navbar-brand me-auto" id="logo" href="/">&nbsp;</a>
                    <p className="me-auto mb-1">Info Penawar</p>
                </div>
            </nav>
            <div className='container info-bidder'>
                <div className='row satu'>
                    <div className='col-md-3' style={{ marginBottom: '2rem' }}>
                        <a href='/'><i className="bi bi-arrow-left offset-md-5" style={{ fontSize: '1.5rem', color: 'black' }}></i></a>
                        <span className='title'><center style={{marginTop:'-1.875rem'}}>Info Penawar</center></span>
                    </div>
                    <div className='col-md-6'>
                        <div class="alert alert-success alert-dismissible fade show" role="alert" style={{backgroundColor:"#73CA5C", borderRadius:"0.75rem",color:"white"}}>
                            Status produk berhasil diperbarui
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-2'>
                                        <img src='assets/images/jam_casio.png' width={"100%"} alt="Jam Casio"/>
                                    </div>
                                    <div className='col-10'>
                                        <h5 className="card-title" style={{ fontWeight: "bold" }}>Nama Pembeli</h5>
                                        <p className="card-text">Kota</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className='title mt-3' style={{ fontWeight: "bold" }}>Daftar Produkmu yang Ditawar</h6>
                        <div className='row mt-3'>
                            <div className='col-2'>
                                <img src='assets/images/jam_casio.png' width={"100%"} alt="Prudct" />
                            </div>
                            <div className='col-10'>
                                <div className='row'>
                                    <div className='col'>
                                        <span className="card-text">Penawaran produk</span>
                                    </div>
                                    <div className='col'>
                                        <span className="card-title float-end">20 Apr, 14:04</span>
                                    </div>
                                </div>
                                <h5 className="card-title">Jam Tangan Casio</h5>
                                <h5 className="card-title">Rp 250.000</h5>
                                <h5 className="card-title">Ditawar Rp 200.000</h5>
                                <div className='row mb-3'>
                                    <div className='col-md-8 offset-md-4 row'>
                                        <a href='/' className='btn btn-outline-primary col me-2' style={{ color: 'black', borderRadius: "1rem" }}>Tolak</a>
                                        <button className='btn btn-primary col' style={{ borderRadius: "1rem" }} data-bs-toggle="modal" data-bs-target="#exampleModalHubungi">Terima</button>
                                    </div>
                                    {/* <div className='col-md-8 offset-md-4 row'>
                                        <a href='/' className='btn btn-outline-primary col me-2' style={{ color: 'black', borderRadius: "1rem" }}>Status</a>
                                        <a href='/' className='btn btn-primary col' style={{ borderRadius: "1rem" }} data-bs-toggle="modal" data-bs-target="#exampleModalHubungi">Hubungi di <i className='bi bi-whatsapp'></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModalTerima" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" style={{ width: "22.5rem" }}>
                    <div className="modal-content" style={{ borderRadius: "1rem" }}>
                        <div className="modal-body">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button><br />
                            <h6 className='title mt-3' style={{ fontWeight: "bold" }}>Yeay kamu berhasil mendapat harga yang sesuai</h6>
                            <p className='card-text'>Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>
                            <div className="card mb-3 bgc" style={{ borderRadius: "1rem" }}>
                                <div className="card-body">
                                    <h6 className='text-center mb-3' style={{ fontWeight: "bold" }}>Product Match</h6>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src='assets/images/jam_casio.png' width={"100%"} alt="Prudct"/>
                                        </div>
                                        <div className='col-10'>
                                            <h5 className="card-title" style={{ fontWeight: "bold" }}>Nama Pembeli</h5>
                                            <p className="card-text">Kota</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-2'>
                                            <img src='assets/images/jam_casio.png' width={"100%"} alt="Prudct"/>
                                        </div>
                                        <div className='col-10'>
                                            <h5 className="card-title">Jam Tangan Casio</h5>
                                            <h5 className="card-title" style={{ textDecoration: "line-through" }}>Rp 250.000</h5>
                                            <h5 className="card-title">Ditawar Rp 200.000</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-grid'>
                                <a href='https://wa.me/089627382823?text=Hai%20saya%20dari%20SecondHand' className="btn btn-primary" style={{ borderRadius: "1rem" }}>Hubungi via Whatsapp <i className='bi bi-whatsapp float-end'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModalHubungi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" style={{ width: "22.5rem" }}>
                    <div className="modal-content" style={{ borderRadius: "1rem" }}>
                        <div className="modal-body">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button><br />
                            <h6 className='title mt-3' style={{ fontWeight: "bold" }}>Perbarui status penjualan produkmu</h6>
                            <form className="mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                    <label className="form-check-label" for="exampleRadios1">
                                        Berhasil Terjual
                                    </label>
                                    <p className="card-text">Kamu telah sepakat menjual produk ini kepada pembeli</p>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                    <label className="form-check-label" for="exampleRadios2">
                                        Batalkan Transaksi
                                    </label>
                                    <p className="card-text">Kamu membatalkan transaksi produk ini dengan pembeli</p>
                                </div>
                            </form>
                            <div className='d-grid'>
                                <a href='https://wa.me/089627382823?text=Hai%20saya%20dari%20SecondHand' className="btn btn-primary" style={{ borderRadius: "1rem" }}>Kirim</a>
                                <a href='https://wa.me/089627382823?text=Hai%20saya%20dari%20SecondHand' className="btn btn-secondary" style={{ borderRadius: "1rem" }}>Kirim</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default InfoBidder