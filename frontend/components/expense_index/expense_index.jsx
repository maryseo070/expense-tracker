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
    return (
      <div>
        <div>expense index</div>
        <button onClick={this.logout()}></button>
      </div>
    );
  }
}

export default ExpenseIndex;
