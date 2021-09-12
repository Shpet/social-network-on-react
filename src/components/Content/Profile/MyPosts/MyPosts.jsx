import React from 'react';
import Post from './Post/Post'
import mod from './MyPosts.module.css';
import { actionCreatorAddPost, actionCreatorUpdateTextNewPost, actionCreatorIsPressPost } from '../../../../redux/reducerProfile';



const MyPosts = (props) => {

    let posts = props.postData.map(p => <Post mess={p.mess} date={p.date} />),
        textNewPost = props.textNewPost,
        addPost = (e) => {
            e.preventDefault();
            props.dispatch(actionCreatorAddPost());
        },
        updateTextNewPost = (e) => {
            props.dispatch(actionCreatorUpdateTextNewPost(e.target.value));
        },
        isPressPost = (e) => {
            props.dispatch(actionCreatorIsPressPost(e));
        }
    return (
        <div className={mod.posts}>
            <h3>My posts</h3>
            <div className={mod['posts__new-post']}>
                <form>
                    <textarea placeholder="Write about your mood..."
                        value={textNewPost}
                        onChange={updateTextNewPost}
                        onKeyDown={isPressPost} />
                    <input type="submit" onClick={addPost} />
                </form>
            </div>
            <div className={mod['old-posts']}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;