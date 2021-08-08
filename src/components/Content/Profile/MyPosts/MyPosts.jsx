import Post from './Post/Post'
import mod from './MyPosts.module.css';

const MyPosts = () => {
    const postData = [
        { mess: "he href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.", date: "01.03.2018" },
        { mess: "To ignore, add // eslint-disable-next-line to the line before.", date: "31.02.2017" },
        { mess: "First post", date: "01.06.2016" }
    ];
    let posts = postData.map(p => <Post mess={p.mess} date={p.date} />);
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
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;