import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import axios from 'axios';

const mealTypes = ['orange', 'apple', 'chicken', 'fish', 'meat'];

const Home = () => {
  const [query, setQuery] = useState('apple');
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState();

  const ID = '2c6fceed';
  const KEY = '28f5d8623b7f7c006eded48d4c245d62	';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}&from=0&to=3&calories=591-722&health=${'alcohol-free'}`;

  const getData = async () => {
    if (query !== '') {
      const result = await axios.get(url);
      console.log(result);
      if (result.status === 200) {
        console.log('status 200');
        setRecipes(result.data.hits);
      }
    } else {
      alert('Please fill the form');
    }
  };

  //   useEffect(() => {
  //     getData();
  //   });

  //getData();
  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes?.map((recipe, index) => (
        <h2 key={index}>{recipe.recipe.label}</h2>
      ))}
    </div>
  );
};

export default Home;
