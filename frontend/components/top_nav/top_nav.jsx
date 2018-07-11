import React, { Component } from 'react';
import AddExpenseButton from './add_expense_button';
import PropTypes from 'prop-types';

class TopNav extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return(
      <div>
        <AddExpenseButton
          categories={this.props.categories}
          createExpense={this.props.createExpense}/>
      </div>
    );
  }
}
TopNav.propTypes = {
  categories: PropTypes.object,
  fetchCategories: PropTypes.func
};

TopNav.defaultProps = {
  categories: {}
};


export default TopNav;
