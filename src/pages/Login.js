import '../components/css/style.css'

const Login = () => {

    return (
        <>
            <div style={{overflowY: "hidden", overflowX: "hidden", display: "block", height: "100vh"}}>
                <div className="row align-items-center">
                    <div className="col-md">
                        <img src="/assets/img/img_login.png" className="img-fluid" alt="login" />
                    </div>
                    <div className="col-md">
                        <div className='row container-fluid'>
                            <h1 className='col-md-8 offset-md-2'><b>Masuk</b></h1>
                            <form className='col-md-8 offset-md-2 row' action='#'>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Contoh: johndee@gmail.com" />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="password" className="form-label">Passwordd</label>
                                    <input type="password" className="form-control" id="password" placeholder="Masukkan password" />
                                </div>
                                <div className="col-md-12 mb-3 d-grid">
                                    <button type="submit" className="btn btn-primary">Masuk</button>
                                </div><br />
                                <p className='text-center'>Belum Punya Akun? <a className='text-primary' href='/register'><b>Daftar di sini</b></a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login