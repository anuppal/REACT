import axios from "axios";
import { MutableRefObject, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Product from "../model/Product";

export default function ProductForm() {
    let [id, setId] = useState<number>(0);
    let [name, setName] = useState<string>("");
    let [image, setImage] = useState<string>("");
    let [price, setPrice] = useState<number>(0);

    function submit() {
        let product:Product = {
            id: id,
            productId: id,
            productDescription: "some Description....",
            productName : name,
            productPrice : price,
            productQuantity: 100,
            productSeller : "Apple",
            ratings: 5,
            productImageUrl: image
        }
        axios.post("http://localhost:1234/products", product).then(response => {
            console.log(response);
        })
    }
    return <div className="container">
        <form>
            ID <input type="number" onChange={(evt:any) => setId(evt.target.value)}/> <br />
            Name <input type="text"   onChange={(evt:any) => setName(evt.target.value)}/> <br />
            Price <input type="number"  onChange={(evt:any) => setPrice(evt.target.value)}/> <br />
            Image <input type="text"  onChange={(evt:any) => setImage(evt.target.value)} /> <br />
            <Button variant="success" onClick={() => submit()}>Add Phone</Button> 
        </form>
    </div>
}