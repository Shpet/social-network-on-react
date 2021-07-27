import mod from './Post.module.css';

const Post = (props) => {
    return (
        <div className={mod['posts__post']}>
            <p>{props.mess}</p>
            <p>{props.date}</p>
        </div>
    )
}
export default Post