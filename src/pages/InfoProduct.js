import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import api from "../lib/api"
import '../components/css/style.css'


const InfoProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({});
    const [photos, setPhotos] = useState([])
    const nameField = useRef("");
    const priceField = useRef("");
    const categoryField = useRef("");
    const descriptionField = useRef("");
    const fileInputRef = useRef();

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const setphotoField = async (file) => {
        try {
            const form = new FormData();
            form.append("file", file)

            const image = await api.post("/api/v1/uploadphotoproduct", form, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            const oldPhotos = [...photos, image.data.path]
            setPhotos(oldPhotos)
        } catch (e) {

        }
    }

    const getProduct = async () => {
        try {
            const responseProduct = await api.get(`/api/v1/product/${id}`)

            const dataProduct = await responseProduct.data.product;
            setData(dataProduct)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {

        getProduct();
    }, [id])

    const onPost = async (e) => {
        e.preventDefault();
        try {

            const postPayload = {
                name: nameField.current.value,
                price: priceField.current.value,
                category: parseInt(categoryField.current.value),
                description: descriptionField.current.value,
                photo: photos,

            }

            if (id) {
                const postRequest = await api.put(
                    `/api/v1/updateproduct/${id}`, postPayload);

                if (postRequest.status) {
                    setData(postRequest.data.newProduct);
                    navigate(`/listproduct`)
                } else {
                    setErrorResponse({
                        isError: true,
                        message: postRequest.data.message
                    })
                }
            } else {
                const postRequest = await api.post(
                    "/api/v1/newproduct", postPayload);

                if (postRequest.status === 201) {
                    setData(postRequest.data.newProduct);
                    navigate(`/`)
                } else {
                    setErrorResponse({
                        isError: true,
                        message: postRequest.data.message
                    })
                }
            }

        } catch (err) {
            if (err.response) {
                console.log(err);
                const response = err.response.data;

                setErrorResponse({
                    isError: true,
                    message: response.message,
                });
            } else {
                setErrorResponse({
                    isError: true,
                    message: err.message
                })
            }
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top d-none d-sm-block" style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)" }}>
                <div className="container">
                    <a className="navbar-brand me-auto" id="logo" href="/">&nbsp;</a>
                </div>
            </nav>
            <div className='container info-prd'>
                <div className='row satu'>
                    {errorResponse.isError && (
                        <Alert variant="danger">{errorResponse.message}</Alert>
                    )}
                    <div className='col-md-3' style={{ marginBottom: '2rem' }}>
                        <a href='/'><i className="bi bi-arrow-left offset-md-5" style={{ fontSize: '1.5rem', color: 'black' }}></i></a>
                        <span className='title'><center style={{ marginTop: '-1.875rem' }}>Lengkapi Detail Product</center></span>
                    </div>
                    <form action='' onSubmit={onPost} className='col-md-6'>
                        <div className="col-md mb-3">
                            <label htmlFor="nm_produk" className="form-label">Nama Produk</label>
                            <input type="type" className="form-control" defaultValue={data.name} ref={nameField} placeholder="Nama Produk" />
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="harga_produk" className="form-label">Harga Produk</label>
                            <input type="type" className="form-control" defaultValue={data.price} ref={priceField} placeholder="Rp 0,00" />
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="kategori" className="form-label">Kategori</label>
                            <select className="form-control" ref={categoryField}>
                                <option value="0">Pilih Kategori</option>
                                <option value="1" selected={data.category === "Hobi" ? "selected" : ""}>Hobi</option>
                                <option value="2" selected={data.category === "Kendaraan" ? "selected" : ""}>Kendaraan</option>
                                <option value="3" selected={data.category === "Baju" ? "selected" : ""}>Baju</option>
                                <option value="4" selected={data.category === "Elektronik" ? "selected" : ""}>Elektronik</option>
                                <option value="5" selected={data.category === "Kesehatan" ? "selected" : ""}>Kesehatan</option>
                            </select>
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="deskripsi" className="form-label">Deskripsi</label>
                            <textarea className="form-control" defaultValue={data.description} ref={descriptionField} rows={3} placeholder='Contoh: Jalan Ikan Hiu 33'></textarea>
                        </div>
                        <div className="col-md mb-3">
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label htmlFor="foto" className="form-label">Foto Produk<br /><img src='/assets/img/Group_1.png' alt='' />
                                        <input type={'file'} id="foto" accept=".jpg,.png" ref={fileInputRef}
                                            onChange={(e) => {
                                                setphotoField(e.target.files[0])
                                            }} hidden />
                                    </label>
                                </div>
                                <div className='col-md-9'>
                                    {/* looping foto */}
                                    <div className="row">
                                        <div className="col">
                                            <img className='mt-4' src={data.photos} width="100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-6 mb-3 d-grid">
                                <button className="btn btn-outline-primary" type="submit">Preview</button>
                            </div>
                            <div className="col-6 mb-3 d-grid">
                                {(() => {
                                    if (id) {
                                        return (
                                            <button type="submit" className="btn btn-primary" onClick={(e) => onPost(e, true)}>Update</button>
                                        )
                                    }
                                    return (
                                        <button type="submit" className="btn btn-primary" onClick={(e) => onPost(e, true)}>Terbitkan</button>
                                    )
                                })()}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
        
    )
}

export default InfoProduct
