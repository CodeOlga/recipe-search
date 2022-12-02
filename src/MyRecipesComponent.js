function MyRecipesComponent({label, image, calories, ingredients}) {
  return(
    <div>
      <div className="container">
        <h2>{label}</h2>
      </div>

      <div className="container">
        <img className="tasty" src={image} alt="avocado" />
      </div>

      <ul className="list">
        {ingredients.map((ingredient, index) => (
          <li key={index}><img className="icon" src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/2x/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt="icon" />
           {ingredient}</li>
        ))}
      </ul>

      <div className="container">
        <p className="par"><img className="icon" src="https://img.icons8.com/fluency/2x/broccoli.png" alt="broccoli" />
          {calories.toFixed()} calories</p>
      </div>
    </div>
  )
}

export default MyRecipesComponent;