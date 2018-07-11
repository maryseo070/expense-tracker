import React from 'react';
import PropTypes from 'prop-types';

const ExpenseIndex = ({expenses, currentUser}) => {


  let exes = Object.values(expenses);
  //sort by date
  exes = exes.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });
  exes = exes.map( (ex, i) => {
    return (
      <ul className="expense-item" key={i}>
        <li className="expense-date">Date: {ex.date}</li>
        <div className="expense-category">Category: {ex.category}</div>
        <li className="expense-description">Description: {ex.description}</li>
        <li className="expense-amount">Amount: ${ex.amount.toFixed(2)}</li>
      </ul>
    );
  });

  function expenseTotal() {
    let ex = Object.values(expenses);
    return ex.reduce((a, b) => a + b.amount, 0);
  }
  return (
    <div>
      <div>Total Expenses: {expenseTotal()}</div>
      <div>{exes}</div>
    </div>
  );
};

ExpenseIndex.propTypes = {
  expenses: PropTypes.object
};

ExpenseIndex.defaultProps = {
  expenses: {}
};

export default ExpenseIndex;
