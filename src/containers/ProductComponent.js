import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, price, image, description} = product;         
        return (
            <div className="products-wrapper" style={{display: "flex", justifyContent: "center"}}>
                <div style={{border: "1px solid black", padding: 10, borderTop: "none"}}>
                    <div className="title" style={{width: 250, marginBottom: 10}}>
                        <h2>{title}</h2>
                    </div>
                    <div className="image" style={{width: 250, marginBottom: 10, display: "flex", justifyContent: "center"}}>
                        <img src={image} alt="" style={{width: 100}} />
                    </div>
                    <div className="id" style={{marginBottom: 10}} >
                       Id: {id}
                    </div>
                    <div className="desc" style={{width: 250, marginBottom: 10, color: "red"}}>
                        <p>{description}</p>
                    </div>
                    <div className="price">
                        <p>$ {price}</p>
                    </div>
                </div>
            </div>
        )
    })
    
    return (
      <>
        {renderList}
      </>
    )
}

export default ProductComponent;