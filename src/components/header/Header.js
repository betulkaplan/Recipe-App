import React from 'react';
import Form from '../home/Form';

const Header = ({ setQuery, setMeal, getData, query, meal, mealTypes }) => {
  return (
    <div>
      <h2>Recipe App</h2>
      <Form
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
    </div>
  );
};

export default Header;
