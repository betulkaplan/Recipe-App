import React from 'react';

const Form = ({ setQuery, setMeal, getData, query, meal, mealTypes }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('food form submitted', query);
        getData();
      }}
    >
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <button type="submit"> Search</button>
      <select name="mealTypes" id="mealTypes">
        {mealTypes?.map((mealType) => (
          <option value={mealType.toLowerCase()} key>
            {mealType}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Form;
