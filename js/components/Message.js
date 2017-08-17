import React from 'react';
import Linkify from 'react-linkify';
import InlineEdit from 'react-edit-inline';

class Message extends React.Component {

  constructor(props) {
    super(props);

    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.state =  { message: this.props.message, editing: false };
  }

  handleMessageChange(text) {
    this.setState({ message: text });
  }

  handleTextValidation(text) {
    return text.length > 0;
  }

  render() {

    // checking to see if this message was sent by me
    const wasItMe = this.props.wasItMe ? 'was-it-me' : '';

    return (
      <div className={`message ${wasItMe}`}>
        <div className='username'>
          { this.props.username }
        </div>
        <div className='message-body' >
          <InlineEdit
            validate= { this.handleTextValidation }
            text= { <Linkify> { this.state.message } </Linkify> }
            paramName = "message"
            change= { this.handleMessageChange }
            editing= { this.state.editing }
          />
        </div>
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
