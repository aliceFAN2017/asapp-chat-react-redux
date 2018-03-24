import laura from '../static/images/girl.jpg';
import bob from '../static/images/bike.jpg';

const users = (state=[], action) => {
    return [
        ...state,
        { 
            sender: 'Laura', 
            profile: { laura }, 
            to: 'Bob' 
        },
        {
            sender: 'Bob', 
            profile: { bob }, 
            to: 'Laura' 
        }        
    ]
}

export default users