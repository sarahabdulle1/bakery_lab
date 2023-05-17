const Cake = ({name, price, ingredients, rating}) => {

  return (
    <>
        <h2>This is a cake</h2>
          <ul>
            <li>name: {name}</li>
            <li>price: {price}</li>
            <li>ingredients: </li>
                <ul id="ingredientList">
                  <li>{ingredients}</li>
                  
                </ul>
            <li>rating: {rating}</li>
          </ul>
    </>
  )
}

export default Cake;