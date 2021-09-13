
import Companions from './Companions/Companions';
import DialogContainer from './Dialog/DialogContainer';
import mod from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={mod.messWrap}>
            <Companions companionsData={props.data.messagePage.companionsData} />
            <DialogContainer messageData={props.data.messagePage.messageData}
                    dispatch={props.dispatch}
                    textNewMess={props.data.messagePage.textNewMess} 
                     />
        </div>
    )
}

export default Messages;