import React from "react";
import SessionPage from "./session_page";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const msp = state => {
  return {
    errors: state.sessionErrors
  };
};

export default withRouter(
  connect(
    msp,
    null
  )(SessionPage)
);
