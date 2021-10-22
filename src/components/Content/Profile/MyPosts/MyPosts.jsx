import FormPost from './FormPost';
import mod from './MyPosts.module.css';



const MyPosts = (props) => {
    const addPost = (values) => {
        console.log(values);
        props.addPost(values.newPost);
    }
    return (
        <div className={mod.posts}>
            <h3>My posts</h3>
            <div className={mod['posts__new-post']}>
                <FormPost onSubmit={addPost} isPressPost={props.isPressPost} />
            </div>
            <div className={mod['old-posts']}>
                {props.posts}
            </div>
        </div>
    )
}

export default MyPosts;