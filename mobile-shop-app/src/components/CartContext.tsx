import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import ICart from "../model/Cart";
import CartReducer  from "../reducer/CartReducer";
import { ProductContext } from "./ProductContext";
// import { useNavigate } from "react-router-dom";


type ContextType = {
    cart: ICart[],
    addToCart: (id: number) => void,
    increment: (id:number) => void,
    checkout: () => void
}

export const CartContext = createContext<ContextType>({
    cart: [],
    addToCart: (id: number) => {},
    increment: (id:number) => {},
    checkout:() => {}
});

const initialState = {
    products:[],
    total:0
}
type Props = {
    children: React.ReactNode
}

export  default function CartProvider(props:Props) {
    // const navigate = useNavigate();
    let [state, dispatch] = useReducer(CartReducer, initialState);
    let {products}  = useContext(ProductContext); // data from server
    function addToCart(id:number) {
        let prd = products.find(p => p.productId === id)!;
        dispatch({type:'ADD_TO_CART', payload:prd})
    }
    function increment(id:number) {
        dispatch({type:'INCREMENT', payload:id})
    }

    function checkout() {
        let order:any = {};
        order.customer = window.sessionStorage.getItem("user");
        order.order_date =  new Date();
       // order.items = state.products.map(p =>  state.products);
        order.items = state.products;

        axios.post("http://localhost:1234/orders", order).then(response => {
            console.log("order placed!!!");
            dispatch({type:'CLEAR_CART'});
            // navigate("/products");
        });
    }

    return <CartContext.Provider value={
        {cart: state.products, addToCart, increment, checkout}}>
        {props.children}
    </CartContext.Provider>
}