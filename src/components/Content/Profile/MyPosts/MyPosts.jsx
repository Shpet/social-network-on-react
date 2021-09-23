import mod from './MyPosts.module.css';



const MyPosts = (props) => {

    return (
        <div className={mod.posts}>
            <h3>My posts</h3>
            <div className={mod['posts__new-post']}>
                <form>
                    <textarea placeholder="Write about your mood..."
                        value={props.textNewPost}
                        onChange={props.updateTextNewPost}
                        onKeyDown={props.isPressPost} />
                    <input type="submit" onClick={props.addPost} />
                </form>
            </div>
            <div className={mod['old-posts']}>
                {props.posts}
            </div>
        </div>
    )
}

export default MyPosts;