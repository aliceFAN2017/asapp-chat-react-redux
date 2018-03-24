import React from 'react'
import Header from '../Header';
import MessageList from '../../containers/MessageList';
import AddMessage from '../../containers/AddMessage';

import '../../static/styles/chatApp/style.css'

class ChatApp extends React.Component {

    render() {
        return (
            <section className='chat-app'>
                <Header to={ this.props.author.to } />
                <MessageList owner={ this.props.author.sender } />
                <AddMessage { ...this.props.author } />
            </section>           
        )
    }
}

export default ChatApp
