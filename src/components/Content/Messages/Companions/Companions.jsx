import mod from './Companions.module.css';

const Companions = (props) => {

    return (

        <div className={mod.companionWrap}>
            {props.companions}
        </div>
    )
}

export default Companions;