// able to add details of a new cake 

import { useState } from "react";

const CakeForm =({cake, setCake}) => {
// declare state

    const [cakeName, setCakeName] = useState("")
    const [cakePrice, setCakePrice] = useState("")
    const [cakeRating, setCakeRating] = useState("")
    const [cakeIngredients, setCakeIngredients] = useState([])




    return (
        <>
        <h2> Cake Form</h2>
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
        </>

    );
};

export default CakeForm;