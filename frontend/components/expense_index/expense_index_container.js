import { fetchExpenses } from '../../actions/expense_actions.js';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ExpenseIndex from './expense_index';

const msp = state => {
  return {
    expenses: state.expenses.expenses
  };
};

const mdp = dispatch => {
  return {
    fetchExpenses: () => dispatch(fetchExpenses()),
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(ExpenseIndex);
