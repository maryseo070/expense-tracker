import React from 'react';
import { Route } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionPageContainer from './session/session_page_container';
import { SignUpFormContainer } from './session/signup_form_container';
// import ExpenseIndexContainer from './expense_index/expense_index_container';
import MainContainer from './main/main_container';

const App = () => {
  return (
    <div>
      <AuthRoute exact path='/' component={ SessionPageContainer } />
      <ProtectedRoute exact path='/expenses' component={MainContainer} />
    </div>
  );
};
export default App;
