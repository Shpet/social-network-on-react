let store = {
    _data: {
        content: {
            profilePage: {
                postData: [
                    { id: 0, mess: "he href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.", date: "01.03.2018" },
                    { id: 1, mess: "First post", date: "01.06.2016" },
                    { id: 2, mess: "To ignore, add // eslint-disable-next-line to the line before.", date: "31.02.2017" },
                ],
                textNewPost: ''
            },
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
        },
        navbar: {
            friends: [
                { id: 1, name: 'obe-rek', imgUrl: 'https://yt3.ggpht.com/ytc/AKedOLTDdAyFQThm2qhIB3TfchgPZB35CpC5qxdPCJDW=s88-c-k-c0x00ffffff-no-rj', isOnline: true },
                { id: 2, name: 'Common Sense', imgUrl: 'https://yt3.ggpht.com/ytc/AKedOLS7TVhCSjilZV19qjqCTOTQqsvG2WI_U_pLQ9LzFg=s88-c-k-c0x00ffffff-no-rj', isOnline: false },
                { id: 3, name: 'Suicidal Maniac', imgUrl: 'https://yt3.ggpht.com/ytc/AKedOLQeqF1yFvRSjatMqVbLnUVCr1t8QxTTOHiDfwnb2A=s88-c-k-c0x00ffffff-no-rj', isOnline: true },
                { id: 4, name: 'Kingsmen music', imgUrl: 'https://yt3.ggpht.com/ytc/AKedOLTCMHmEm6eUldXhVGPUaCsqNypuKUA63EhsdA7Ofw=s88-c-k-c0x00ffffff-no-rj', isOnline: false },
                { id: 5, name: 'Kim\'Ann Raymond', imgUrl: 'https://yt3.ggpht.com/ytc/AKedOLTDdAyFQThm2qhIB3TfchgPZB35CpC5qxdPCJDW=s88-c-k-c0x00ffffff-no-rj', isOnline: false },
            ]
        }
    },
    getData() {
        return this._data;
    },
    _callSubscriber() {
        console.log('data changed');
    },
    _addPost() {
        if (this._data.content.profilePage.textNewPost.trim()) {
            const dateNow = new Date(Date.now()).toLocaleString('ru', { day: "2-digit", month: "2-digit", year: 'numeric' }).replace(/\//g, '.');
            let newPost = {
                id: 3,
                mess: this._data.content.profilePage.textNewPost,
                date: dateNow,
            }
            this._data.content.profilePage.postData.unshift(newPost);
            this._data.content.profilePage.textNewPost = '';
            this._callSubscriber(this._data);
        }
    },
    _updateTextNewPost(text) {
        this._data.content.profilePage.textNewPost = text;
        this._callSubscriber(this._data)
    },
    _sendMess() {
        if (this._data.content.messagePage.textNewMess.trim()) {
            const dateNow = new Date(Date.now()).toLocaleString('ru', { day: "2-digit", month: "2-digit", year: 'numeric' }).replace(/\//g, '.');
            let sendMess = {
                imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo",
                imgAlt: "You",
                textMess: this._data.content.messagePage.textNewMess,
                dateMess: dateNow,
            }

            this._data.content.messagePage.messageData.push(sendMess);
            this._data.content.messagePage.textNewMess = '';
            this._callSubscriber(this._data);
        }
    },
    _updateTextSendMess(text) {
        this._data.content.messagePage.textNewMess = text;
        this._callSubscriber(this._data)
    },
    _isPressSend(e) {
        let enter = false,
            shift = false;
        if (e.key === "Enter") {
            enter = true;
        }
        if (e.shiftKey) {
            shift = true;
        }
        if (enter && shift) {
            e.preventDefault();
            enter = false;
            shift = false;
            if (this._data.content.messagePage.textNewMess) {
                this._sendMess();
            } else {
                this._addPost();
            }
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case "ADD-POST":
                this._addPost();
                break;
            case "UPDATE-TEXT-NEW-POST":
                this._updateTextNewPost(action.textNewPost);
                break;
            case "SEND-MESS":
                this._sendMess();
                break;
            case "UPDATE-TEXT-SEND-MESS":
                this._updateTextSendMess(action.text);
                break;
            case "IS-PRESS-SEND":
                this._isPressSend(action.event);
                break;
            default:
                console.log('Method unfound');
        }
    }
};
export const
    actionCreatorAddPost = () => ({ 
        type: 'ADD-POST' 
    }),
    actionCreatorUpdateTextNewPost = text => ({
        type: 'UPDATE-TEXT-NEW-POST',
        textNewPost: text
    }),
    actionCreatorIsPressSend = (e) => ({
        type: 'IS-PRESS-SEND',
        event: e
    });
export default store;
