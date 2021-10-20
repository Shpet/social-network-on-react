import mod from './Status.module.css';

const Status = (props) => {

    return (
        <div className={mod.status}>
            {!props.editMode
                ? <p className={mod.status__text}
                    onDoubleClick={props.activateEditMode}
                >{props.status}</p>
                : <input className={mod.status__inp} type="text" value={props.status}
                    onBlur={props.deactivateEditMode} autoFocus />
            }
        </div>
    )
}

export default Status