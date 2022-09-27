import React from 'react';

const Cart = (props) => {
    const {cart} = props
    return (
        <div>
            <h2>meal cart</h2>
            <p>cart length {cart.length} </p>
        </div>
    );
};

export default Cart;