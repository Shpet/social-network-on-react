import { connect } from "react-redux";
import { actionCreatorFollowed, actionCreatorSetCurrentPage, actionCreatorSetTotalUsersCount, actionCreatorSetUsers } from "../../../redux/reducerUsers";
import * as axios from 'axios';
import React from 'react';
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=12&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
    loadMore = () => {
        this.props.setCurrentPage(this.props.currentPage + 1);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=12&page=${this.props.currentPage + 1}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        let remainingUsers = this.props.totalUsersCount - this.props.users.length;
        return <Users remainingUsers={remainingUsers}
            users={this.props.users}
            goToFollowed={this.props.goToFollowed}
            loadMore={this.loadMore} />
    }
}

const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToFollowed: (userId) => {
            dispatch(actionCreatorFollowed(userId));
        },
        setUsers: (users) => {
            dispatch(actionCreatorSetUsers(users));
        },
        setTotalUsersCount: (count) => {
            dispatch(actionCreatorSetTotalUsersCount(count));
        },
        setCurrentPage: (count) => {
            dispatch(actionCreatorSetCurrentPage(count));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);