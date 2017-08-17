import React from 'react';

class ChatInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { input: '' };

    this.submitFunc = this.submitFunc.bind(this);
    this.onTextChangeFunc = this.onTextChangeFunc.bind(this);
  }

  submitFunc(event) {

    event.preventDefault();

    // call the onSend method in the parent component (MainScreen)
    this.props.onSend(this.state.input);

    // clear input box
    this.setState({ input: '' });
  }

  onTextChangeFunc(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className="chat-input">
        <form onSubmit={this.submitFunc}>
          <input type="text"
                 onChange={this.onTextChangeFunc}
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
