import Dialog from './Dialog';
import Message from './Message/Message';
import { actionCreatorIsPressSend, actionCreatorUpdateTextMessage, actionCreatorSendMess } from '../../../../redux/reducerMessage';

const DialogContainer = (props) => {

    
    let messages = props.messageData.map(m => <Message imgUrl={m.imgUrl} imgAlt={m.imgAlt} textMess={m.textMess} dateMess={m.dateMess} />),
        sendMess = () => {
            props.dispatch(actionCreatorSendMess());
        },
        updateTextSendMess = (e) => {
            props.dispatch(actionCreatorUpdateTextMessage(e.target.value));
        },
        isPressSend = (e) => {
            props.dispatch(actionCreatorIsPressSend(e));
        }

    return <Dialog messages={messages}
        textNewMess={props.textNewMess}
        sendMess={sendMess}
        updateTextSendMess={updateTextSendMess}
        isPressSend={isPressSend} />
}

export default DialogContainer;