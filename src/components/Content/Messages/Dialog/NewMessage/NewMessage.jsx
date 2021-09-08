import React from 'react';
import mod from './NewMessage.module.css';

const NewMessage = (props) => {
    let newMess = React.createRef(),
        textNewMess = props.textNewMess,
        sendMess = () => {
            props.dispatch({type: 'SEND-MESS'});
        },
        updateTextSendMess = () => {
            props.dispatch({type: 'UPDATE-TEXT-SEND-MESS', text: newMess.current.value});
        },
        isPressSend = (e) => {
            props.dispatch({type: 'IS-PRESS-SEND', event: e});
        }
    return (
        <form className={mod.newMessage}>
            <textarea placeholder="Enter your message"
                ref={newMess}
                value={textNewMess}
                onChange={updateTextSendMess}
                onKeyDown={isPressSend}></textarea>
            <input type="submit" value="отправить"
                onClick={(e) => { e.preventDefault(); sendMess(); }} />
        </form>
    )
}

export default NewMessage;