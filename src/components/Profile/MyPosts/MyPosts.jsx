import Post from './Post/Post'
import mod from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={mod.posts}>
            <h3>My posts</h3>
            <div className={mod['posts__new-post']}>
                <form>
                    <textarea placeholder="Write about your mood..."></textarea>
                    <input type="submit" />
                </form>
            </div>
            <div className={mod['old-posts']}>
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;