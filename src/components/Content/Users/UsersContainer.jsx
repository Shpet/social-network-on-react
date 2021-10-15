import { connect } from 'react-redux';
import { actionCreatorFollowed, actionCreatorSetCurrentPage, actionCreatorSetTotalUsersCount, actionCreatorSetUsers, actionCreatorUpdateIsLoadingUsers } from "../../../redux/reducerUsers";
import * as axios from 'axios';
import React from 'react';
import Users from './Users';
import Preloader from '../../CommonComponents/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.updateIsLoadingUsers();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=12&page=${this.props.currentPage}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.updateIsLoadingUsers();
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
    loadMore = (e) => {
        e.target.disabled = true;
        this.props.updateIsLoadingUsers();
        this.props.setCurrentPage(this.props.currentPage + 1);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=12&page=${this.props.currentPage + 1}`, {
            withCredentials: true
        })
            .then(response => {
                e.target.disabled = false;
                this.props.updateIsLoadingUsers();
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        let remainingUsers = this.props.totalUsersCount - this.props.users.length;
        return <>
            <Users remainingUsers={remainingUsers}
                users={this.props.users}
                goToFollowed={this.props.goToFollowed}
                loadMore={this.loadMore} />
            {this.props.isLoadingUsers &&
                <Preloader />}
        </>
    }
}

const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isLoadingUsers: state.usersPage.isLoadingUsers
    }
}

export default connect(mapStateToProps, {
    goToFollowed: actionCreatorFollowed,
    setUsers: actionCreatorSetUsers,
    setTotalUsersCount: actionCreatorSetTotalUsersCount,
    setCurrentPage: actionCreatorSetCurrentPage,
    updateIsLoadingUsers: actionCreatorUpdateIsLoadingUsers
})(UsersContainer);