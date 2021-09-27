import React, { useEffect, useState } from 'react';

import './Shop.css'

import Cart from '../Cart/Cart';
import Actor from '../Actors/Actor';

const Shop = () => {
    const [actors, setActors] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setActors(data))
    }, [])
    const handleAddToCart = (actor) => {
        const newCart = [...cart, actor];
        setCart(newCart);

    }
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    actors.map(actor => <Actor

                        key={actor.id}
                        actor={actor}
                        handleAddToCart={handleAddToCart}
                    >
                    </Actor>)
                }

            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}

                ></Cart>


            </div>
        </div>
    );
};

export default Shop;