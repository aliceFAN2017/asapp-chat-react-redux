import React from 'react'
import Header from '../Header'

import '../../static/styles/addMessage/style.css'

class AddMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
                input: ''
        }
        
        this.changeHandle = this.changeHandle.bind(this)
        this.submitHandle = this.submitHandle.bind(this)
    }

    changeHandle(e) {
        this.setState(
            {
                input: e.target.value
            })
    }
    
    submitHandle(e) {
        e.preventDefault()
        let input = this.state.input
        if (!input.trim()) {
            return;
        }

        this.props.dispatch(input, {sender: this.props.sender, profile: this.props.profile, to: this.props.to})
        this.setState({
            input: ''
        })     
    }

    render() {
        let input

        return (
            <section>
                <form onSubmit={this.submitHandle} className='add-message'>
                    <input type='text' onChange={this.changeHandle} value={this.state.input} className='message-input'/>
                    <button type='submit' className='message-send'>
                        Send
                    </button>
                </form>
            </section>
        )
    }
}

export default AddMessage
