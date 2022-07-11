import '../components/css/info-profil.css'

const InfoProfil = () => {
    return (
        <div id="info-profil">
            {/*Nav*/}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top d-none d-sm-block" style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)" }}>
                <div className="container">
                    <a className="navbar-brand me-auto" id="logo" href="/">&nbsp;</a>
                    <p className="me-auto mb-1">Lengkapi Info Akun</p>
                </div>
            </nav>
            {/* Foto Profil */}
            {/* <div className="profpic"></div> */}
            {/*Info*/}
            <div className='container'>
                <div className='row satu'>
                    <div className='col-md-3' style={{ marginBottom: '2rem' }}>
                        <a href=''><i className="bi bi-arrow-left offset-md-5" style={{ fontSize: '1.5rem', color: 'black' }}></i></a>
                        <span className='title'><center style={{ marginTop: '-1.875rem' }}>Lengkapi Info Akun</center></span>
                    </div>
                    <form action='#' className='col-md-6'>
                        <div className="col-md mb-3">
                            <center><label><img src='/assets/img/Group_2.png' alt='' /><input id="foto_profil" type={'file'} accept=".jpg,.png" hidden /></label></center>
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="nm_produk" className="form-label">Nama<span style={{ color: "red" }}>*</span></label>
                            <input type="type" className="form-control" id="nama" placeholder="Nama" />
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="kategori" className="form-label">Kota<span style={{ color: "red" }}>*</span></label>
                            <select class="form-control" id="kota">
                                <option>Pilih Kota</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="deskripsi" className="form-label">Alamat<span style={{ color: "red" }}>*</span></label>
                            <textarea class="form-control" id="alamat" rows="3" placeholder='Contoh: Jalan Ikan Hiu 33'></textarea>
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="nm_produk" className="form-label">No Handphone<span style={{ color: "red" }}>*</span></label>
                            <input type="type" className="form-control" id="no_hp" placeholder="contoh: +628123456789" />
                        </div>
                        <div className="mb-5 d-grid">
                            <button type="submit" className="btn btn-primary">Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InfoProfil;
