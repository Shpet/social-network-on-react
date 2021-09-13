const TYPE = 'SEND-MESS',
    POST_TEXT = 'UPDATE-TEXT-SEND-MESS',
    IS_PRESS_SEND = 'IS-PRESS-SEND';

let initialState = {
    messagePage: {
        messageData: [
            { imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", textMess: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quos illum provident deleniti. Velit laboriosam dolorum necessitatibus ab vitae eaque est aliquam. Possimus excepturi voluptate magni nemo impedit nisi at iure laudantium. Minima velit, blanditiis ipsum voluptatibus eligendi nobis sunt vero libero ad quas eveniet maiores, inventore dolor. Consequuntur quas iste delectus voluptates doloremque accusantium vitae deserunt blanditiis? Ullam, reprehenderit rerum? Vero quos perferendis voluptatibus facere minima inventore, suscipit alias cupiditate assumenda sit veniam maiores voluptatum! Vel libero necessitatibus inventore consequuntur ex doloremque quae perferendis? Similique distinctio rerum cumque quos assumenda amet porro. Maxime recusandae aperiam accusantium, amet impedit consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus.", dateMess: "12.03.2017" },
            { imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", textMess: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus.", dateMess: "12.03.2017" },
            { imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", textMess: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus.", dateMess: "12.03.2017" },
            { imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", textMess: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus.", dateMess: "12.03.2017" },
            { imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", textMess: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus.", dateMess: "12.03.2017" },
            { imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", textMess: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus.", dateMess: "12.03.2017" }
        ],
        companionsData: [
            { id: 1, imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", name: "Vadik Shpet" },
            { id: 2, imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", name: "Pomidor Siniy" },
            { id: 3, imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", name: "Pochka Ruka" },
            { id: 4, imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", name: "Lishayna Masha" },
            { id: 5, imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", name: "Neznayeva Ksu" }
        ],
        textNewMess: ''
    }
};
const reducerMessage = (state = initialState, action) => {
    switch (action.type) {
        case TYPE:
            sendMess();
            return state;
        case POST_TEXT:
            state.messagePage.textNewMess = action.textNewMess;
            return state;
        case IS_PRESS_SEND:
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
                sendMess();
            }
            return state;
        default:
            return state;
    }

    function sendMess() {
        if (state.messagePage.textNewMess.trim()) {
            const dateNow = new Date(Date.now()).toLocaleString('ru', { day: "2-digit", month: "2-digit", year: 'numeric' }).replace(/\//g, '.');
            let sendMess = {
                imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo",
                imgAlt: "You",
                textMess: state.messagePage.textNewMess,
                dateMess: dateNow,
            } 
            state.messagePage.messageData.push(sendMess);
            state.messagePage.textNewMess = '';
        }
    }
}

export const
    actionCreatorSendMess = () => ({
        type: TYPE
    }),
    actionCreatorUpdateTextMessage = text => ({
        type: POST_TEXT,
        textNewMess: text
    }),
    actionCreatorIsPressSend = event => ({
        type: IS_PRESS_SEND,
        e: event
    })
export default reducerMessage;