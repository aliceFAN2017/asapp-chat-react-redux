import React from 'react'
import '../../../static/styles/message/style.css'

class Message extends React.Component {
    render() {
        const username = this.props.author.sender;
        const owner = this.props.owner;
        const fromMe = username === owner ? 'from-me' : '';
        const receiver = username === owner ? '' : 'arrow-left';
        const sender = username === owner ? 'arrow-right' : '';

        return (
            <section className={ `message ${fromMe}` }>
                <img src={ this.props.author.profile } className='profile' alt='profile'/> 
                <section className='arrow-parent'>
                    <span className={ receiver }></span>
                    <span className='message-body'>{ this.props.message }</span>
                    <span className={ sender }></span>
                </section>
            </section>
        )
    }
}

export default Message