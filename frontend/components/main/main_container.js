import Main from './main';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchExpenses,
          createExpense,
          fetchCategories } from '../../actions/expense_actions';

const msp = state => {
  return {
    expenses: state.expenses.expenses,
    categories: state.expenses.categories
  };
};

const mdp = dispatch => {
  return {
    fetchExpenses: () => dispatch(fetchExpenses()),
    fetchCategories: () => dispatch(fetchCategories()),
    createExpense: (expense) => dispatch(createExpense(expense))
  };
};

export default connect(msp, mdp)(Main);
