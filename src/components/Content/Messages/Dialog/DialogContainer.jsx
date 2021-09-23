import Dialog from './Dialog';
import Message from './Message/Message';
import { actionCreatorIsPressSend, actionCreatorUpdateTextMessage, actionCreatorSendMess } from '../../../../redux/reducerMessage';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    let messages = state.messagePage.messagePage.messageData.map(m => <Message imgUrl={m.imgUrl} imgAlt={m.imgAlt} textMess={m.textMess} dateMess={m.dateMess} />)

    return {
        messages: messages,
        textNewMess: state.messagePage.messagePage.textNewMess
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        sendMess: (e) => {
            dispatch(actionCreatorSendMess(e));
        },
        updateTextSendMess: (e) => {
            dispatch(actionCreatorUpdateTextMessage(e.target.value));
        },
        isPressSend: (e) => {
            dispatch(actionCreatorIsPressSend(e));
        },
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);


export default DialogContainer;