// able to add details of a new cake 

import { useState } from "react";

const CakeForm =({cakes, setCakes}) => {
// declare state

    const [cakeName, setCakeName] = useState("")
    const [cakePrice, setCakePrice] = useState("")
    const [cakeRating, setCakeRating] = useState("")
    const [cakeIngredients, setCakeIngredients] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    
    const handleCheck = () => {
        let errorMessage = "";

        if (cakes.find((cake) => cake.cakeName === cakeName)){
            errorMessage = "Cake already exists";
        }
        setErrorMessage(errorMessage);
        return errorMessage !== "";
    }
    
    const handleFormSubmit = (e) => {
        //stop default refresh from happening when submitting
        e.preventDefault();

        if (!handleCheck()){
            const updatedCakeList = [... cakes];
            const newCake = {
                cakeName: cakeName,
                ingredients: cakeIngredients,
                rating: cakeRating,
                price: cakePrice
            }
            updatedCakeList.push(newCake);
            setCakes(updatedCakeList);
        }
    }  


    return (
        <>
        <h2> Add a new cake:</h2>
            <form onSubmit={handleFormSubmit}>
                <input 
                type="text"
                name="name"
                placeholder="Name of Cake"
                value={cakeName}
                onChange={(e) => setCakeName(e.target.value)}
                />

                <input 
                type="text"
                name="price"
                placeholder="Price"
                value={cakePrice}
                onChange={(e) => setCakePrice(e.target.value)}
                />

                <input 
                type="text"
                name="rating"
                placeholder="Rating"
                value={cakeRating}
                onChange={(e) => setCakeRating(e.target.value)}
                />          
                <input 
                type="text"
                name="ingredients"
                placeholder="ingredients"
                value={cakeIngredients}
                onChange={(e) => setCakeIngredients(e.target.value)}
                />         
                <input type="submit" value="Submit"/>      
            </form>
            <p>{errorMessage}</p>              
        </>

    );
};

export default CakeForm;