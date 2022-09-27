import React from 'react';
import './Meal.css'
const Meal = (props) => {
    const { strMealThumb, strArea, strIngredient1,
        strSource, strInstructions, 
} = props.meal
    return (
        <div className='meal'>

                <img src={strMealThumb} alt="" />
        
         <div className="text">

                <h3> Name: {strIngredient1} </h3>
                {/* <p> Source {strInstructions}</p> */}
                <p> section {strArea} </p>
                <p> {strSource}</p>
                <p></p>

         </div>
        </div>
    );
};

export default Meal;