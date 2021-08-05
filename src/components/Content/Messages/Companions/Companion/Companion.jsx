import { NavLink } from 'react-router-dom';
import mod from './Companion.module.css';

const Companion = (props) => {
    const imgUrl = props.imgUrl,
        imgAlt = props.imgAlt,
        name = props.name,
        path = '/messages/' + props.id;

    return (
        <NavLink to={path} className={mod.companion} activeClassName={mod.companionActive}>
            <img src={imgUrl} alt={props.imgAlt} />
            <span>{props.name}</span>
        </NavLink>
    )
}

export default Companion;