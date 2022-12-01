import { useContext } from "react";
import ICart from "../model/Cart";
import { CartContext } from "./CartContext";
import CartList from "./CartList";

const Cart = () => {
	let {cart} = useContext(CartContext);
	return <div className="container">
		{
		 cart.map(p => <CartList  product={p} key = {p.id}/> )
		}
	</div>
}

export default Cart;