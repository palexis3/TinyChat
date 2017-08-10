import React from 'react';

class Message extends React.Component {

  render() {

    // checking to see if this message was sent by me
    const wasItMe = this.props.wasItMe ? 'was-it-me' : '';

    return ( <
      div className = {
        `message ${wasItMe}`
      } >
      <
      div className = 'username' > {
        this.props.username
      } <
      /div> <
      div className = 'message-body' > {
        this.props.message
      } <
      /div> < /
      div >
    );
  }
}

Message.defaultProps = {
  wasItMe: false,
  message: '',
  username: ''
};

export default Message;