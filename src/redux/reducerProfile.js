import { profileAPI } from "../API/profileAPI";

const ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    IS_LOADING = 'IS_LOADING',
    SET_STATUS = 'SET_STATUS'


let initialState = {
    postData: [
        { id: 0, mess: "he href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.", date: "01.03.2018" },
        { id: 1, mess: "First post", date: "01.06.2016" },
        { id: 2, mess: "To ignore, add // eslint-disable-next-line to the line before.", date: "31.02.2017" },
    ],
    profile: null,
    isLoadingProfile: false,
    baseImgUrl: 'https://avatars.mds.yandex.net/get-zen_gallery/3129491/pub_5f735184ece66e29a8651a30_5f735185ece66e29a8651a32/scale_1200',
    status: 'Enter your status'
}
const reducerProfile = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            {
                return addPost(state, action.newPostText);
            }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case IS_LOADING: {
            return { ...state, isLoadingProfile: !state.isLoadingProfile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state;
    }
}

function addPost(state, text) {

    let stateCopy;
    if (text.trim()) {
        const dateNow = new Date(Date.now()).toLocaleString('ru', { day: "2-digit", month: "2-digit", year: 'numeric' }).replace(/\//g, '.');
        let newPost = {
            id: state.postData["length"],
            mess: text,
            date: dateNow,
        }

        stateCopy = {
            ...state,
            postData: [newPost, ...state.postData],
        }
    }
    return stateCopy;
}
export const
    actionCreatorAddPost = (text) => ({
        type: ADD_POST,
        newPostText: text
    }),
    actionCreatorSetUserProfile = profile => ({
        type: SET_USER_PROFILE,
        profile: profile
    }),
    actionCreatorUpdateIsLoadingProfile = () => ({
        type: IS_LOADING
    }),
    actionCreatorSetStatus = (status) => ({
        type: SET_STATUS,
        status,
    }),


    thunkGetProfile = (userId) => {
        return dispatch => {
            if (userId === 'me') {
                dispatch(actionCreatorUpdateIsLoadingProfile());

                profileAPI.getAuthInfo()
                    .then(response => {
                        if (response.resultCode === 0) {

                            let id = response.data.id;

                            profileAPI.getProfile(id)
                                .then(response => {
                                    dispatch(actionCreatorUpdateIsLoadingProfile());
                                    dispatch(actionCreatorSetUserProfile(response));

                                });
                        }

                    });
            }
            else {

                dispatch(actionCreatorUpdateIsLoadingProfile());
                profileAPI.getProfile(userId)
                    .then(response => {
                        dispatch(actionCreatorUpdateIsLoadingProfile());
                        dispatch(actionCreatorSetUserProfile(response));
                    })
                    .catch(response => {
                        dispatch(actionCreatorUpdateIsLoadingProfile());
                    });
            }
        }
    },
    thunkGetStatus = (userId) => {

        return dispatch => {

            if (userId === 'me') {

                profileAPI.getAuthInfo()
                    .then(response => {
                        if (response.resultCode === 0) {

                            userId = response.data.id;
                            profileAPI.getStatus(userId)
                                .then(resp => {
                                    let status = resp.data ? resp.data : 'No status'
                                    dispatch(actionCreatorSetStatus(status));
                                })
                        }

                    });
            }
            profileAPI.getStatus(userId)
                .then(response => {
                    let status = response.data ? response.data : 'No status'
                    dispatch(actionCreatorSetStatus(status));
                })

        }
    },
    thunkUpdateStatus = (status) => {
        return dispatch => {


            profileAPI.updateStatus(status)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(actionCreatorSetStatus(status))
                    }
                })
        }
    }
export default reducerProfile;