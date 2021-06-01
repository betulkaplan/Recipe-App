import React, { useEffect } from 'react';
import { DetailsContainer } from './stylesDetails';

const Details = (props) => {
  console.log('Details a gelen props', props.props.location.recipe);
  const theRecipe = props.props.location.recipe;
  return (
    <DetailsContainer>
      <h3>{theRecipe.label}</h3>
      <img src={theRecipe.image} alt="" />
      <p>Calories: {theRecipe.calories}</p>
    </DetailsContainer>
  );
};

export default Details;
