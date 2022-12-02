import { useContext } from "react";
import { Button } from "react-bootstrap";
import Cart from "../model/Cart";
import { CartContext } from "./CartContext";

type Props = {
	product:Cart
}
// export default function CartList({product}:Props) {
const CartList = ({product}:Props) => {
	let {increment} = useContext(CartContext);
	return <div className="row">
		<div className="col-md-2">
			<img src={product.image} style={{"width": "50px", height:"50px"} } />
			{product.name}
		</div>
		<div className="col-md-6 text-center">
			<Button  variant="outline-primary">-</Button>
                Qty: {product.quantity}
			<Button  
			variant="outline-primary" 
			onClick={() => increment(product.id)}>+</Button>
		</div>
		<div className="col-md-2">
			Price: ₹ {product.price}
		</div>
		<div className="col-md-2">
			Amount: ₹ {product.amount}
		</div>
		
	</div>
}

export default CartList;