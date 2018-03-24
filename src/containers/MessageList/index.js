import { connect } from 'react-redux';
import MessageListComponent from '../../components/MessageList'

const mapStateToProps = (state) => ({
    messages: state.messages
})

const MessageList = connect(mapStateToProps, {})(MessageListComponent)

export default MessageList
