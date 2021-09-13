import Friend from './Friend/Friend';
import Friends from './Friends';
const FriendsContainer = (props) => {
    let friends = props.data
        .sort((a, b) => b.isOnline - a.isOnline)
        .map(c => <Friend id={c.id} name={c.name} imgUrl={c.imgUrl} state={c.isOnline} />);

    return <Friends friends={friends} className={props.className} />
}

export default FriendsContainer;