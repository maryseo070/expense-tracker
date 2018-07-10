import { combineReducers } from 'redux';
import { RECEIVE_CURRENT_USER,
      RECEIVE_SESSION_ERRORS,
      CLEAR_ERRORS } from '../actions/session_actions';

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
  sessionErrors: sessionErrorsReducer
});

export default rootReducer;
