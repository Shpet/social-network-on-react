import { connect } from "react-redux";
import { Redirect } from "react-router";
import Login from "./Login";

const mapPropsToState = state => ({
    isAuth: state.auth.isAuth,
})
const LoginContainer = (props) => {
    if (props.isAuth) return <Redirect to='/profile/me' />
    return (
        <Login />
    )
}

export default connect(mapPropsToState)(LoginContainer);