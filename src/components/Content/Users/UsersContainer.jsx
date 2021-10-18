import { connect } from 'react-redux';
import { actionCreatorFollowed, thunkFollow, thunkGetUser, thunkLoadMore, thunkUnfollow } from "../../../redux/reducerUsers";
import React from 'react';
import Users from './Users';
import Preloader from '../../CommonComponents/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUser(this.props.currentPage);
    }
    loadMore = (e) => {
        this.props.loadMore(this.props.currentPage, e.target);
    }
    render() {
        let remainingUsers = this.props.totalUsersCount - this.props.users.length;
        return <>
            <Users remainingUsers={remainingUsers}
                users={this.props.users}
                goToFollowed={this.props.goToFollowed}
                loadMore={this.loadMore}
                unfollow={this.props.unfollow}
                follow={this.props.follow} />
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
    getUser: thunkGetUser,
    loadMore: thunkLoadMore,
    unfollow: thunkUnfollow,
    follow: thunkFollow
})(UsersContainer);