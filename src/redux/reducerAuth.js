import { profileAPI } from "../API/profileAPI";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const reducerAuth = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, ...action, isAuth: true }
        }
        default: {
            return state;
        }
    }
}

export const
    actionCreatorSetUserData = (userId, email, login) => ({
        type: SET_USER_DATA,
        userId,
        email,
        login
    }),

    thunkAuthInfo = () => {
        return dispatch => {
            profileAPI.getAuthInfo()
                .then(response => {
                    if (response.resultCode === 0) {
                        let { id, email, login } = response.data;
                        dispatch(actionCreatorSetUserData(id, email, login));
                    }

                });
        }
    }


export default reducerAuth;