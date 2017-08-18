import React from 'react';
import Message from './Message';

/*
  PURPOSE: Loop through all Messages and create a single Message component
*/

class Messages extends React.Component {

  // React 'componentDidUpdate' lifecycle function is used to scroll to bottom of list
  componentDidUpdate() {
    const divObj = document.getElementById('messages-list');
    divObj.scrollTop = divObj.scrollHeight;
  }

  render() {
    // loop through all mesages passed through prop to get the list of messages in chat
    const messages_all = this.props.messages.map((message, i) => {
       return (
         <Message
           key={i}
           username={message.username}
           message={message.message}
           wasitMe={message.wasItMe} />
       );
    });

    return (
      <div className="messages" id="messages-list">
        { messages_all }
      </div>
    );
  }
}

Messages.defaultProps = {
  messages: []
};

export default Messages;
