// the MainScreen component contains the Messages and Input components simulate a chat screen
import React from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';

class MainScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendFunc = this.sendFunc.bind(this);

  }

  sendFunc(message) {
    const messageObj = {
      username: this.props.username,
      wasItMe: true,
      message
    };

    this.addMessage(messageObj);
  }

  // in this function, message is actually an object that encapsulates username, message and boolean 'wasItMe'
  addMessage(message) {
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="chatContainer">
          <Messages messages={this.state.messages} />
          <ChatInput onSend={this.sendFunc} />
      </div>
    );
  }
}

MainScreen.defaultProps = {
  username: 'Anonymous'
};

export default MainScreen;
