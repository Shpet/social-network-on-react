import React from 'react';
import Post from './Post/Post'
import { actionCreatorAddPost, actionCreatorUpdateTextNewPost, actionCreatorIsPressPost } from '../../../../redux/reducerProfile';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {

    let posts = props.postData.map(p => <Post mess={p.mess} date={p.date} />),
        textNewPost = props.textNewPost,
        addPost = () => {
            props.dispatch(actionCreatorAddPost());
        },
        updateTextNewPost = (e) => {
            props.dispatch(actionCreatorUpdateTextNewPost(e.target.value));
        },
        isPressPost = (e) => {
            props.dispatch(actionCreatorIsPressPost(e));
        }

    return <MyPosts isPressPost={isPressPost}
        updateTextNewPost={updateTextNewPost}
        addPost={addPost} 
        posts={posts}
        textNewPost={textNewPost}/>
}

export default MyPostsContainer;