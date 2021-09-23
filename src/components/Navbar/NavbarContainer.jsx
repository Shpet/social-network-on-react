import { connect } from 'react-redux';
import Friend from './Friends/Friend/Friend';
import Navbar from './Navbar';
// const OldNavbarContainer = (props) => {
//     let friends = props.data
//         .sort((a, b) => b.isOnline - a.isOnline)
//         .map(c => <Friend id={c.id} name={c.name} imgUrl={c.imgUrl} state={c.isOnline} />);

//     return <Navbar friends={friends} />
// }

let mapStateToProps = (state) => {
    let friends = state.navbar.navbar.friends
        .sort((a, b) => b.isOnline - a.isOnline)
        .map(c => <Friend id={c.id} name={c.name} imgUrl={c.imgUrl} state={c.isOnline} />);

    return {
        friends: friends
    }
}
let mapDispatchToProps = () => {
    return {

    }
}
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;