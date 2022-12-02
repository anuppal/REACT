import axios from "axios";
import { MutableRefObject, useRef } from "react";
import { Button } from "react-bootstrap";
import Product from "../model/Product";

export default function ProductForm() {
    const idRef = useRef() as MutableRefObject<HTMLInputElement>;
    const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
    const priceRef = useRef() as MutableRefObject<HTMLInputElement>;
    const imgRef = useRef() as MutableRefObject<HTMLInputElement>;

    function submit() {
        let product:Product = {
            id: +idRef.current.value,
            productId: +idRef.current.value,
            productDescription: "some Description....",
            productName : nameRef.current.value,
            productPrice : +priceRef.current.value,
            productQuantity: 100,
            productSeller : "Apple",
            ratings: 5,
            productImageUrl: imgRef.current.value
        }
        axios.post("http://localhost:1234/products", product).then(response => {
            console.log(response);
        })
    }
    return <div className="container">
        <form>
            ID <input type="number" ref={idRef}/> <br />
            Name <input type="text" ref={nameRef}/> <br />
            Price <input type="number"ref={priceRef} /> <br />
            Image <input type="text" ref={imgRef}/> <br />
            <Button variant="success" onClick={() => submit()}>Add Phone</Button> 
        </form>
    </div>
}