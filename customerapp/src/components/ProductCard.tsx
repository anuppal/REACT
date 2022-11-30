
import Product from '../model/Product';
type Props = {
	product:Product
}

//function ProductCard(props:Props) {
export default function ProductCard({product}:Props) {
  	return <div>
  			{product.id} {product.name} {product.price}
  	</div>
}