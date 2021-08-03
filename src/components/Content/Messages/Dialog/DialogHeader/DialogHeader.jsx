import mod from './DialogHeader.module.css'
const DialogHeader = (props) => {
    const name = props.name,
        status = props.status;
    return (
        <header className={mod.header}>
            <p>{name}</p>
            <p className={status}>{status}</p>
        </header>
    )
}

export default DialogHeader;