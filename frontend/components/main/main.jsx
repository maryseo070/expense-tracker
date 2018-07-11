import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseIndex from './expense_index';
import AddExpenseButton from './add_expense_button';
import { selectExpenses } from '../../reducers/selectors.js';
import ExpensesPieChart from './pie_chart';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter: 0
    };
    this.handleFilter = this.handleFilter.bind(this);
  }
  componentDidMount() {
    this.props.fetchExpenses();
    this.props.fetchCategories();
  }
  handleFilter() {
    return (e) => {
      this.setState({filter: e.target.value});
    };
  }
  render() {
    let filteredExpenses =
      selectExpenses(this.props.expenses, this.state.filter);
    let categories = this.props.categories;
    return(
      <section>
        <AddExpenseButton
          categories={this.props.categories}
          createExpense={this.props.createExpense}/>
        <select onChange={this.handleFilter()}>
          <option value="0">All</option>
          {
            Object.values(this.props.categories).map( (c, i) => {
              return(
                <option key={i} value={c.id}>{c.name}</option>
              );
            })
          }
        </select>
        <ExpenseIndex
          expenses={filteredExpenses}
          logout={this.props.logout}/>
        <ExpensesPieChart
          expenses={this.props.expenses}
          categories={this.props.categories}/>
      </section>
    );
  }
}
Main.propTypes = {
  categories: PropTypes.object,
  expenses: PropTypes.object,
  fetchCategories: PropTypes.func
};

Main.defaultProps = {
  categories: {},
  expenses: {}
};
export default Main;
