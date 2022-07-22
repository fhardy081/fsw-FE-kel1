import React from "react";

const DescriptionProduct = (props) => {
    const {product} = props

    return (
    <>
    <div className="card-description mx-auto" id="cardProductPage">
        <div className="card-body-description">
            <h5 className="card-title">Deskripsi</h5>
                <p className="card-text">{product?.description}</p>
        </div>
    </div>
    </>
  );
};

export default DescriptionProduct;
