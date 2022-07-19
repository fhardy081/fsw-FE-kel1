import '../components/css/info-profil.css'
import axios from "axios";
import { useNavigate, Navigate} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import api from "../lib/api"


function InfoProfil () {
    const navigate = useNavigate();
        const [isLoggedIn, setIsLoggedIn] = useState(true);
        const [user, setUser] = useState({});
        const [data, setData] = useState([]);
        const nameField = useRef("");
        const cityField = useRef("");
        const addressField = useRef("");
        const phoneField = useRef("");
        const [photoField, setpictureField] = useState();
        const fileInputRef = useRef();
    
        const [errorResponse, setErrorResponse] = useState({
            isError: false,
            message: "",
        });
    
    
        const getUsers = async () => {
            try {
                const token = localStorage.getItem("token");
                const responseUsers = await axios.get(`api/v1/user/whoami/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                const dataUsers = await responseUsers.data.data;
                setData(dataUsers)
            } catch (err) {
            }
        }
    
        const onUpdate = async (e) => {
            e.preventDefault();
    
            try {
                const token = localStorage.getItem("token");
    
                const userToUpdatePayload = new FormData();
                userToUpdatePayload.append("name", nameField.current.value);
                userToUpdatePayload.append("city", cityField.current.value);
                userToUpdatePayload.append("address", addressField.current.value);
                userToUpdatePayload.append("phone_number", phoneField.current.value);
                userToUpdatePayload.append("photo_id", photoField);
    
    
                const updateRequest = await axios.put(
                    `api/v1/update/${data.id}`,
                    userToUpdatePayload,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                console.log(updateRequest)
                
                const updateResponse = updateRequest.data;
                console.log(updateResponse)
    
                console.log(updateResponse.status)
                if (updateResponse.status) navigate("/");
    
    
    
            } catch (err) {
                const response = err.response.data;
                setErrorResponse({
                    isError: true,
                    message: response.message,
                });
            }
        };
    
        // const validateLogin = async () => {
        //     try {
        //         const currentUserRequest = await api.get(
        //             "/api/v1/whoami");

        //         const currentUserResponse = currentUserRequest.data;

        //         if (currentUserResponse.status) {
        //             setUser(currentUserResponse.data.user);
        //         }
        //     } catch (err) {
        //         setIsLoggedIn(false);
        //     }
        // };
        // validateLogin();

    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    //Pengecekan status login dengan pengambilan token dari localStorage
                    const token = localStorage.getItem("token");
    
                   //Validasi token API
                    const currentUserRequest = await api.get(
                        "api/v1/user/whoami/",
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
    
                    const currentUserResponse = currentUserRequest.data;
    
                    if (currentUserResponse.status) {
                        setUser(currentUserResponse.data.user);
                    }
                } catch (err) {
                    setIsLoggedIn(false);
                }
            };
    
            fetchData();
            getUsers();
        }, [])

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
                        <a href='/'><i className="bi bi-arrow-left offset-md-5" style={{ fontSize: '1.5rem', color: 'black' }}></i></a>
                        <span className='title'><center style={{ marginTop: '-1.875rem' }}>Lengkapi Info Akun</center></span>
                    </div>
                    <form action='#' className='col-md-6'>
                        <div className="col-md mb-3">
                            <center><label><img src='/assets/img/Group_2.png' alt='' /><input id="foto_profil" type={'file'} accept=".jpg,.png" ref={fileInputRef} onChange={(e) => {
                                setpictureField(e.target.files[0])
                            }} hidden /></label></center>
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="nm_produk" className="form-label">Nama<span style={{ color: "red" }}>*</span></label>
                            <input type="type" className="form-control" id="nama" placeholder="Nama" ref={nameField} defaultValue={data.name}/>
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="kategori" className="form-label">Kota<span style={{ color: "red" }}>*</span></label>
                            <select class="form-control" id="kota">
                                <option>Pilih Kota</option>
                                <option ref={cityField}>1</option>
                                <option ref={cityField}>2</option>
                                <option ref={cityField}>3</option>
                                <option ref={cityField}>4</option>
                            </select>
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="deskripsi" className="form-label">Alamat<span style={{ color: "red" }}>*</span></label>
                            <textarea class="form-control" id="alamat" rows="3" placeholder='Contoh: Jalan Ikan Hiu 33' ref={addressField} defaultValue={data.address}></textarea>
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="nm_produk" className="form-label">Nomor<span style={{ color: "red" }}>*</span></label>
                            <input type="type" className="form-control" id="no_hp" placeholder="contoh: +628123456789" ref={phoneField} defaultValue={data.phone_number}/>
                        </div>
                        <div className="mb-5 d-grid">
                            <button type="submit" className="btn btn-primary" onSubmit={onUpdate}>Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ) 
    }

export default InfoProfil;