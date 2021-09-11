const TYPE = 'ADD-POST',
    POST_TEXT = 'UPDATE-TEXT-NEW-POST';

const reducerProfile = (state, action) => {
    switch (action.type) {
        case TYPE:
            if (state.textNewPost.trim()) {
                const dateNow = new Date(Date.now()).toLocaleString('ru', { day: "2-digit", month: "2-digit", year: 'numeric' }).replace(/\//g, '.');
                let newPost = {
                    id: 3,
                    mess: state.textNewPost,
                    date: dateNow,
                }
                state.postData.unshift(newPost);
                state.textNewPost = '';
            } return state;
        case POST_TEXT:

            state.textNewPost = action.textNewPost;
            return state;
        default:
            return state;
    }
}

export const
    actionCreatorAddPost = () => ({
        type: TYPE
    }),
    actionCreatorUpdateTextNewPost = text => ({
        type: POST_TEXT,
        textNewPost: text
    })
export default reducerProfile;