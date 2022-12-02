import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Product from "../model/Product";

export default function Details() {
    
    let [product, setProduct] = useState<Product>();
    let { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:1234/products?productId=${id}`).then(response => {
            console.log(response.data);
            setProduct(response.data[0]);
        })
    }, [id]); // invoke everytime when id changes

    if (product != null) {
        return <div>
            <h1>Details of {id}</h1>
            <div>
                Name : {product!.productName} <br />
                Description :   {product!.productDescription} <br />
                Price : {product!.productPrice} <br />
                <img src={product?.productImageUrl} />
            </div>
        </div>
    } else {
        return <h1>Product Doesn't exist!!!</h1>
    }
}