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
            let enter = false,
                shift = false;
            if (e.key === "Enter") {
                enter = true;   // sendMess();
            }
            if (e.shiftKey) {
                shift = true;
            }
            if (enter && shift) {
                e.preventDefault();
                sendMess();
                enter = false;
                shift = false;
            }
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