import React from "react";
import { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../lib/api"
import '../components/css/style.css'

const InfoProduct = () => {
    const navigate = useNavigate();
    const [setData] = useState([]);
    const nameField = useRef("");
    const priceField = useRef("");
    const categoryField = useRef("");
    const descriptionField = useRef("");
    const [photoField, setphotoField] = useState([]);
    const fileInputRef = useRef();
    const [is_sold] = useState(Boolean);

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const onPost = async (e) => {
        e.preventDefault();

        try {
            const postPayload = new FormData();
            postPayload.append("name", nameField.current.value);
            postPayload.append("price", priceField.current.value);
            postPayload.append("category_id", categoryField.current.value);
            postPayload.append("description", descriptionField.current.value);
            postPayload.append("photo", photoField);
            postPayload.append("is_sold", is_sold);

            const postRequest = await api.post(
                "/api/v1/newproduct", postPayload);

            const postResponse = postRequest.data;

            if (postRequest.status) {
                setData(postRequest.data.newProduct);
                // const endpointid = postResponse.data.newProduct.user_id;

                navigate(`/listproduct`)
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
                        <a href=''><i className="bi bi-arrow-left offset-md-5" style={{ fontSize: '1.5rem', color: 'black' }}></i></a>
                        <span className='title'><center style={{ marginTop: '-1.875rem' }}>Lengkapi Detail Product</center></span>
                    </div>
                    <form action='#' className='col-md-6' enctype="multipart/form-data">
                        <div className="col-md mb-3">
                            <label htmlFor="nm_produk" className="form-label">Nama Produk</label>
                            <input type="type" className="form-control" ref={nameField} placeholder="Nama Produk" />
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="harga_produk" className="form-label">Harga Produk</label>
                            <input type="type" className="form-control" ref={priceField} placeholder="Rp 0,00" />
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="kategori" className="form-label">Kategori</label>
                            <select class="form-control" ref={categoryField}>
                                <option>Pilih Kategori</option>
                                <option value="Hobi">Hobi</option>
                                <option value="Kendaraan">Kendaraan</option>
                                <option value="Baju">Baju</option>
                                <option value="Elektronik">Elektronik</option>
                                <option value="Kesehatan">Kesehatan</option>
                            </select>
                        </div>
                        <div className="col-md mb-3">
                            <label htmlFor="deskripsi" className="form-label">Deskripsi</label>
                            <textarea class="form-control" ref={descriptionField} rows={3} placeholder='Contoh: Jalan Ikan Hiu 33'></textarea>
                        </div>
                        <div className="col-md mb-3">
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label htmlFor="foto" className="form-label" onClick={(e) => {
                                        e.preventDefault(); fileInputRef.current.click();
                                    }}>Foto Produk<br /><img src='/assets/img/Group_1.png' alt='' />
                                        <input type={'file'} accept=".jpg,.png" ref={fileInputRef}
                                            onChange={(e) => {
                                                setphotoField(e.target.files[0])
                                            }} hidden />
                                    </label>
                                </div>
                                <div className='col-md-3'>
                                    {/* looping foto */}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-6 mb-3 d-grid">
                                <button className="btn btn-outline-primary" onClick={(e) => onPost(e, false)} type="submit">Preview</button>
                            </div>
                            <div className="col-6 mb-3 d-grid">
                                <button type="submit" className="btn btn-primary" onClick={(e) => onPost(e, true)}>Terbitkan</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default InfoProduct