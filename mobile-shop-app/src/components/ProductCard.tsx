import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from 'react';
import Product from '../model/Product';
import { CartContext } from './CartContext';

type Props = {
    product:Product
}

export default function ProductCard({product}:Props) {
    let {addToCart} = useContext(CartContext);
    return <div className='col-md-4'>
        <div className="item">
            <div className="mb-r">
                <div className="card card-cascade wider">
                    <a>
                        <div className="view overlay hm-white-slight">
                            <img src={product.productImageUrl} className="img-fluid" alt="" width="360px" height="640px" />
                        </div>
                    </a>
                    <div className="card-body text-center no-padding">
                        <p className="card-title">
                            <strong>
                                <a>{product.productName}</a>
                            </strong>
                        </p>
                        <p className="card-text">{product.productDescription}</p>
                        <div className="card-footer">
                            <span className="left">₹ {product.productPrice}</span>
                            <span className="right px-2">
                                <a>
                                    <FontAwesomeIcon icon={faHeart} color="red" className='px-3' />
                                    <FontAwesomeIcon 
                                    onClick={() => addToCart(product.productId)}
                                    icon={faShoppingCart} color="blue" />
                                </a>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}