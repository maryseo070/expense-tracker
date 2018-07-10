import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const msp = state => {
  return {
    errors: state.sessionErrors,
    formType: "Log In"
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export const SessionFormContainer = withRouter(connect(msp, mdp)(SessionForm));
