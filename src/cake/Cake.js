const Cake = ({cake}) => {

  return (
    <>
        <h2>This is a cake</h2>
          <ul>
            <li>{cake.cakeName}</li>
            <li>{cake.price}</li>
            <li>{cake.ingredients}</li>
            <li>{cake.rating}</li>
          </ul>
    </>
  )
}

export default Cake;