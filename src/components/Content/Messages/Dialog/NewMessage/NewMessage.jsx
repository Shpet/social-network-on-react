import React from 'react';
import { actionCreatorIsPressSend, actionCreatorSendMess, actionCreatorUpdateTextMessage } from '../../../../../redux/reducerMessage';
import mod from './NewMessage.module.css';

const NewMessage = (props) => {
    let textNewMess = props.textNewMess,
        sendMess = (e) => {
            e.preventDefault();
            props.sendMess();
        },
        updateTextSendMess = (e) => {
            props.updateTextSendMess(e);
        },
        isPressSend = (e) => {
            props.isPressSend(e);
        }
    return (
        <form className={mod.newMessage}>
            <textarea placeholder="Enter your message"
                value={textNewMess}
                onChange={updateTextSendMess}
                onKeyDown={isPressSend}></textarea>
            <input type="submit" value="отправить"
                onClick={sendMess} />
        </form>
    )
}

export default NewMessage;