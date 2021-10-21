import Dialog from './Dialog';
import Message from './Message/Message';
import { actionCreatorSendMess } from '../../../../redux/reducerMessage';
import { connect } from 'react-redux';


let mapPropsToState = (state) => {

    let messages = state.messagePage.messageData.map(m => <Message key={m.id} imgUrl={m.imgUrl} imgAlt={m.imgAlt} textMess={m.textMess} dateMess={m.dateMess} />)
    const isPressSend = (e) => {
        let enter = false,
            shift = false;
        if (e.key === "Enter") {
            enter = true;
        }
        if (e.shiftKey) {
            shift = true;
        }
        if (enter && shift) {
            e.preventDefault();
            e.target.nextSibling.click();
            enter = false;
            shift = false;
        }
    }
    return {
        messages: messages,
        textNewMess: state.messagePage.textNewMess,
        isPressSend
    }
},
    mapDispatchToProps = (dispatch) => {
        return {
            sendMess: (message) => {
                dispatch(actionCreatorSendMess(message));
            }
        }
    }
const DialogContainer = connect(mapPropsToState, mapDispatchToProps)(Dialog);


export default DialogContainer;