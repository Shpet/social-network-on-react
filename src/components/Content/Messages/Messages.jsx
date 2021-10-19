
import CompanionsContainer from './Companions/CompanionsContainer';
import DialogContainer from './Dialog/DialogContainer';
import mod from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={mod.messWrap}>
            <CompanionsContainer />
            <DialogContainer />
        </div>
    )
}

export default Messages;