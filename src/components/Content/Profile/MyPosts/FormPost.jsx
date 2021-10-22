import { Field, reduxForm } from "redux-form"


const FormPost = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" placeholder="Write about your mood..."
                value={props.textNewPost}
                onKeyDown={props.isPressPost}
                name="newPost" />
            <button onClick={props.addPost} >отправить</button>
        </form>
    )
}

export default reduxForm({ form: 'newPost' })(FormPost)