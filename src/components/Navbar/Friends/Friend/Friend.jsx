import mod from './Friend.module.css'

const Friend = props => {

    return (
        <div key={props.id} className={mod.friend} >
            <div className={mod.friend__avatarWrap}>
                <img src={props.imgUrl} alt={props.name} />
                {props.state &&
                    <span className={mod.friend_online}></span>
                }
            </div>
            <p className={mod.friend__name}>{props.name}</p>
        </div>
    )
}

export default Friend