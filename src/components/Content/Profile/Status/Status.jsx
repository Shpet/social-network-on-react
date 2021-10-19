import mod from './Status.module.css';

const Status = (props) => {

    return (
        <div className={mod.status}>
            {props.editMode
                ? <p className={mod.status__text}
                    onDoubleClick={props.toggleEditMode}
                >{props.status}</p>
                : <input className={mod.status__inp} type="text" value={props.status}
                    onBlur={props.toggleEditMode} autoFocus />
            }
        </div>
    )
}

export default Status