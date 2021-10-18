
import { Redirect } from 'react-router';
import CompanionsContainer from './Companions/CompanionsContainer';
import DialogContainer from './Dialog/DialogContainer';
import mod from './Messages.module.css';

const Messages = (props) => {
    if (!props.isAuth) {
        return <Redirect to='/login' />
    }
    return (
        <div className={mod.messWrap}>
            <CompanionsContainer />
            <DialogContainer />
        </div>
    )
}

export default Messages;