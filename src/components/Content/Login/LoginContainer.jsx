import { connect } from "react-redux";
import FormLoginRedux from "./FormLogin";

const mapPropsToState = state => ({
    isAuth: state.auth.isAuth,
})
const LoginContainer = (props) => {
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