import React from 'react';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const msp = state => {
  return {
    errors: state.sessionErrors,
    formType: "Sign Up"
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export const SignUpFormContainer = withRouter(connect(msp, mdp)(SessionForm));
