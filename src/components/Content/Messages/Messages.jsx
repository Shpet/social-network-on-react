
import { NavLink } from 'react-router-dom';
import Companions from './Companions/Companions';
import Dialog from './Dialog/Dialog';
import mod from './Messages.module.css';

const Messages = () => {
    return (
        <div className={mod.messWrap}>
            <Companions />
            <Dialog />
        </div>
    )
}

export default Messages;