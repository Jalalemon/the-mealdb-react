import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Meal = (props) => {
    const { strMealThumb, strArea, idMeal, strIngredient1,
        strSource, strInstructions, 
} = props.meal;
    return (
        <div className='meal'>

                <img src={strMealThumb} alt="" />
        
         <div className="text">

                <h3> Name: {strIngredient1} </h3>
                <p>{idMeal}</p>
                <p> section {strArea} </p>
                <p> {strSource}</p>
         </div>
            <button onClick={() => props.handleClick(props.meal)} className='cart-btn'><p>Add to cart</p> 
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Meal;