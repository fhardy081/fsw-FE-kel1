import '../components/css/style.css'

const Login = () => {

    return (
        <>
            <div style={{ overflowY: "hidden", overflowX: "hidden", display: "block", height: "100vh" }} className='login'>
                <div className="row align-items-center">
                    <div className="col-md pict-login">
                        <img src="/assets/img/img_login.png" className="img-fluid" alt="login" />
                    </div>
                    <div className="col-md">
                        <div className='row container-fluid'>
                            <a href=''><i className="bi bi-arrow-left arrow-login" style={{ fontSize: '1.5rem', color: 'black', marginBottom: '2rem' }}></i></a>
                            <h2 className='col-md-8 offset-md-2 mrl'><b>Masuk</b></h2>
                            <form className='col-md-8 offset-md-2 row' action='#'>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control input-width-login" id="email" placeholder="Contoh: johndee@gmail.com" />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control input-width-login" id="password" placeholder="Masukkan password" />
                                </div>
                                <div className="col-md-12 mb-3 d-grid">
                                    <button type="submit" className="btn btn-primary input-width-login">Masuk</button>
                                </div><br />
                            </form>
                        </div>
                        <p className='text-center'>Belum Punya Akun? <a className='text-primary' href='/register'><b>Daftar di sini</b></a></p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login