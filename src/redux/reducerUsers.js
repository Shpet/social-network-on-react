import { usersAPI } from "../API/usersAPI"

const FOLLOWED = 'FOLLOWED',
    SET_USERS = 'SET_USERS',
    TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    IS_LOADING = 'IS_LOADING'


let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    isLoadingUsers: false
}

const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOWED: {
            return {
                ...state, users: state.users.map((item, i, arr) => {
                    if (action.userId === item.id) {
                        return { ...item, followed: !item.followed }
                    }
                    return item;
                })
            }
        }
        case SET_USERS: {

            return { ...state, users: [...state.users, ...action.users] };
        }
        case TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case SET_CURRENT_PAGE: {

            return { ...state, currentPage: action.count }
        }
        case IS_LOADING: {
            return { ...state, isLoadingUsers: !state.isLoadingUsers }
        }
        default: {
            return state;
        }
    }
}

export const
    actionCreatorFollowed = (userId) => ({
        type: FOLLOWED,
        userId
    }),
    actionCreatorSetUsers = (users) => ({
        type: SET_USERS,
        users
    }),
    actionCreatorSetTotalUsersCount = (count) => ({
        type: TOTAL_USERS_COUNT,
        count
    }),
    actionCreatorSetCurrentPage = (count) => ({
        type: SET_CURRENT_PAGE,
        count
    }),
    actionCreatorUpdateIsLoadingUsers = () => ({
        type: IS_LOADING
    }),


    thunkGetUser = (currentPage) => {
        return (dispatch) => {
            dispatch(actionCreatorUpdateIsLoadingUsers());

            usersAPI.getUsers(currentPage).then(response => {
                dispatch(actionCreatorUpdateIsLoadingUsers());
                dispatch(actionCreatorSetUsers(response.items));
                dispatch(actionCreatorSetTotalUsersCount(response.totalCount));
            });
        }
    },
    thunkLoadMore = (currentPage, btn) => {
        return (dispatch) => {
            btn.disabled = true;
            dispatch(actionCreatorUpdateIsLoadingUsers());
            dispatch(actionCreatorSetCurrentPage(currentPage + 1));

            usersAPI.getUsers(currentPage + 1).then(response => {
                btn.disabled = false;
                dispatch(actionCreatorUpdateIsLoadingUsers());
                dispatch(actionCreatorSetUsers(response.items));
            });
        }
    },
    thunkUnfollow = (userId, btn) => {
        return (dispatch) => {
            btn.disabled = true;
            usersAPI.unfollow(userId)
                .then(response => {
                    if (response.resultCode === 0) dispatch(actionCreatorFollowed(userId))
                }).finally(() => btn.disabled = false);
        }
    },
    thunkFollow = (userId, btn) => {
        return (dispatch) => {
            btn.disabled = true;
            usersAPI.follow(userId)
                .then(response => {
                    if (response.resultCode === 0) dispatch(actionCreatorFollowed(userId))
                }).finally(() => btn.disabled = false);
        }
    }

export default reducerUsers;