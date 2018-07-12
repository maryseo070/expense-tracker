import React, { Component } from 'react';

class SessionForm extends Component {
  constructor(props){
    super(props);
    this.state= {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    return(e) => {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user).then(
        (u) => this.props.history.push('/expenses'));
    };
  }

  updateField(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render () {
    return (
      <div>
        <form className="session-form" onSubmit={this.handleSubmit()}>
          <input
            className="input-text"
            type="text"
            value={this.state.username}
            placeholder="Username"
            onChange={this.updateField("username")}>
          </input>
          <input
            className="input-text"
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.updateField("password")}>
          </input>
          <input
            className="session-button"
            type="submit"
            value={this.props.formType}>
          </input>
        </form>
      </div>
    );
  }
}


export default SessionForm;
