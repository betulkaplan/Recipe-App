import React from 'react';

const Form = ({ setQuery, setMeal, getData, query, meal, mealTypes }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(meal, query);
        getData();
      }}
    >
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      ></input>
      <button type="submit"> Search</button>
      <select
        name="mealTypes"
        id="mealTypes"
        onChange={(e) => setMeal(e.target.value)}
      >
        {mealTypes?.map((mealType, index) => (
          <option value={mealType.toLowerCase()} key={index}>
            {mealType}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Form;
