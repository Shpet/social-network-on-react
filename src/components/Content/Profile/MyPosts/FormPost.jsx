

const FormPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <textarea placeholder="Write about your mood..."
                value={props.textNewPost}
                onChange={props.updateTextNewPost}
                onKeyDown={props.isPressPost} />
            <input type="submit" onClick={props.addPost} />
        </form>
    )
}

export default FormPost