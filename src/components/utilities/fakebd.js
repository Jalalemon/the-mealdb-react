const addToDb = idMeal =>{
    let shoppingCart = {};


    // get stored cart

    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    // get quantity
    const quantity = shoppingCart[idMeal];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[idMeal] = newQuantity;
    }
    else {
        shoppingCart[idMeal] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const removeToDb = idMeal => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
       const shoppingCart = JSON.parse(storedCart);
        if (idMeal in shoppingCart) {
            delete shoppingCart[idMeal];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

        }
    }


}

export {addToDb,
        removeToDb
}