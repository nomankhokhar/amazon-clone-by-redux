import React from 'react'
import "./CheckoutProduct.css";
import { useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { removeToBasket } from '../../redux/actions';

const CheckoutProduct = ({ id, title, image, rating, price }) => {

    let dispatch = useDispatch();

    let removeItemFromBasket = () => {
         dispatch(removeToBasket(id));
    }
    return (
        <div className='checkout-product'>
            <img src={image} className="checkout-product-image" alt='' />
            <div className='checkout-product-info'>
                <p className='checkout-product-title'>{title}</p>
                <p className='checkout-product-price'>
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className='checkout-product-rating'>
                    {Array(rating).fill().map((_, index) => (<p key={index}>🌟</p>))}
                </div>
                <button onClick={removeItemFromBasket}>
                    <i>
                        <ShoppingCartIcon />
                    </i>
                    Remove from Basket
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct