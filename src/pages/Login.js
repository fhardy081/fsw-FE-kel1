import '../components/css/style.css'
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";

const Login = () => {
    const navigate = useNavigate();

    const emailField = useRef("");
    const passwordField = useRef("");

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const onLogin = async (e) => {
        e.preventDefault();

        try {
            const userToLoginPayload = {
                email: emailField.current.value,
                password: passwordField.current.value,
            };

            const loginRequest = await axios.post(
                "https://secondhand-kel1.herokuapp.com/api/v1/login",
                userToLoginPayload
            );
            
            const loginResponse = loginRequest.data;

            if (loginRequest.status === 200) {
                localStorage.setItem("token", loginResponse.access_token);

                navigate("/");
            }
        } catch (err) {
            if (err.response) {
                console.log(err);
                const response = err.response.data;

                setErrorResponse({
                    isError: true,
                    message: response.message,
                });
            }else{
                setErrorResponse({
                    isError: true,
                    message: err.message
                })
            }
        }
    };

    return (
        <>
            <div style={{ overflowY: "hidden", overflowX: "hidden", display: "block", height: "100vh" }} className='login'>
                <div className="row align-items-center">
                    <div className="col-md pict-login">
                        <img src="/assets/img/img_login.png" className="img-fluid" alt="login" />
                    </div>
                    <div className="col-md">
                        <div className='row container-fluid'>
                            {errorResponse.isError && (
                                <Alert variant="danger">{errorResponse.message}</Alert>
                            )}
                            <a href=''><i className="bi bi-arrow-left arrow-login" style={{ fontSize: '1.5rem', color: 'black', marginBottom: '2rem' }}></i></a>
                            <h2 className='col-md-8 offset-md-2 mrl'><b>Masuk</b></h2>
                            <form className='col-md-8 offset-md-2 row' onSubmit={onLogin}>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control input-width-login" ref={emailField} placeholder="Contoh: johndee@gmail.com" />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control input-width-login" ref={passwordField} placeholder="Masukkan password" />
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