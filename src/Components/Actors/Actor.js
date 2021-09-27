import React from 'react';
import "./Actor.css"

const Actor = (prop) => {
    console.log(prop);
    const { id, name, img, age, cost } = prop.actor;

    return (
        <div className="card">


            <img className="card-image" src={img} alt="" />

            <h3>Name: {name}</h3>
            <p>ID: {id}</p>
            <h4>Age: {age}</h4>
            <p>Cost: {cost}</p>
            <button onClick={() =>
                prop.handleAddToCart(prop.actor)
            }><i class="fas fa-shopping-cart"></i> Add To Cart</button>

        </div>
    );
};

export default Actor;