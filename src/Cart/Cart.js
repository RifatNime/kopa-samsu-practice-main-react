import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name, img, price } = props.item;
    return (
        <div className='modal-info'>
            <img className='modal-image-container' src={img} alt="" />
            <div>
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Cart;