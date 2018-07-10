import * as ExpenseAPiUtil from '../util/expense_api_util';

export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const RECEIVE_EXPENSE = "RECEIVE_EXPENSE";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const receiveExpense = expense => {
  return {
    type: RECEIVE_EXPENSE,
    expense
  };
};

export const receiveExpenses = expenses => {
  return {
    type: RECEIVE_EXPENSES,
    expenses
  };
};

export const receiveCategories = categories => {
  return{
    type: RECEIVE_CATEGORIES,
    categories
  };
};

export const createExpense = expense => dispatch => {
  return ExpenseAPiUtil.createExpense(expense).then(
    e => dispatch(receiveExpense(e))
  );
};

export const fetchExpenses = () => dispatch => {
  return ExpenseAPiUtil.fetchExpenses().then(
    expenses => dispatch(receiveExpenses(expenses))
  );
};

export const fetchCategories = () => dispatch =>{
  return ExpenseAPiUtil.fetchCategories().then(
    categories => dispatch(receiveCategories(categories))
  );
};
