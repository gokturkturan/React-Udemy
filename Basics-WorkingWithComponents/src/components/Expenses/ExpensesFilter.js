import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  let selectedElement;
  const dropdownChangeHandler = (event) => {
    selectedElement = event.target.value;
    props.onChangeFilter(selectedElement);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter">Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
