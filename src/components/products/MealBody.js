
import React, { useEffect, useState } from 'react';
import Meal from '../MealDb/meal/Meal';
import Cart from '../Cart/Cart';
import './MealBody.css'
import { addToDb } from '../utilities/fakebd';
const MealBody = () => {
    const [meals, setMeals] = useState([]);
    const [cart , setCart] = useState([])

    const handleClick = (meals) => {
        const neweCart = [...cart, meals]
        setCart(neweCart)
        addToDb(meals.idMeal)
    }

    const removeToDb = (meals) => {
        const neweCart = [...cart, meals]
        setCart(neweCart)
        addToDb(meals.idMeal)

    }

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
                        meals.map(meal => <Meal key={meal.idMeal}
                             meal={meal}
                            removeToDb ={removeToDb} 
                             handleClick = {handleClick}
                             ></Meal>)
                    }

              </div>
            </div>
            <div className="meal-cart">
              <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default MealBody;