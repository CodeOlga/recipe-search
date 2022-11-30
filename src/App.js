import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';

function App() {

  const MY_ID = '139c6380';
  const MY_KEY = 'a9c4440dce8fb0b058d4571c6a1f32be';

  const [mySearch, setMySearch] = useState('');

  useEffect(() => {
    const getRecipe = async() => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data.hits);
    }
    getRecipe();
  }, [])

const myRecipeSearch = (e) => {
  setMySearch(e.target.value);
}

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className="container">
        <form>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
          </input>
        </form>

        <div className="container">
          <button>
            <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon" className='icons'/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
