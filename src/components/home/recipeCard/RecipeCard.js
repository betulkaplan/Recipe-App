import React from 'react';
import { MainContainer, ViewMore } from './stylesRecipeCard';
import { useHistory } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  console.log(recipe.recipe);
  const history = useHistory();
  const showDetails = () => {
    history.push({
      pathname: '/details',
      recipe: recipe.recipe,
    });
  };
  return (
    <MainContainer>
      <h4>{recipe?.recipe.label}</h4>
      <div className="picture">
        <img src={recipe?.recipe.image} alt="" />
      </div>

      <button onClick={showDetails}>View More</button>
    </MainContainer>
  );
};

RecipeCard.defaultProps = {
  title: 'Recipe Title',
};

export default RecipeCard;
