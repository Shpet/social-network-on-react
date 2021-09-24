const FOLLOWED = 'FOLLOWED',
    SET_USERS = 'SET_USERS'


let initialState = {
  users: [ ]
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
            
            return { ...state, users: [ ...state.users, ...action.users ] };
        }
        default: {
            return state;
        }
    }
}

export const
    actionCreatorFollowed = (userId) => ({
        type: FOLLOWED,
        userId: userId
    }),
    actionCreatorSetUsers = (users) => ({
        type: SET_USERS,
        users: users
    });

export default reducerUsers;