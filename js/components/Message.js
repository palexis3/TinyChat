import React from 'react';
import Linkify from 'react-linkify';

class Message extends React.Component {

  render() {
    // checking to see if this message was sent by me
    const wasItMe = this.props.wasItMe ? '' : '';

    return (
      <div className={`message ${wasItMe}`}>
        <div className='username'>
          {this.props.username}
        </div>
        <Linkify>
          <div className='message-body'>
            {this.props.message}
          </div>
        </Linkify>
      </div>
    );
  }
}

Message.defaultProps = {
  wasItMe: false,
  message: '',
  username: ''
};

export default Message;
