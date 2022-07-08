import '../components/css/style.css'

const InfoProduct = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top d-none d-sm-block" style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)" }}>
                <div className="container">
                    <a className="navbar-brand me-auto" id="logo" href="/">&nbsp;</a>
                </div>
            </nav>
            <div className='container info-prd'>
                <div className='row'>
                    <div className='col-md-3' style={{ marginBottom: '2rem' }}>
                        <a href=''><i className="bi bi-arrow-left offset-md-5" style={{ fontSize: '1.5rem', color: 'black' }}></i></a>
                        <span className='title'><center style={{marginTop:'-1.875rem'}}>Lengkapi Detail Product</center></span>
                    </div>
                    <form action='#' className='col-md-6'>
                        <div className="col-md mb-3">
                            <label htmlFor="nm_produk" className="form-label">Nama Produk</label>
                            <input type="type" className="form-control" id="nm_produk" placeholder="Nama Produk" />
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="harga_produk" className="form-label">Harga Produk</label>
                            <input type="type" className="form-control" id="harga_produk" placeholder="Rp 0,00" />
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="kategori" className="form-label">Kategori</label>
                            <select class="form-control" id="kategori">
                                <option>Pilih Kategori</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="deskripsi" className="form-label">Harga Produk</label>
                            <textarea class="form-control" id="deskripsi" rows="3" placeholder='Contoh: Jalan Ikan Hiu 33'></textarea>
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="foto" className="form-label">Foto Produk</label><br />
                            <label><img src='/assets/img/Group_1.png' alt='' /><input type={'file'} accept=".jpg,.png" hidden /></label>
                        </div>
                        <div className='row'>
                            <div className="col-6 mb-3 d-grid">
                                <a href='#' className="btn btn-outline-primary">Preview</a>
                            </div>
                            <div className="col-6 mb-3 d-grid">
                                <button type="submit" className="btn btn-primary">Terbitkan</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default InfoProduct