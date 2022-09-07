import React from 'react'
import "./Subtotal.css";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "../../utils/BasketTotal"

const SubTotal = () => {
    const { basket, user } = useSelector(state => state.data);
    let navigate = useNavigate();


    const handleCheckOut = () => {
        if (user) {
            navigate("/payment");
        } else {
            navigate("/login");
        }
    }
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            SubTotal ({basket.length} items) : <strong> {value} </strong>
                        </p>
                        <small className='subtotal-gift'>
                            <input type="checkbox" />
                            This orders contain1 a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={handleCheckOut}>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal