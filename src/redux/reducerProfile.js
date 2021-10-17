const TYPE = 'ADD-POST',
    POST_TEXT = 'UPDATE-TEXT-NEW-POST',
    IS_PRESS_POST = 'IS-PRESS-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    IS_LOADING = 'IS_LOADING'


let initialState = {
    postData: [
        { id: 0, mess: "he href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.", date: "01.03.2018" },
        { id: 1, mess: "First post", date: "01.06.2016" },
        { id: 2, mess: "To ignore, add // eslint-disable-next-line to the line before.", date: "31.02.2017" },
    ],
    textNewPost: '',
    profile: null,
    isLoadingProfile: false,
    baseImgUrl: 'https://avatars.mds.yandex.net/get-zen_gallery/3129491/pub_5f735184ece66e29a8651a30_5f735185ece66e29a8651a32/scale_1200'
}
const reducerProfile = (state = initialState, action) => {
    
    switch (action.type) {
        case TYPE:
            {
                action.e.preventDefault();
                return addPost(state);
            }
        case POST_TEXT: {
            return {
                ...state,
                textNewPost: action.textNewPost
            };

        }
        case IS_PRESS_POST:
            let enter = false,
                shift = false;
            if (action.e.key === "Enter") {
                enter = true;
            }
            if (action.e.shiftKey) {
                shift = true;
            }
            if (enter && shift) {
                action.e.preventDefault();
                enter = false;
                shift = false;
                return addPost(state);
            }
            return state;
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case IS_LOADING: {
            return { ...state, isLoadingProfile: !state.isLoadingProfile }
        }
        default:
            return state;
    }
}

function addPost(state) {

    let stateCopy;
    if (state.textNewPost.trim()) {
        const dateNow = new Date(Date.now()).toLocaleString('ru', { day: "2-digit", month: "2-digit", year: 'numeric' }).replace(/\//g, '.');
        let newPost = {
            id: 3,
            mess: state.textNewPost,
            date: dateNow,
        }

        stateCopy = {
            ...state,
            postData: [newPost, ...state.postData],
            textNewPost: ''
        }
    }
    return stateCopy;
}
export const
    actionCreatorAddPost = (event) => ({
        type: TYPE,
        e: event
    }),
    actionCreatorUpdateTextNewPost = e => ({
        type: POST_TEXT,
        textNewPost: e.target.value
    }),
    actionCreatorIsPressPost = event => ({
        type: IS_PRESS_POST,
        e: event
    }),
    actionCreatorSetUserProfile = profile => ({
        type: SET_USER_PROFILE,
        profile: profile
    }),
    actionCreatorUpdateIsLoadingProfile = () => ({
        type: IS_LOADING
    })
export default reducerProfile;