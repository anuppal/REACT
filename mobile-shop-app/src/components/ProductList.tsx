import { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from './ProductContext';

export default function ProductList() {
  let {products} = useContext(ProductContext);
    return <div className="container">
        <div className="row">
            {
                products.map(p => <ProductCard product={p} key={p.productId}/>)
            }
        </div>
    </div>
}

