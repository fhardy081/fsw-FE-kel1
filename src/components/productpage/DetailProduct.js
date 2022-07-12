export default function DetailProduct(props) {

    const { product } = props
    const { user } = props
    const { hasoffer } = props
    
    return (<>
        {product.user_id === user.id ?
        <>
            <a href="/" className="btn btn-primary btn-terbitkan" id="buttonproductPage" onClick="alert" data-bs-toggle="alert">Terbitkan</a>
            <a href="/" className="btn btn-primary btn-edit">Edit</a>
        </>
        :
        <a href="/" className={hasoffer?"btn btn-primary btn-terbitkan disabled":"btn btn-primary btn-terbitkan"} disabled={hasoffer} data-bs-toggle="modal" data-bs-target="#modalBuyer">
            {hasoffer ? "Menunggu respon penjual" : "Saya tertarik dan ingin nego"}</a>
        }
    </>)
}