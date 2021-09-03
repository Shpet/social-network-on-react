import mod from './Post.module.css';

const Post = (props) => {
    return (
        <div className={mod['posts__post']}>
            <pre className={mod.textPost}>{props.mess}</pre>
            <p>{props.date}</p>
        </div>
    )
}
export default Post