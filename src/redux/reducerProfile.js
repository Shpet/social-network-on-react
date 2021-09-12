const TYPE = 'ADD-POST',
    POST_TEXT = 'UPDATE-TEXT-NEW-POST',
    IS_PRESS_POST = 'IS-PRESS-POST';

const reducerProfile = (state, action) => {
    switch (action.type) {
        case TYPE:
            addPost();
            return state;
        case POST_TEXT:
            state.textNewPost = action.textNewPost;
            return state;
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
                addPost();
            }
            return state;
        default:
            return state;
    }

    function addPost() {
        if (state.textNewPost.trim()) {
            const dateNow = new Date(Date.now()).toLocaleString('ru', { day: "2-digit", month: "2-digit", year: 'numeric' }).replace(/\//g, '.');
            let newPost = {
                id: 3,
                mess: state.textNewPost,
                date: dateNow,
            }
            state.postData.unshift(newPost);
            state.textNewPost = '';
        }
    }
}

export const
    actionCreatorAddPost = () => ({
        type: TYPE
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