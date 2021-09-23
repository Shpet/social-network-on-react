import React from 'react';
import { actionCreatorIsPressSend, actionCreatorSendMess, actionCreatorUpdateTextMessage } from '../../../../../redux/reducerMessage';
import mod from './NewMessage.module.css';

const NewMessage = (props) => {

    return (
        <form className={mod.newMessage}>
            <textarea placeholder="Enter your message"
                value={props.textNewMess}
                onChange={props.updateTextSendMess}
                onKeyDown={props.isPressSend}></textarea>
            <input type="submit" value="отправить"
                onClick={props.sendMess} />
        </form>
    )
}

export default NewMessage;