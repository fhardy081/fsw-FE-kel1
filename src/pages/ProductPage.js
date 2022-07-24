import React, { useEffect, useState } from 'react';
import DetailProduct from '../components/productpage/DetailProduct';
import DetailProductResponsive from '../components/productpage/DetailProductResponsive';
import Modals from '../components/productpage/Modals';
import CarouselProduct from '../components/productpage/CarouselProduct';
import Navbar from '../components/Navbar';
import DescriptionProduct from '../components/productpage/DescriptionProduct';
import { useParams } from 'react-router-dom';
import api from "../lib/api";

const ProductPage = () => {
    const param = useParams()
    const [ user, setUser] = useState({})
    const [ product, setProduct] = useState({})
    const [ hasoffer, setHasoffer] = useState(true)
    const [showAlert, setShowAlert] = useState(false)
    const [data, setData] = useState({
        name: "...",
        price: 0,
        user_name: "...",
        category: "...",
        description: "...",
        photos: []
    })
    const submitOffer = async(price) => {
        try{
            const res = await api.post(`/api/v1/offerproduct/${param.id}`, {
                price: price
            })
        } catch(e){

        }
        setShowAlert(true)
    }
    const onPublish = (e) =>{
        e.preventDefault()

    }

    useEffect(() => {
        api.get(`/api/v1/checkoffer/${param.id}`).then(res=>{
            if(res.data.is_offered === true){
                setHasoffer(true)
            }
        })
    },[param])


    useEffect(()=>{
        setHasoffer(false)
        setShowAlert(false)
    }, [])
    
    const getUsers = async () => {
        try {
            const responseUsers = await api.get(`/api/v1/whoami`);
            const dataUsers = responseUsers.data.user_data;
            setUser(dataUsers)
        } catch (e) {
        }
    }

    useEffect(() => {
    const getProducts = async () => {
        try {
            const responseUsers = await api.get(`/api/v1/product/${param.id}`);
            const dataProducts = responseUsers.data.product;
            setData(dataProducts)
            console.log(dataProducts)
        } catch (e) {
        }
        
        }
        getProducts();
        getUsers()
    }, [param])

    return (
        <div id='product-page'>
        <Navbar/>

        <div className="container container-product-page" style={{marginTop: 40}}>
            <div className="row" style={{'--bs-gutter-x' : 0}}>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <CarouselProduct photos={data.photos}/>
                    <DescriptionProduct product={data}/>
                </div>
                <div className="col-md-4">
                    <div className="card-product mx-auto">
                        <div className="card-body">
                            <h5 className="card-title-name">{data.name}</h5>
                            <p className="card-text-category">{data.category}</p>
                            <h4 className="card-title-price">Rp. {data.price.toLocaleString()}</h4>
                            {/* <a href="/" className="btn btn-primary btn-terbitakan" data-bs-toggle="modal" data-bs-target="#exampleModal">Terbitakan</a>
                            <a href="/" className="btn btn-primary btn-edit">Edit</a> */}
                            <DetailProduct user={user} product={data} hasoffer={hasoffer} onClick={e => onPublish(e)}/>
                        </div>
                    </div>
                    <div className="card-seller">
                        <div className="card-body-seller">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src="/assets/images/image_seller.png" className="seller-image d-block" alt="Seller"/>
                                </div>
                                <div className="col-md-10">
                                    <h5 className="card-title-name-seller" style={{marginBottom: 4}}>{data.user_name}</h5>
                                    <p className="card-text-city">{data.city}</p>
                                </div>
                            </div>                      
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
            <Modals product={data} onSave={(price) => submitOffer(price) }/>
            <DetailProductResponsive user={user} product={product} hasoffer={hasoffer}/>
            
        </div>
        <div className={`alert alert-success alert-dismissible alert-buyer fade ${showAlert ? 'show' : ''}`} role="alert">
                Harga tawarmu berhasil dikirim ke penjual
                <button type="button" className="btn-close" onClick={()=> setShowAlert(false)} aria-label="Close"></button>
        </div>
        <div className='button-back'>
            <button type="button" className="btn-back-responsive fas fa-arrow-left fixed-top" aria-label="Back"></button>
        </div>
        
        </div>
           
    )    
}
export default ProductPage;