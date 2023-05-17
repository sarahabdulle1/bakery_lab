import { useState } from "react";
import Cake from "./Cake.js";

const CakeContainer = () => {

    const [listOfCakes, setListOfCakes] = useState(
		[
			{
				cakeName: "Victoria Sponge",
				   ingredients: [
					   "eggs",
					  "butter",
					  "sugar",
					  "self-raising flour",
					  "baking powder",
					  "milk"
				  ],
				  price: 5,
				   rating: 5
			},
			{
				 cakeName: "Tea Loaf",
				   ingredients: [
					   "eggs",
					  "oil",
					  "dried fruit",
					  "sugar",
					  "self-raising flour",
					  "strong tea",
				  ],
				  price: 2,
				  rating: 3
			},
			{
				 cakeName: "Carrot Cake",
				   ingredients: [
					"carrots",
					  "walnuts",
					  "oil",
					  "cream cheese",
					  "flour",
					  "sugar",
				   ],
				   price: 8,
				   rating: 5
			} 
		]		
	)

	// accessing the cake
	const cake1 = listOfCakes[0];

	// adding new Cakes to a new CakeList
	const newCakeList = listOfCakes.map(cake => cake);
	
	console.log(newCakeList);
		
	
	const displayCakeName = () => {
		let nameOfCake = ""
		let priceOfCake = ""
		let ratingOfCake = ""
		let ingredientsOfCake = ""
		listOfCakes.forEach((cake) => {
			nameOfCake = cake.cakeName;
			priceOfCake = cake.price;
			ingredientsOfCake = cake.ingredients;
			ratingOfCake = cake.rating;
		});
		return nameOfCake;
	}	
	const displayCakePrice = () => {
		let priceOfCake = ""
		listOfCakes.forEach((cake) => {
			priceOfCake = cake.price;
		});
		return priceOfCake;
	}	
	const displayCakeRating = () => {
		let ratingOfCake = "";
		listOfCakes.forEach((cake) => {
			ratingOfCake = cake.rating;
		});
		return ratingOfCake;
	}	
	const displayCakeIngredients = () => {
		// let newList = document.getElementById("newIngredientList")
		let ingredientsOfCake = "";
		listOfCakes.forEach((cake) => {
			ingredientsOfCake = cake.ingredients;
		
			// for(i = 0; i < ingredientsOfCake; i++){
			// 	const li = document.createElement("li")
			// 	li.innerText = "hi";
			// 	newList.appendChild(li);
			// }
		});
		return ingredientsOfCake;
	}


	// accessing the individual cakeName
		// console.log(listOfCakes[0].cakeName);

		
  	return (
		<>
			<Cake
				name={displayCakeName()}
				rating={displayCakePrice()}
				price = {displayCakeRating()}
				ingredients= {displayCakeIngredients()}
				/>
			<Cake
				name={displayCakeName()}
				rating={displayCakePrice()}
				price = {displayCakeRating()}
				ingredients= {displayCakeIngredients()}
				/>
	
				{/* /> */}
		</>
  	)
}
export default CakeContainer;