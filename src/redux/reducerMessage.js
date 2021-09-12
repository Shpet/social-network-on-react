const TYPE = 'SEND-MESS',
    POST_TEXT = 'UPDATE-TEXT-SEND-MESS',
    IS_PRESS_SEND = 'IS-PRESS-SEND';

const reducerMessage = (state, action) => {
    switch (action.type) {
        case TYPE:
            sendMess();
            return state;
        case POST_TEXT:
            state.textNewMess = action.textNewMess;
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