import mod from './Post.module.css';

const Post = () => {
    return (
        <div className={mod['posts__post']}>
            <p>Some text Some text Some text Some textSome text</p>
            <p>01.11.2021</p>
        </div>
    )
}
export default Post