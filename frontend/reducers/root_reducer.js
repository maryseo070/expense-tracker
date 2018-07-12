import { combineReducers } from 'redux';
import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER,
      RECEIVE_SESSION_ERRORS,
      CLEAR_ERRORS } from '../actions/session_actions';
import { RECEIVE_CATEGORIES,
          RECEIVE_EXPENSE,
          RECEIVE_EXPENSES,
          DELETE_EXPENSES } from '../actions/expense_actions';

const expensesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return merge({}, state, action.categories);
    case RECEIVE_EXPENSE:
      return merge({}, state, action.expense);
    case RECEIVE_EXPENSES:
      return merge({}, state, action.expenses);
    case DELETE_EXPENSES:
      return {}
    default:
      return state;
  }
};

const sessionsReducer = (state = {currentUser: null }, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.user };
    default:
      return state;
  }
};

const sessionErrorsReducer = (state = [], action) => {
  const defaultErrors = [];
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_ERRORS:
      return [];
    default:
      return defaultErrors;
  }
};

const rootReducer = combineReducers({
  session: sessionsReducer,
  sessionErrors: sessionErrorsReducer,
  expenses: expensesReducer
});

export default rootReducer;
