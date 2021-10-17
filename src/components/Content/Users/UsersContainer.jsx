import { connect } from 'react-redux';
import { actionCreatorFollowed, actionCreatorSetCurrentPage, actionCreatorSetTotalUsersCount, actionCreatorSetUsers, actionCreatorUpdateIsLoadingUsers } from "../../../redux/reducerUsers";
import React from 'react';
import Users from './Users';
import Preloader from '../../CommonComponents/Preloader/Preloader';
import { usersAPI } from '../../../API/usersAPI';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.updateIsLoadingUsers();
        usersAPI.getUsers(this.props.currentPage).then(response => {
            this.props.updateIsLoadingUsers();
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
        });
    }
    loadMore = (e) => {
        e.target.disabled = true;
        this.props.updateIsLoadingUsers();
        this.props.setCurrentPage(this.props.currentPage + 1);

        usersAPI.getUsers(this.props.currentPage + 1).then(response => {
            e.target.disabled = false;
            this.props.updateIsLoadingUsers();
            this.props.setUsers(response.items);
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