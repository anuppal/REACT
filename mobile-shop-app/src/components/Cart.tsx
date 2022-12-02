import { useContext } from "react";

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