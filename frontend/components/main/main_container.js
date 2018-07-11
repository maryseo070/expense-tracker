import Main from './main';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchExpenses,
          createExpense,
          fetchCategories } from '../../actions/expense_actions';
import { logout } from '../../actions/session_actions';

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
    createExpense: (expense) => dispatch(createExpense(expense)),
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(Main);
