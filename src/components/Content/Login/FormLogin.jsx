import { Field, reduxForm } from "redux-form";

const FormLogin = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <Field type="text" name="login" placeholder="login" component="input" />
            <br />
            <Field type="password" name="pass" placeholder="Your pass" component="input" />
            <br />
            <Field type="checkbox" name="policy" component="input" />
            <br />
            <button type="submit"> Login </button>
            <br />
        </form>
    )
}



export default reduxForm({ form: 'login' })(FormLogin);