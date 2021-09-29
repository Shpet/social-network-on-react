import React from 'react';
import Post from './Post/Post'
import { actionCreatorAddPost, actionCreatorUpdateTextNewPost, actionCreatorIsPressPost } from '../../../../redux/reducerProfile';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {

    let posts = state.profilePage.postData.map(p => <Post key={p.id} mess={p.mess} date={p.date} />),
        textNewPost = state.profilePage.textNewPost;

    return {
        posts: posts,
        textNewPost: textNewPost
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost: actionCreatorAddPost,
    updateTextNewPost: actionCreatorUpdateTextNewPost,
    isPressPost: actionCreatorIsPressPost
})(MyPosts);

export default MyPostsContainer;