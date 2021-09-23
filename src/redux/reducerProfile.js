const TYPE = 'ADD-POST',
    POST_TEXT = 'UPDATE-TEXT-NEW-POST',
    IS_PRESS_POST = 'IS-PRESS-POST';

let initialState = {
    profilePage: {
        postData: [
            { id: 0, mess: "he href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.", date: "01.03.2018" },
            { id: 1, mess: "First post", date: "01.06.2016" },
            { id: 2, mess: "To ignore, add // eslint-disable-next-line to the line before.", date: "31.02.2017" },
        ],
        textNewPost: ''
    }
}
const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case TYPE:
            {
                action.e.preventDefault();
                return addPost(state);
            }
        case POST_TEXT: {
            let stateCopy = { ...state };
            stateCopy.profilePage.textNewPost = action.textNewPost;
            return stateCopy;
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
        default:
            return state;
    }
}

function addPost(state) {

    let stateCopy = { ...state };
    if (state.profilePage.textNewPost.trim()) {
        const dateNow = new Date(Date.now()).toLocaleString('ru', { day: "2-digit", month: "2-digit", year: 'numeric' }).replace(/\//g, '.');
        let newPost = {
            id: 3,
            mess: state.profilePage.textNewPost,
            date: dateNow,
        }

        stateCopy.profilePage.postData = [...state.profilePage.postData];
        stateCopy.profilePage.postData.unshift(newPost);
        stateCopy.profilePage.textNewPost = '';
    }
    return stateCopy;
}
export const
    actionCreatorAddPost = (event) => ({
        type: TYPE,
        e: event
    }),
    actionCreatorUpdateTextNewPost = text => ({
        type: POST_TEXT,
        textNewPost: text
    }),
    actionCreatorIsPressPost = event => ({
        type: IS_PRESS_POST,
        e: event
    })
export default reducerProfile;