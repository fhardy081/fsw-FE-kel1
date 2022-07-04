import React from 'react';

const RegistrationPage = () => {
    return (
        <>
        <div className="row" style={{marginRight: 0}}>
            <div className="col-md-6">
                <div className="image-registration">
                    <img src="assets/images/register.png" alt="Second Hand" width="100%" height="100%"></img>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <div className="form">
                    <div className="form-body">
                        <div className="back-button-register">
                            <a href="/"><img src="assets/images/fi_arrow-left.png" alt="Button Back"></img>&nbsp;</a>
                        </div>
                        <div className="form-title">
                            Daftar
                        </div>
                        <div className="Nama">
                            <label className="form__label" for="Name">Nama </label>
                            <input className="form__input" type="text" id="Name" placeholder="Nama Lengkap"/>
                        </div>
                        <div className="email">
                            <label className="form__label" for="email">Email </label>
                            <input  type="email" id="email" className="form__input" placeholder="Contoh: johndee@gmail.com"/>
                        </div>
                        <div className="password">
                            <label className="form__label" for="password">Password </label>
                            <input className="form__input" type="password"  id="password" placeholder="Masukkan Password"/>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="submit" className="btn-register" style={{justifyContent: 'center', alignItems: 'center'}}>Daftar</button>
                        <div className="login-direct">
                            Sudah punya akun? &nbsp;
                            <a href='/' style={{color: '#7126B5', fontWeight: 'bold'}}>Masuk di sini</a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </>
           
    )    
}
export default RegistrationPage;