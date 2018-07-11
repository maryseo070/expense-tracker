import { fetchCategories, createExpense } from '../../actions/expense_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TopNav from './top_nav';

const msp = state => {
  return {
    categories: state.expenses.categories
  };
};

const mdp = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    createExpense: (expense) => dispatch(createExpense(expense))
  };
};

export default connect(msp, mdp)(TopNav);
