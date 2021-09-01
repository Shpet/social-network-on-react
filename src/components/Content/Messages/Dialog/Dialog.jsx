import mod from './Dialog.module.css';
import DialogHeader from './DialogHeader/DialogHeader';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const Dialog = (props) => {

    let messages = props.messageData.map(m => <Message imgUrl={m.imgUrl} imgAlt={m.imgAlt} textMess={m.textMess} dateMess={m.dateMess} />)
    
    // let messages = props.messageData.filter((m, i, arr) => i > arr.length -5);
    // messages = messages.map(m => <Message imgUrl={m.imgUrl} imgAlt={m.imgAlt} textMess={m.textMess} dateMess={m.dateMess} />);
    
    return (
        <div className={mod.dialog}>
            <DialogHeader name="Vadik Shpet" status="online" />
            <section className={mod.messages}>
                {messages}
                <NewMessage sendMess={props.sendMess}
                    updateTextSendMess={props.updateTextSendMess}
                    textNewMess={props.textNewMess} />

            </section>
        </div >
    )
}

export default Dialog;