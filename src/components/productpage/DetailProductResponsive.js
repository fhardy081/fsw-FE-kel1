import { Link } from "react-router-dom"

export default function DetailProductResponsive(props) {

    const { product } = props
    const { user } = props
    const { hasoffer } = props
    
    return (<>
        {product?.user_id === user?.id ?
        <>
            <a className="btn btn-primary btn-terbitkan-responsive fixed-bottom" onClick="alert" data-bs-toggle="alert">Terbitkan</a>
            <Link to={`/infoproduct/${product?.id}`} className="btn btn-primary btn-edit">Edit</Link>
        </>
        :
        <a className={hasoffer ? "btn btn-primary btn-terbitkan-responsive fixed-bottom disabled" : "btn btn-primary btn-terbitkan-responsive fixed-bottom"} disabled={hasoffer} data-bs-toggle="modal" data-bs-target="#modalBuyer">
            {hasoffer ? "Menunggu respon penjual" : "Saya tertarik dan ingin nego"}</a>
        }
    </>)
}