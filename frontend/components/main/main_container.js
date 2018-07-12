import Main from "./main";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  fetchExpenses,
  createExpense,
  fetchCategories,
  deleteExpenses
} from "../../actions/expense_actions";
import { logout } from "../../actions/session_actions";

const msp = state => {
  return {
    expenses: state.expenses.expenses,
    categories: state.expenses.categories,
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return {
    fetchExpenses: () => dispatch(fetchExpenses()),
    fetchCategories: () => dispatch(fetchCategories()),
    createExpense: expense => dispatch(createExpense(expense)),
    logout: () => dispatch(logout()),
    deleteExpenses: () => dispatch(deleteExpenses())
  };
};

export default connect(
  msp,
  mdp
)(Main);
