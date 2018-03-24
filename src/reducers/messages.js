const messages = (state=[], action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
        case 'MESSAGE_RECEIVED':
            return [
                ...state,
                {
                    id: action.id,
                    message: action.message,
                    author: action.author
                }
            ]
        default:
            return state
    }
}

export default messages