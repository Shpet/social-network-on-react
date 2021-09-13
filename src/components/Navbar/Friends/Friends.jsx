import mod from './Friends.module.css'
const Friends = (props) => {
    let friends = props.friends;

    return (
        <div className={`${props.className} ${mod.friendsWrap}`}>
            {friends}
        </div>
    )
}

export default Friends