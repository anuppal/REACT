import { createContext, useEffect, useState } from 'react';
import Product from "../model/Product";
import axios from 'axios';

type ContextType = {
    products:Product[]
}

// creates a placeholder {context} to store data for react
const ProductContext  = createContext<ContextType>({
    products:[]
});

type Props = {
    children:React.ReactNode
}

export default function ProductProvider(props:Props) {
    let [products, setProducts] = useState<Product[]>([]);
    // this code gets called when first time component is loaded
    useEffect(() => {
        axios.get("http://localhost:1234/products").then(response => {
            setProducts(response.data);
        });
    }, []);

    return <div>
        <ProductContext.Provider value={{products}}>
            {props.children}
        </ProductContext.Provider>
    </div>
}

export {ProductContext};