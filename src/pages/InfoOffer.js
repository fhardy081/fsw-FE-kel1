import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../lib/api"

const InfoOffer = () => {
    const { id } = useParams();
    const [finish, setFinish] = useState(1);
    const [offerid, setOfferid] = useState(0);
    const [data, setData] = useState({});
    const [complete, setComplete] = useState(false);
    const [dataa, setDataa] = useState([]);
    const [selectedData, setSelectedData] = useState({
        price: 0,
        bid_price: 0
    });

    const submitOffer = async (e, bid_id, status,offer) => {
        e.preventDefault()
        try {
            await api.put(`/api/v1/updateoffer/${bid_id}`, {
                value: status
            })
            api.get(`/api/v1/useroffer/${id}`).then(res => {
                setData(res.data.bidder_data)
                setDataa([...res.data.products])
            })
            setSelectedData(offer)
        } catch (e) {
            console.log(e);
        }
    }

    const finishOffer = async (e, bid_id, status) => {
        e.preventDefault()
        try {
            await api.put(`/api/v1/finishoffer/${bid_id}`, {
                value: status
            })
            api.get(`/api/v1/useroffer/${id}`).then(res => {
                setData(res.data.bidder_data)
                setDataa([...res.data.products])
            })
            setComplete(true)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        api.get(`/api/v1/useroffer/${id}`).then(res => {
            setData(res.data.bidder_data)
            setDataa([...res.data.products])
        })
    }, [id])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top d-none d-sm-block" style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)" }}>
                <div className="container">
                    <a className="navbar-brand me-auto" id="logo" href="/">&nbsp;</a>
                    <p className="me-auto mb-1">Info Penawar</p>
                </div>
            </nav>
            <div className='container info-bidder'>
                <div className='row satu'>
                    <div className='col-md-3' style={{ marginBottom: '2rem' }}>
                        <a href='/'><i className="bi bi-arrow-left offset-md-5" style={{ fontSize: '1.5rem', color: 'black' }}></i></a>
                        <span className='title'><center style={{ marginTop: '-1.875rem' }}>Info Penawar</center></span>
                    </div>
                    <div className='col-md-6'>
                        {(() => {
                            if (complete === true) {
                                return (
                                    <div className="alert alert-success alert-dismissible fade show mx-auto" role="alert" style={{ backgroundColor: "#73CA5C", borderRadius: "0.75rem", color: "white" }}>
                                        Status produk berhasil diperbarui
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                )
                            }
                        })()}
                        <div className="card">
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-2'>
                                        <img src={data?.photo} width={"100%"} alt={data?.name} />
                                    </div>
                                    <div className='col-10'>
                                        <h6 className="card-title" style={{ fontWeight: "bold" }}>{data?.name}</h6>
                                        <p className="card-text" style={{ fontSize: "0.75rem", color: "#8A8A8A" }}>{data?.city}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className='mt-3' style={{ fontWeight: "bold" }}>Daftar Produkmu yang Ditawar</h6>
                        {
                            dataa?.map((dataa) => {
                                return (
                                    <div className='row mt-3'>
                                        <div className='col-2'>
                                            <img src={dataa?.photo} width={"100%"} alt={dataa?.name} />
                                        </div>
                                        <div className='col-10'>
                                            <div className='row'>
                                                <div className='col'>
                                                    <span className="card-title" style={{ fontSize: "0.75rem", color: "#8A8A8A" }}>{dataa?.title}</span>
                                                </div>
                                                <div className='col'>
                                                    <span className="card-title float-end" style={{ fontSize: "0.75rem", color: "#8A8A8A" }}>{dataa?.date.replace(/T.*/,"")}</span>
                                                </div>
                                            </div>
                                            <h6 className="card-title">{dataa?.name}</h6>
                                            <h6 className="card-title" style={{ textDecoration: "line-through" }}>{'Rp. ' + dataa?.price.toLocaleString()}</h6>
                                            <h6 className="card-title">{'Ditawar ' + dataa?.bid_price.toLocaleString()}</h6>
                                            <div className='row mb-3'>
                                                {( () => {
                                                    if (dataa?.status === true) {
                                                        if (dataa?.is_sold === true) {
                                                            return(<></>)
                                                        }
                                                        return (
                                                            <div className='col-md-8 offset-md-4 row'>
                                                                <button className='btn btn-outline-primary col me-2' style={{ color: 'black', borderRadius: "1rem" }} data-bs-toggle="modal" data-bs-target="#exampleModalHubungi" onClick={e => setOfferid(dataa?.id)}>Status</button>
                                                                <a href={`https://wa.me/${data?.phone_number}?text=Hai%20saya%20dari%20SecondHand`} target="_blank" className='btn btn-primary col' style={{ borderRadius: "1rem" }}>Hubungi di <i className='bi bi-whatsapp'></i></a>
                                                            </div>
                                                        )
                                                    }
                                                    return (
                                                        <div className='col-md-8 offset-md-4 row'>
                                                            <button className='btn btn-outline-primary col me-2' style={{ color: 'black', borderRadius: "1rem" }} onClick={e => submitOffer(e, dataa?.id, 0)}>Tolak</button>
                                                            <button className='btn btn-primary col' style={{ borderRadius: "1rem" }} data-bs-toggle="modal" data-bs-target="#exampleModalTerima" onClick={e => submitOffer(e, dataa?.id, 1,dataa)}>Terima</button>
                                                        </div>
                                                    )
                                                })()}
                                            </div>
                                        </div>

                                        <hr />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModalTerima" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" style={{ width: "22.5rem" }}>
                    <div className="modal-content" style={{ borderRadius: "1rem" }}>
                        <div className="modal-body">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button><br />
                            <h6 className='title mt-3' style={{ fontWeight: "bold" }}>Yeay kamu berhasil mendapat harga yang sesuai</h6>
                            <p className='card-text'>Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>
                            <div className="card mb-3 bgc" style={{ borderRadius: "1rem" }}>
                                <div className="card-body">
                                    <h6 className='text-center mb-4' style={{ fontWeight: "bold" }}>Product Match</h6>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={data?.photo} width={"100%"} alt={data?.name} />
                                        </div>
                                        <div className='col-10'>
                                            <h6 className="card-title" style={{ fontWeight: "bold" }}>{data?.name}</h6>
                                            <p className="card-text" style={{ fontSize: "0.75rem", color: "#8A8A8A" }}>{data?.city}</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-2'>
                                            <img src={selectedData?.photo} width={"100%"} alt={selectedData?.name} />
                                        </div>
                                        <div className='col-10'>
                                            <h6 className="card-title">{selectedData?.name}</h6>
                                            <h6 className="card-title" style={{ textDecoration: "line-through" }}>{'Rp. ' + selectedData?.price.toLocaleString()}</h6>
                                            <h6 className="card-title">{'Ditawar ' + selectedData?.bid_price.toLocaleString()}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-grid'>
                                <a href={`https://wa.me/${data?.phone_number}?text=Hai%20saya%20dari%20SecondHand`} target="_blank" className="btn btn-primary" style={{ borderRadius: "1rem" }}>Hubungi via Whatsapp <i className='bi bi-whatsapp float-end'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModalHubungi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" style={{ width: "22.5rem" }}>
                    <div className="modal-content" style={{ borderRadius: "1rem" }}>
                        <div className="modal-body">
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button><br />
                            <h6 className='title mt-3' style={{ fontWeight: "bold" }}>Perbarui status penjualan produkmu</h6>
                            <form className="mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="is_sold" value="1" checked onChange={e => setFinish(1)} />
                                    <label className="form-check-label">
                                        Berhasil Terjual
                                    </label>
                                    <p className="card-text">Kamu telah sepakat menjual produk ini kepada pembeli</p>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="is_sold" value="0" onChange={e => setFinish(0)} />
                                    <label className="form-check-label">
                                        Batalkan Transaksi
                                    </label>
                                    <p className="card-text">Kamu membatalkan transaksi produk ini dengan pembeli</p>
                                </div>
                            </form>
                            <div className='d-grid'>
                                <button className="btn btn-primary" type="submit" style={{ borderRadius: "1rem" }} onClick={(e) => finishOffer(e, offerid, finish)}>Kirim</button>
                                {/* <a href='/' className="btn btn-secondary" style={{ borderRadius: "1rem" }}>Kirim</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default InfoOffer
