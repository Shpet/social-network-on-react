import Companion from './Companion/Companion';
import mod from './Companions.module.css';

const Companions = (props) => {

    let companions = props.companionsData.map(c => <Companion id={c.id} imgUrl={c.imgUrl} imgAlt={c.imgAlt} name={c.name} />)

    return (

        <div className={mod.companionWrap}>
            {companions}
        </div>
    )
}

export default Companions;