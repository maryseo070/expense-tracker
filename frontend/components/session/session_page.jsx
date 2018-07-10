import { SessionFormContainer } from '../session/login_form_container';
import { SignUpFormContainer } from '../session/signup_form_container';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SessionPage extends Component {
  constructor(props) {
    super(props);
    this.renderErrors = this.renderErrors.bind(this);
  }


  renderErrors() {
      return(
        <ul className="session-errors">
          {this.props.errors.map((error, i) => (
            <li className="rendered-errors" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }

  render() {
    return (
      <div className="session-page">
          {this.renderErrors()}
          Log In!
          <SessionFormContainer />
          <br>
          </br>
          Don't have an account? Sign Up!
          <SignUpFormContainer />
      </div>
    );
  }
}

SessionPage.propTyoe = {
  errors: PropTypes.array
};

SessionPage.defaultProps = {
  errors: []
};

export default SessionPage;
