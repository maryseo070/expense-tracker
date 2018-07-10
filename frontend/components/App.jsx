import React from 'react';
import { Route } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionPageContainer from './session/session_page_container';
import { SignUpFormContainer } from './session/signup_form_container';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={ SessionPageContainer } />
    </div>
  );
};
export default App;
