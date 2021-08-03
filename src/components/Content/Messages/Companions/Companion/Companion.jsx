import mod from './Companion.module.css';

const Companion = (props) => {
    const imgUrl = props.imgUrl,
        imgAlt = props.imgAlt,
        name = props.name,
        active = props.isActive ? mod.companionActive : '';

    return (
        <div className={mod.companion + " " + active}>
            <img src={imgUrl} alt={props.imgAlt} />
            <span>{props.name}</span>
        </div>
    )
}

export default Companion;