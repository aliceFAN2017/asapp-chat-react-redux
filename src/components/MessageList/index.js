import React from 'react'
import Message from './Message'

import '../../static/styles/messageList/style.css'

class MessageList extends React.Component {
    render() {
        return (
            <section className='messages'>
                <ul>
                    {this.props.messages.map(message => (
                        <Message
                            key={message.id}
                            {...message}
                            owner={this.props.owner}
                        />
                    ))}
                </ul>
                
            </section>    
        )    
    }
}

export default MessageList