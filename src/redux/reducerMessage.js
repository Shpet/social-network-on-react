const TYPE = 'SEND-MESS',
    POST_TEXT = 'UPDATE-TEXT-SEND-MESS';

const reducerMessage = (state, action) => {
    switch (action.type) {
        case TYPE:
            if (state.textNewMess.trim()) {
                const dateNow = new Date(Date.now()).toLocaleString('ru', { day: "2-digit", month: "2-digit", year: 'numeric' }).replace(/\//g, '.');
                let sendMess = {
                    imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo",
                    imgAlt: "You",
                    textMess: state.textNewMess,
                    dateMess: dateNow,
                }

                state.messageData.push(sendMess);
                state.textNewMess = '';
            } return state;
        case POST_TEXT:
            state.textNewMess = action.textNewMess;
            return state;
        default:
            return state;
    }
}

export const
    actionCreatorSendMess = () => ({
        type: TYPE
    }),
    actionCreatorUpdateTextMessage = text => ({
        type: POST_TEXT,
        textNewMess: text
    })
export default reducerMessage;