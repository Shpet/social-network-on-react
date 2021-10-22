import mod from './Dialog.module.css';
import DialogHeader from './DialogHeader/DialogHeader';
import NewMessage from './NewMessage/NewMessage';

const Dialog = (props) => {

    let messages = props.messages;
    const addMess = (values) => {
        props.sendMess(values.message);
    }
    return (
        <div className={mod.dialog}>
            <DialogHeader name="Vadik Shpet" status="online" />
            <section className={mod.messages}>
                {messages}
                <NewMessage textNewMess={props.textNewMess}
                    updateTextSendMess={props.updateTextSendMess}
                    isPressSend={props.isPressSend}
                    onSubmit={addMess}
                />

            </section>
        </div >
    )
}

export default Dialog;