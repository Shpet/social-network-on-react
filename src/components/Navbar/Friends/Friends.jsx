import Friend from './Friend/Friend';
import mod from './Friends.module.css'
const Friends = (props) => {
    let friends = props.data.map(c => <Friend id={c.id} name={c.name} imgUrl={c.imgUrl} state={c.isOnline} />);

    return (

        <div className={`${props.className} ${mod.friendsWrap}`}>
            {friends}
        </div>
    )
}

export default Friends