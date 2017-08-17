import React from 'react';

class ChatInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { input: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnTextChange = this.handleOnTextChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    // call the onSend method in the parent component (MainScreen)
    this.props.onSend(this.state.input);
    
    // clear input box
    this.setState({ input: '' });
  }

  handleOnTextChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className="chat-input">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 onChange={this.handleOnTextChange}
                 value={this.state.input}
                 placeholder="Enter in a message..."
                 required />
        </form>
      </div>
    );
  }
}

ChatInput.defaultProps = {};

export default ChatInput;
