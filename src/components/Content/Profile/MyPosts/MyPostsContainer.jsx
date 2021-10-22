import React from 'react';
import Post from './Post/Post'
import { actionCreatorAddPost } from '../../../../redux/reducerProfile';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    const isPressPost = (e) => {
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
            e.target.nextSibling.click();
            enter = false;
            shift = false;
        }
    }
    let posts = state.profilePage.postData.map(p => <Post key={p.id} mess={p.mess} date={p.date} />),
        textNewPost = state.profilePage.textNewPost;

    return {
        posts: posts,
        textNewPost: textNewPost,
        isPressPost
    }
}
let mapDispatchToProps = (dispatch) => ({
    addPost: newPostText => {
        dispatch(actionCreatorAddPost(newPostText))
    }
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;