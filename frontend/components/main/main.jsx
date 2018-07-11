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
    this.logout = this.logout.bind(this);
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
  logout() {
    return (e) => {
      this.props.logout().then( () => console.log("loggedout"));
    };
  }
  render() {
    let filteredExpenses =
      selectExpenses(this.props.expenses, this.state.filter);
    let categories = this.props.categories;
    return(
      <section className="expense-index">
        <h1 className="index-h1">Expense Tracker</h1>
        <button className="logout-button" onClick={this.logout()}>Log Out</button>

        <div className="button-container">
          <AddExpenseButton
            categories={this.props.categories}
            createExpense={this.props.createExpense}
            currentUser={this.props.currentUser}
            expenses={this.props.expenses}/>

          <div>Filter Expenses by Category:
            <select className="expense-dropdown" onChange={this.handleFilter()}>
              <option value="0">All</option>
              {
                Object.values(this.props.categories).map( (c, i) => {
                  return(
                    <option key={i} value={c.id}>{c.name}</option>
                  );
                })
              }
            </select>
          </div>
        </div>
        <div className="index-piechart">
          <ExpenseIndex
            expenses={filteredExpenses}
            currentUser={this.props.currentUser}/>
          <ExpensesPieChart
            expenses={this.props.expenses}
            categories={this.props.categories}/>
        </div>

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
