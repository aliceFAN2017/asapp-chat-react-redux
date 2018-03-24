import { connect } from 'react-redux';
import { addMessage } from '../../actions'
import AddMessageComponent from '../../components/AddMessage'


const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(addMessage(message, author))
    }
})

const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)
export default AddMessage 
