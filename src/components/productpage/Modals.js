import { useState } from "react"

const Modals = (props) => {
    const saveOffer = () => {
        if(props.onSave){
            props.onSave(price)
        }
    }
    const {product} = props
    const [price, setPrice] = useState(0)

    return (
        <>
        <div className="modal fade" id="modalBuyer" tabIndex="-1" aria-labelledby="modalBuyerLabel" aria-hidden="true">
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
                                        <img src={product?.photos[0]} className="seller-image d-block" alt="Product Buy"/>
                                    </div>
                                    <div className="col-md-10">
                                        <h5 className="card-title-product" style={{marginBottom: 4}}>{product?.name}</h5>
                                        <p className="card-text-product">Rp. {product?.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="input-tawar">
                            <h6 className="input-modal">Harga Tawar</h6>
                            <input className="form-control-tawar" type="text" placeholder="Rp 0,00" aria-label="default input example" value={price} onChange={e=>setPrice(e.target.value)}></input>
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