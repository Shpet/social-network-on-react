import mod from './Message.module.css';

const Message = (props) => {
    const imgUrl = props.imgUrl,
        imgAlt = props.imgAlt,
        textMess = props.textMess,
        dateMess = props.dateMess;
    return (
        <div className={mod.message}>
            <img src={imgUrl} alt={imgAlt} />
            <pre className={mod.textMessage}>{textMess}</pre>
            <p className={mod.dateMess}>{dateMess}</p>
        </div>
    )
}

export default Message;