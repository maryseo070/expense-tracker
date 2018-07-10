import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseIndex extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.fetchExpenses();
  }

  logout() {
    return (e) => {
      this.props.logout().then( () => console.log("loggedout"));
    };
  }
  render() {
    let exes = Object.values(this.props.expenses);
    exes = exes.map( (ex, i) => {
      return (
        <ul key={i}>
          <li>{ex.category}</li>
          <li>{ex.date}</li>
          <li>{ex.description}</li>
          <li>{ex.amount}</li>
        </ul>
      );
    });

    return (
      <div>
        <button onClick={this.logout()}></button>
        <div>expense index</div>
        <div>{exes}</div>
      </div>
    );
  }
}
ExpenseIndex.propTypes = {
  expenses: PropTypes.object,
  fetchExpenses: PropTypes.func
};

ExpenseIndex.defaultProps = {
  expenses: {}
};

export default ExpenseIndex;
