import { connect } from "react-redux";
import { actionCreatorFollowed, actionCreatorSetUsers } from "../../../redux/reducerUsers";
import Users from "./Users";
import PropTypes from "prop-types";

Users.PropTypes = {
    users: PropTypes.array
}
const mapStateToProps = (state) => {
    
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToFollowed: (userId) => {
            
            dispatch(actionCreatorFollowed(userId));
        },
        setUsers: (users) => {
            dispatch(actionCreatorSetUsers(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);