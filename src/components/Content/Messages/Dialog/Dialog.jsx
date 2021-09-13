import mod from './Dialog.module.css';
import DialogHeader from './DialogHeader/DialogHeader';
import NewMessage from './NewMessage/NewMessage';

const Dialog = (props) => {

    let messages = props.messages;

    return (
        <div className={mod.dialog}>
            <DialogHeader name="Vadik Shpet" status="online" />
            <section className={mod.messages}>
                {messages}
                <NewMessage textNewMess={props.textNewMess}
                    sendMess={props.sendMess}
                    updateTextSendMess={props.updateTextSendMess}
                    isPressSend={props.isPressSend} />

            </section>
        </div >
    )
}

export default Dialog;