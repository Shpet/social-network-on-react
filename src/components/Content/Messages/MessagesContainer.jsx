
import { connect } from 'react-redux';
import Messages from './Messages';

let mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth
    }
}

const MessagesContainer = connect(mapStateToProps, {})(Messages)


export default MessagesContainer;