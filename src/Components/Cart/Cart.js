import React from 'react';
import './Cart.css'
// import Actor from './../Actors/Actor';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const actor of cart) {
        total = total + actor.cost;
    }
    return (
        <div className="order">
            <h2>Cart</h2>
            <h4>Actor Added : {props.cart.length}</h4>
            <p><span>Total Cost : $</span>
                {total}</p>
            <ul>{
                cart.map(actor => <li>{actor.name}</li>)}
            </ul>

            <button>Buy Now</button>

        </div>
    );
};

export default Cart;
