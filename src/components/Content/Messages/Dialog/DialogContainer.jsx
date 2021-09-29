import Dialog from './Dialog';
import Message from './Message/Message';
import { actionCreatorIsPressSend, actionCreatorUpdateTextMessage, actionCreatorSendMess } from '../../../../redux/reducerMessage';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {

    let messages = state.messagePage.messageData.map(m => <Message key={m.id} imgUrl={m.imgUrl} imgAlt={m.imgAlt} textMess={m.textMess} dateMess={m.dateMess} />)

    return {
        messages: messages,
        textNewMess: state.messagePage.textNewMess
    }
}

const DialogContainer = connect(mapStateToProps, {
    sendMess: actionCreatorSendMess,
    updateTextSendMess: actionCreatorUpdateTextMessage,
    isPressSend: actionCreatorIsPressSend
})(Dialog);


export default DialogContainer;