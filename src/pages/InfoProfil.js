import '../components/css/info-profil.css'
import { useNavigate, Navigate} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import api from "../lib/api"
import iconPhoto from "../Assets/Group_2.png"


function InfoProfil () {
    const navigate = useNavigate();
        const [isLoggedIn, setIsLoggedIn] = useState(true);
        const [user, setUser] = useState({});
        const [data, setData] = useState({});
        const [photos,setPhotos] = useState(iconPhoto)
        const nameField = useRef("");
        const cityField = useRef("");
        const addressField = useRef("");
        const phoneField = useRef("");
        // const [photoField, setpictureField] = useState();
        const fileInputRef = useRef();
    
        const [errorResponse, setErrorResponse] = useState({
            isError: false,
            message: "",
        });
    
    
        const getUsers = async () => {
            try {
                const responseUsers = await api.get(`/api/v1/whoami`,
                    {
                        // headers: {
                        //     Authorization: `Bearer ${token}`,
                        // },
                    });
                const dataUsers = responseUsers.data.user_data;
                setData(dataUsers)
            } catch (err) {
            }
        }

        const setphotoField = async (file) => {
            try{
                const form = new FormData();
                form.append("file",file)
                setPhotos(URL.createObjectURL(file))
                const image = await api.post("/api/v1/uploadphoto", form,{
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                })
                // const oldPhotos = [...photos,image.data.path]
                
            }catch (e){
    
            }
        }
    
        const onUpdate = async (e) => {
            e.preventDefault();
    
            try {
                // const token = localStorage.getItem("token");
    
                const userToUpdatePayload = {
                    name: nameField.current.value,
                    city: cityField.current.value,
                    address: addressField.current.value,
                    phone_number: phoneField.current.value,
                    photo: photos.toString(),
                    // photo_id: photoField
                };
    
    
                const updateRequest = await api.put(
                    `/api/v1/update`,userToUpdatePayload)
                console.log(updateRequest)
                console.log(userToUpdatePayload)
                
                // const updateResponse = updateRequest.data.user_data;
                // console.log(updateResponse)
    
                // console.log(updateResponse.status)
                // if (updateResponse.status) navigate("/");
                if (updateRequest.status === 200) {
                    setData(updateRequest.data.user_data);
                    navigate(`/`)
                }else{
    
                    setErrorResponse({
                        isError: true,
                        message: updateRequest.data.message
                    })
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

    
        useEffect(() => {
            const fetchData = async () => {
                try {
    
                   //Validasi token API
                    const currentUserRequest = await api.get(
                        "/api/v1/whoami")
    
                    const currentUserResponse = currentUserRequest.data;
    
                    if (currentUserResponse.status) {
                        setUser(currentUserResponse.data.user_data);
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
                    {errorResponse.isError && (
                        <Alert variant="danger">{errorResponse.message}</Alert>
                    )}
                    <div className='col-md-3' style={{ marginBottom: '2rem' }}>
                        <a href='/'><i className="bi bi-arrow-left offset-md-5" style={{ fontSize: '1.5rem', color: 'black' }}></i></a>
                        <span className='title'><center style={{ marginTop: '-1.875rem' }}>Lengkapi Info Akun</center></span>
                    </div>
                    <form action='#' className='col-md-6'>
                        <div className="col-md mb-3">
                            <center><label><img src={photos} alt='' style={{maxWidth: 100, maxHeight: 100, borderRadius: 10}}/>
                            <input id="foto_profil" type={'file'} accept=".jpg,.png" ref={fileInputRef} 
                            onChange={(e) => {
                                setphotoField(e.target.files[0])
                            }} hidden /></label></center>
                            {/* <img src={photos} alt="Photos"/> */}
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="nm_produk" className="form-label">Nama<span style={{ color: "red" }}>*</span></label>
                            <input type="type" className="form-control" id="nama" placeholder="Nama" ref={nameField} defaultValue={data.name}/>
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="kategori" className="form-label">Kota<span style={{ color: "red" }}>*</span></label>
                            <select class="form-control" id="kota" ref={cityField} defaultValue={data.city}>
                                <option value="0">Pilih Kota</option>
                                <option value="1">DKI Jakarta</option>
                                <option value="2">Kota Depok</option>
                                <option value="3">Bali</option>
                                <option value="4">Yogyakarta</option>
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
                            <button type="submit" className="btn btn-primary" onClick={(e) => onUpdate(e, true)}>Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ) 
    }

export default InfoProfil;