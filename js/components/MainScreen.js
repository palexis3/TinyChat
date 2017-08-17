 // the MainScreen component contains the Messages and Input components simulate a chat screen
import React from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';
import '~/styles/components/MainScreen.css';

class MainScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.handleSend = this.handleSend.bind(this);
  }

  handleSend(message) {
    const messageObj = {
      username: this.props.username,
      wasItMe: true,
      message
    };
    this.addMessage(messageObj);
  }

  // in this function, message is actually an object that encapsulates username,
  // message and boolean 'wasItMe'
  addMessage(message) {
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="chat-container">
          <h3>TinyChat</h3>
          <Messages messages={this.state.messages} />
          <ChatInput onSend={this.handleSend} />
      </div>
    );
  }
}

MainScreen.defaultProps = {
  username: 'Anonymous'
};

export default MainScreen;
