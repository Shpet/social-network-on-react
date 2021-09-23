import React from 'react';
import Post from './Post/Post'
import { actionCreatorAddPost, actionCreatorUpdateTextNewPost, actionCreatorIsPressPost } from '../../../../redux/reducerProfile';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {

    let posts = state.profilePage.postData.map(p => <Post mess={p.mess} date={p.date} />),
        textNewPost = state.profilePage.textNewPost;

    return {
        posts: posts,
        textNewPost: textNewPost
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        addPost: (e)=>{
            dispatch(actionCreatorAddPost(e));
        },
        updateTextNewPost: (e)=>{
            dispatch(actionCreatorUpdateTextNewPost(e.target.value));
        },
        isPressPost: (e)=>{
            dispatch(actionCreatorIsPressPost(e));
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;