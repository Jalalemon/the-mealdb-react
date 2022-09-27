import React from 'react';
import'./Cart.css'
const Cart = (props) => {
    const {cart} = props;

    let id;
    let mealname;
    let area;
    for (const meals of cart) {
        id = meals.idMeal;
        mealname = meals.strMeal;
        area = meals.strArea;

        
    }

    
    return (
        <div className='cart'>
            <h2>Meal cart</h2>
            <p>cart length {cart.length} </p>
            <p> Id: {id} </p>
            <p>Name: {mealname}</p>
            <p>area: {area} </p>
        </div>
    );
};

export default Cart;