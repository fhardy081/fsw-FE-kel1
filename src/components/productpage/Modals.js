import React, { useState } from 'react';

const Modals = (props) => {
    // const [showModal, setShowModal] = useState (false)
    const saveOffer = () => {
        if(props.onSave){
            props.onSave()
        }
    }


    return (
        <>
        <div className="modal fade" id="modalBuyer" tabindex="-1" aria-labelledby="modalBuyerLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">                        
                        <button type="button" className="btn-close-tawar" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h5 className="modal-title" id="modalBuyerLabel">Masukkan Harga Tawarmu</h5>
                        <p className="modal-text">Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
                        <div className="card-product-modal">
                            <div className="card-body-product">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="assets/images/image_seller.png" className="seller-image d-block" alt="Product Buy"/>
                                    </div>
                                    <div className="col-md-10" style={{paddingTop: 16, paddingBottom: 16, paddingLeft: 32}}>
                                        <h5 className="card-title-product" style={{marginBottom: 4}}>Jam Tangan Casio</h5>
                                        <p className="card-text-product">Rp. 250.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="input-tawar">
                            <h6 className="input-modal">Harga Tawar</h6>
                            <input className="form-control-tawar" type="text" placeholder="Rp 0,00" aria-label="default input example"></input>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary btn-save" onClick={saveOffer} data-bs-dismiss="modal">Simpan</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Modals;