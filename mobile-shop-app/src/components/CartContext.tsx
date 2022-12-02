import { createContext, useContext, useReducer } from "react";
import ICart from "../model/Cart";
import CartReducer  from "../reducer/CartReducer";
import { ProductContext } from "./ProductContext";

type ContextType = {
    cart: ICart[],
    addToCart: (id: number) => void,
    increment: (id:number) => void
}

export const CartContext = createContext<ContextType>({
    cart: [],
    addToCart: (id: number) => {},
    increment: (id:number) => {}
});

const initialState = {
    products:[],
    total:0
}
type Props = {
    children: React.ReactNode
}

export  default function CartProvider(props:Props) {
    let [state, dispatch] = useReducer(CartReducer, initialState);
    let {products}  = useContext(ProductContext);
    function addToCart(id:number) {
        let prd = products.find(p => p.productId === id)!;
        dispatch({type:'ADD_TO_CART', payload:prd})
    }
    function increment(id:number) {
        dispatch({type:'INCREMENT', payload:id})
    }
    return <CartContext.Provider value={
        {cart: state.products, addToCart, increment}}>
        {props.children}
    </CartContext.Provider>
}