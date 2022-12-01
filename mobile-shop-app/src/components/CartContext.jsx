import { createContext, useContext, useReducer } from "react";
import CartReducer  from "../reducer/CartReducer";
import { ProductContext } from "./ProductContext";
 
export const CartContext = createContext ( );

const initialState = {
    products:[],
    total:0
}

export default function CartProvider(props) {
    let [state, dispatch] = useReducer(CartReducer, initialState);
    let {products}  = useContext(ProductContext);
    function addToCart(id) {
        let prd = products.find(p => p.productId === id);
        dispatch({type:'ADD_TO_CART', payload:prd})
    }
    function increment(id) {
        dispatch({type:'INCREMENT', payload:id})
    }
    return <CartContext.Provider value={
        {cart: state.products, addToCart, increment}}>
        {props.children}
    </CartContext.Provider>
}