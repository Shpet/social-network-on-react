
import { NavLink } from 'react-router-dom';
import Companions from './Companions/Companions';
import Dialog from './Dialog/Dialog';
import mod from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={mod.messWrap}>
            <Companions companionsData={props.companionsData} />
            <Dialog messageData={props.messageData} />
        </div>
    )
}

export default Messages;