import React from 'react';
import MainScreen from './MainScreen';

// Login screen to get a user's username at first launch of application
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '' };

    // React doesn't automatically bind 'this' to event handlers
    this.loginSubmitFunc = this.loginSubmitFunc.bind(this);
    this.usernameChangeFunc = this.usernameChangeFunc.bind(this);
  }

  loginSubmitFunc(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  usernameChangeFunc(event) {
    this.setState({ username: event.target.value });
  }

  render() {

    // form was submitted, go to the MainScreen component
    if(this.state.submitted) {
      return (
          <MainScreen username={this.state.username} />
      );
    }

    // initial item shown is a form to get a user's username
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
