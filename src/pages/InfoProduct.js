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
                </div>
            </nav>
            <div className='container'><br />
                <div className='row mt-5'>
                    <div className='col-md-3'>
                        <a href=''><i className="bi bi-arrow-left offset-md-5"></i></a>
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
                            <label><img src='/assets/img/Group_1.png' alt='' /><input type={'file'} hidden /></label>
                        </div>
                        <div className='row'>
                            <div className="col-md mb-3 d-grid">
                                <a href='#' className="btn btn-outline-primary">Preview</a>
                            </div>
                            <div className="col-md mb-3 d-grid">
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