import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";

const RegistrationPage = () => {
    const navigate = useNavigate();

    const nameField = useRef("");
    const emailField = useRef("");
    const passwordField = useRef("");

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const onRegister = async (e) => {
        e.preventDefault();

        try {
            const userToRegisterPayload = {
                name: nameField.current.value,
                email: emailField.current.value,
                password: passwordField.current.value,
            };

            const registerRequest = await axios.post(
                "https://secondhand-kel1.herokuapp.com/api/v1/register",
                userToRegisterPayload
            );

            const registerResponse = registerRequest.data;

            if (registerResponse.status) {
                navigate("/login")
            }
        } catch (err) {
            console.log(err);
            const response = err.response.data;

            setErrorResponse({
                isError: true,
                message: response.message,
            });
        }
    };

    return (
        <>
            <div className="row" style={{ marginRight: 0 }}>
                <div className="col-md-6">
                    <div className="image-registration">
                        <img src="assets/images/register.png" alt="Second Hand" width="100%" height="100%"></img>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <form className="form" onSubmit={onRegister}>
                        <div className="form-body">
                            {errorResponse.isError && (
                                <Alert variant="danger">{errorResponse.message}</Alert>
                            )}
                            <div className="back-button-register">
                                <a href="/"><img src="assets/images/fi_arrow-left.png" alt="Button Back"></img>&nbsp;</a>
                            </div>
                            <div className="form-title">
                                Daftar
                            </div>
                            <div className="Nama">
                                <label className="form__label" htmlFor="Name">Nama </label>
                                <input className="form__input" type="text" ref={nameField} placeholder="Nama Lengkap" />
                            </div>
                            <div className="email">
                                <label className="form__label" htmlFor="email">Email </label>
                                <input type="email" ref={emailField} className="form__input" placeholder="Contoh: johndee@gmail.com" />
                            </div>
                            <div className="password">
                                <label className="form__label" htmlFor="password">Password </label>
                                <input className="form__input" type="password" ref={passwordField} placeholder="Masukkan Password" />
                            </div>
                        </div>
                        <div className="footer">
                            <button type="submit" className="btn-register" style={{ justifyContent: 'center', alignItems: 'center' }}>Daftar</button>
                            <div className="login-direct">
                                Sudah punya akun? &nbsp;
                                <a href='/login' style={{ color: '#7126B5', fontWeight: 'bold' }}>Masuk di sini</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}
export default RegistrationPage;