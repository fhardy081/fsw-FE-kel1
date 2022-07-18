import React from "react";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Row, Nav, Navbar, Form, Container, Button, Alert } from "react-bootstrap";
import { useNavigate, Navigate, useParams, Link } from "react-router-dom";

import '../components/css/style.css'

const InfoProduct = () => {
    const navigate = useNavigate();
    const userRedux = useSelector(selectUser);
    const { id } = useParams();
    const [data, setData] = useState([]);
    const nameField = useRef("");
    const priceField = useRef("");
    const categoryField = useRef("");
    const descriptionField = useRef("");
    const [pictureField, setpictureField] = useState([]);
    const [sold, setSold] = useState(Boolean);
    const fileInputRef = useRef();

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const onPost = async (e, isPublished) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            const postPayload = new FormData();
            postPayload.append("name", nameField.current.value);
            postPayload.append("price", priceField.current.value);
            postPayload.append("category", categoryField.current.value);
            postPayload.append("description", descriptionField.current.value);
            postPayload.append("picture", pictureField);
            postPayload.append("isPublished", isPublished);
            postPayload.append("sold", sold);

            const postRequest = await axios.post(
                "http://localhost:2000/v1/product",
                postPayload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            // console.log(postRequest);
            const postResponse = postRequest.data;
            // console.log(postResponse)

            if (postResponse.status) {
                setData(postResponse.data.created_product);
                const endpointid = postResponse.data.created_product.user_id;
                
                if (isPublished) navigate("/");
                else navigate(`/listproduct/${endpointid}`)
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
                    <div className='col-md-3' style={{ marginBottom: '2rem' }}>
                        <a href=''><i className="bi bi-arrow-left offset-md-5" style={{ fontSize: '1.5rem', color: 'black' }}></i></a>
                        <span className='title'><center style={{ marginTop: '-1.875rem' }}>Lengkapi Detail Product</center></span>
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
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label htmlFor="foto" className="form-label">Foto Produk<br /><img src='/assets/img/Group_1.png' alt='' /><input id="foto" type={'file'} accept=".jpg,.png" hidden /></label>
                                </div>
                                <div className='col-md-3'>
                                    {/* looping foto */}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-6 mb-3 d-grid">
                                <a href='#' className="btn btn-outline-primary">Preview</a>
                            </div>
                            <div className="col-6 mb-3 d-grid">
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