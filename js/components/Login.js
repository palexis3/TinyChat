import React from 'react';

// Login screen to get a user's username at first launch of application
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: ''};

    // React doesn't automatically bind 'this' to event handlers
    this.loginSubmitFunc = this.loginSubmitFunc.bind(this);
    this.usernameChangeFunc = this.usernameChangeFunc.bind(this);
  }

  loginSubmitFunc(event) {
    // dont want invalid username to be accepted i.e empty
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  usernameChangeFunc(event) {
    this.setState({ username: event.target.value });
  }

  render() {

    // form was submitted
    if(this.state.submitted) {
      return (
          <h1>{this.state.username}</h1>
      );
    }

    return (
      <form onSubmit={this.loginSubmitFunc} className="login-container">
        <h1>TinyChat</h1>
        <div>
          <input
            type="text"
            onChange={this.usernameChangeFunc}
            placeholder="Please enter in a username:"
            required />
        </div>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

Login.defaultProps = {
};

export default Login;
