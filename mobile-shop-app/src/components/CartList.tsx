import { Button } from "react-bootstrap";

const CartList = () => {
	return <div className="row">
		<div className="col-md-2">
			<img src="/images/realme1.jpg" style={{"width": "50px", height:"50px"} } />
			Realme
		</div>
		<div className="col-md-6 text-center">
			<Button  variant="outline-primary">+</Button>
                Qty: 1
			<Button  variant="outline-primary">-</Button>
		</div>
		<div className="col-md-2">
			Price: ₹ 12000.00
		</div>
		<div className="col-md-2">
			Amount: ₹ 12000.00
		</div>
		
	</div>
}

export default CartList;