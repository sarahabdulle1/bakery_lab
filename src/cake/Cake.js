const Cake = ({cake}) => {
  const ingredients = cake.ingredients;
  const formattedIngredients = ingredients.toString();
  
  // display ingredients array as a list
  const formatIngredientsAsList = () => {
    const ingredientList = document.querySelector("#ingredientsList")

    for(let i = 0; i < ingredients.length; i++){
        const displayIngredient = document.createElement("li");
        displayIngredient.innerText = i;
        ingredientList.appendChild(displayIngredient); 
        console.log(displayIngredient);
      }

    return ingredientList;
  }


  return (
    <>
        <h2>{cake.cakeName}</h2>
          <ul>
            <li>price: £{cake.price}</li>
            <li>list of ingredients: {formattedIngredients}</li>
              <ul id="ingredientsList">
              </ul>
            <li>rating: {cake.rating}/5</li>
          </ul>
    </>
  )
}

export default Cake;