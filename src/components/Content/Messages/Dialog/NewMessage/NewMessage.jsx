import React from 'react';
import mod from './NewMessage.module.css';

const NewMessage = (props) => {
    let textNewMess = props.textNewMess,
        sendMess = () => {
            props.dispatch({type: 'SEND-MESS'});
        },
        updateTextSendMess = (e) => {
            props.dispatch({type: 'UPDATE-TEXT-SEND-MESS', text: e.target.value});
        },
        isPressSend = (e) => {
            props.dispatch({type: 'IS-PRESS-SEND', event: e});
        }
    return (
        <form className={mod.newMessage}>
            <textarea placeholder="Enter your message"
                value={textNewMess}
                onChange={updateTextSendMess}
                onKeyDown={isPressSend}></textarea>
            <input type="submit" value="отправить"
                onClick={(e) => { e.preventDefault(); sendMess(); }} />
        </form>
    )
}

export default NewMessage;