import { useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../../lib/api"

export default function DetailProduct(props) {
    const { product } = props
    const { user } = props
    const { hasoffer } = props
    

    return (<>
        {product.user_id === user.id ?
        <>
            <a href="/" className="btn btn-primary btn-terbitkan d-none" id="buttonproductPage" onClick={e => props.onClick(e)} data-bs-toggle="alert">Terbitkan</a>
            <Link to={`/infoproduct/${product.id}`} className="btn btn-primary btn-edit">Edit</Link>
        </>
        :
        <a href="/" className={hasoffer?"btn btn-primary btn-terbitkan disabled":"btn btn-primary btn-terbitkan"} disabled={hasoffer} data-bs-toggle="modal" data-bs-target="#modalBuyer">
            {hasoffer ? "Menunggu respon penjual" : "Saya tertarik dan ingin nego"}</a>
        }
    </>)
}