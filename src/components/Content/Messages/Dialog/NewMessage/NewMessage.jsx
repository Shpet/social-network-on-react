import React from 'react';
import mod from './NewMessage.module.css';

const NewMessage = (props) => {
    let newMess = React.createRef(),
        textNewMess = props.textNewMess,
        sendMess = () => {
            props.sendMess();
        },
        updateTextSendMess = () => {
            props.updateTextSendMess(newMess.current.value);
        },
        isPressSend = (e) => {
            props.isPressSend(e)
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