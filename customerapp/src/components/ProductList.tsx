import { Component } from 'react';
import Product from '../model/Product';
import ProductCard from './ProductCard';

type Props = {
}

type AppState = {
    products: Product[]
}

export default class ProductList extends Component<Props, AppState> {
    state = {
    	    products: [
            { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
            { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
            { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
            { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
            { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }]
    }
    // 3
    deleteProduct(id:number): void {
    		let prds = this.state.products.filter(p => p.id !== id);
    		// update the state and force re-render
    		this.setState({
    				products: prds
    		})
    }
    render() {
        return <div>
            {
                this.state.products.map(p => <ProductCard product={p} 
                		delEvent={(id) => this.deleteProduct(id)} />)
            }
        </div>
    }
}

