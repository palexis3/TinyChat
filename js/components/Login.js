import React from 'react';
import MainScreen from './MainScreen';
import '~/styles/components/Login.css';
import '~/styles/components/App.css';

/*
   PURPOSE : Login screen to get a user's username to then enter
            the main chat room
*/

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '' };

    // React doesn't automatically bind 'this' to event handlers
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  handleUsernameChange(event) {
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
      <form onSubmit={this.handleLoginSubmit} className="login-container">
        <h1>TinyChat</h1>
        <div>
          <input
            type="text"
            onChange={this.handleUsernameChange}
            placeholder="Please enter in a username:"
            required />
        </div>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

Login.defaultProps = {};

export default Login;
