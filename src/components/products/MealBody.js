
import React, { useEffect, useState } from 'react';
import Meal from '../MealDb/meal/Meal';
import './MealBody.css'
const MealBody = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() =>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[])
    return (
        <div className='meal-shop'>
            <div className="meal-container">
                <div className="search-btn">

                    <input type="text" />
                    <button>Search</button>
                </div>
                <h1>meal Length {meals.length}</h1>
              <div className="meal-grid">
                    {
                        meals.map(meal => <Meal key={meal.idMeal} meal={meal} ></Meal>)
                    }

              </div>
            </div>
            <div className="meal-cart">
                <h2>meal cart</h2>
            </div>
        </div>
    );
};

export default MealBody;