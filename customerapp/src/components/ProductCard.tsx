import Product from '../model/Product';
type Props = {
	product:Product,
	delEvent: (id:number) => void
}


export default function ProductCard({product, delEvent}:Props) {
  	return <div>
  			{product.id} {product.name} {product.price} 
  			<button onClick={() => delEvent(product.id)}>Delete</button>
  	</div>
}

