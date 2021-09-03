import React from 'react';
import Post from './Post/Post'
import mod from './MyPosts.module.css';

const MyPosts = (props) => {

    let newPost = React.createRef(),
        posts = props.postData.map(p => <Post mess={p.mess} date={p.date} />),
        textNewPost = props.textNewPost,
        addPost = () => {
            props.addPost();
        },
        updateTextNewPost = () => {

            props.updateTextNewPost(newPost.current.value);
        },
        isPressSend = (e) => {
            let enter = false,
                shift = false;
            if (e.key === "Enter") {
                enter = true;   // sendMess();
            }
            if (e.shiftKey) {
                shift = true;
            }
            if (enter && shift) {
                e.preventDefault();
                addPost();
                enter = false;
                shift = false;
            }
        };

    return (
        <div className={mod.posts}>
            <h3>My posts</h3>
            <div className={mod['posts__new-post']}>
                <form>
                    <textarea placeholder="Write about your mood..."
                        ref={newPost}
                        value={textNewPost}
                        onChange={updateTextNewPost}
                        onKeyDown={isPressSend} />
                    <input type="submit" onClick={(e) => { e.preventDefault(); addPost(); }} />
                </form>
            </div>
            <div className={mod['old-posts']}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;