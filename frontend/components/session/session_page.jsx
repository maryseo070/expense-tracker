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
        <section className="session-form-container">
          Log In!
          <SessionFormContainer />
          or Sign Up (password must be 6 characters long)
          <SignUpFormContainer />
          {this.renderErrors()}
        </section>
        <div className="session-photo-container">
          <img className="session-photo"
            src={window.session_photo}/>
          <h1 className="session-welcome">Welcome to Pig</h1>
        </div>
          <section className="icon-holder">
            <div className="icon-box">
              <img src={window.icon1} className="session-icon"/>
              <div className="icon-text">Track Your Expenses</div>
            </div>
            <div className="icon-box">
              <img src={window.icon2} className="session-icon"/>
              <div className="icon-text">Filter Expenses via Category</div>
            </div>
            <div className="icon-box">
              <img src={window.icon3} className="session-icon"/>
              <div className="icon-text">Visualize Your Spending Distribution</div>
            </div>
          </section>

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
