import React from 'react';
import { MainContainer, ViewMore } from './stylesRecipeCard';

const RecipeCard = ({ title }) => {
  return (
    <MainContainer>
      <h4>{title}</h4>
      <div className="picture">
        <img src="https://picsum.photos/200/200" alt="" />
      </div>

      <ViewMore to="/detail">View More</ViewMore>
    </MainContainer>
  );
};

RecipeCard.defaultProps = {
  title: 'Recipe Title',
};

export default RecipeCard;
