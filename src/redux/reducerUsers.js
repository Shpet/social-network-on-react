const FOLLOWED = 'FOLLOWED',
    SET_USERS = 'SET_USERS',
    TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
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
            return {...state, totalUsersCount: action.count}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.count}
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
    });

export default reducerUsers;