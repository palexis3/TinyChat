import React from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';
import '~/styles/components/MainScreen.css';


/*
  PURPOSE: MainScreen is the main chat Component that contains the Messages and ChatInput components
          to show list of messages and user input area, respectively.
*/

class MainScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.handleSend = this.handleSend.bind(this);
  }

  // send handler that is constructs a message object accordingly
  handleSend(message) {
    const messageObj = {
      username: this.props.username,
      wasItMe: true,
      message
    };
    this.addMessage(messageObj);
  }

  // append this message to our list of messages
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
