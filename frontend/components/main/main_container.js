import Main from './main';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchExpenses } from '../../actions/expense_actions';

const msp = state => {
  return {
    expenses: state.expenses.expenses
  };
};

const mdp = dispatch => {
  return {
    fetchExpenses: () => dispatch(fetchExpenses())
  };
};

export default connect(msp, mdp)(Main);
