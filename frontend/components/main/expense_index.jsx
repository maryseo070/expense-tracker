import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseIndex extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let exes = Object.values(this.props.expenses);
    //sort by date
    exes = exes.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
    });
    exes = exes.map( (ex, i) => {
      return (
        <ul className="expense-item" key={i}>
          <li className="expense-category">Category: {ex.category}</li>
          <li>Date: {ex.date}</li>
          <li>Description: {ex.description}</li>
          <li className="expense-amount">Amount: ${ex.amount.toFixed(2)}</li>
        </ul>
      );
    });

    return (
      <div>
        <div>expense index</div>
        <div>{exes}</div>
      </div>
    );
  }
}
ExpenseIndex.propTypes = {
  expenses: PropTypes.object
};

ExpenseIndex.defaultProps = {
  expenses: {}
};

export default ExpenseIndex;
