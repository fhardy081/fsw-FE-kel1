import '../components/css/style.css'

const mystyle = {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)"
};

const InfoProduct = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={mystyle}>
                <div className="container">
                    <a className="navbar-brand me-auto" id="logo" href="/">&nbsp;</a>
                    <p className="me-auto mb-1">Info Penawar</p>
                </div>
            </nav>
            <div className='container'><br />
                <div className='row mt-5'>
                    <div className='col-md-3'>
                        <a href=''><i className="bi bi-arrow-left offset-md-5"></i></a>
                    </div>
                    <div className='col-md-6'>
                        <div className="card">
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <img src='assets/images/jam_casio.png' width={"100%"} />
                                    </div>
                                    <div className='col-md-10'>
                                        <h5 className="card-title" style={{fontWeight: "bold"}}>Nama Pembeli</h5>
                                        <p className="card-text">Kota</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className='title mt-3' style={{fontWeight: "bold"}}>Daftar Produkmu yang Ditawar</h6>
                        <div className='row mt-3'>
                            <div className='col-md-2'>
                                <img src='assets/images/jam_casio.png' width={"100%"} />
                            </div>
                            <div className='col-md-10'>
                                <div className='row'>
                                    <div className='col'>
                                        <span className="card-text">Penawaran produk</span>
                                    </div>
                                    <div className='col'>
                                        <span className="card-text float-end">20 Apr, 14:04</span>
                                    </div>
                                </div>
                                <h5 className="card-title">Jam Tangan Casio</h5>
                                <h5 className="card-title">Rp 250.000</h5>
                                <h5 className="card-title">Ditawar Rp 200.000</h5>
                                <form className='float-end mb-3'>
                                    <a href='' className='btn btn-outline-primary me-2' style={{ color: 'black', borderRadius: "1rem" }}>Tolak</a>
                                    <a href='' className='btn btn-primary' style={{ borderRadius: "1rem" }} data-bs-toggle="modal" data-bs-target="#exampleModal">Terima</a>
                                </form>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" style={{width:"22.5rem"}}>
                    <div className="modal-content" style={{ borderRadius: "1rem" }}>
                        <div className="modal-body">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button><br />
                            <h6 className='title mt-3' style={{fontWeight: "bold"}}>Yeay kamu berhasil mendapat harga yang sesuai</h6>
                            <p className='card-text'>Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>
                            <div className="card mb-3" style={{ backgroundColor: "#EEEEEE", borderRadius: "1rem" }}>
                                <div className="card-body">
                                    <h6 className='text-center mb-3' style={{fontWeight: "bold"}}>Product Match</h6>
                                    <div className='row'>
                                        <div className='col-md-2'>
                                            <img src='assets/images/jam_casio.png' width={"100%"} />
                                        </div>
                                        <div className='col-md-10'>
                                            <h5 className="card-title" style={{fontWeight: "bold"}}>Nama Pembeli</h5>
                                            <p className="card-text">Kota</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-2'>
                                            <img src='assets/images/jam_casio.png' width={"100%"} />
                                        </div>
                                        <div className='col-md-10'>
                                            <h5 className="card-title">Jam Tangan Casio</h5>
                                            <h5 className="card-title" style={{textDecoration:"line-through"}}>Rp 250.000</h5>
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
        </>

    )
}

export default InfoProduct