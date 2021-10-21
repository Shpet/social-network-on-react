import { connect } from "react-redux";
import { Redirect } from "react-router";
import FormLoginRedux from "./FormLogin";

const mapPropsToState = state => ({
    isAuth: state.auth.isAuth,
})
const LoginContainer = (props) => {
    if (props.isAuth) return <Redirect to='/profile/me' />

    const onSubmit = FormData => {
        console.log(FormData);
    }
    return (
        <div>
            <h1>Login</h1>
            <FormLoginRedux onSubmit={onSubmit} />
        </div>
    )
}

export default connect(mapPropsToState)(LoginContainer);