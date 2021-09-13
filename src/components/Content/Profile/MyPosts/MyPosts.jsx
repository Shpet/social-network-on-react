import React from 'react';
import mod from './MyPosts.module.css';



const MyPosts = (props) => {

    let posts = props.posts,
        textNewPost = props.textNewPost,
        addPost = (e) => {
            e.preventDefault();
            props.addPost();
        },
        updateTextNewPost = (e) => {
            props.updateTextNewPost(e);
        },
        isPressPost = (e) => {
            props.isPressPost(e);
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