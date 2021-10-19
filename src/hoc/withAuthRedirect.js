import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"


const mapPropsToState = state => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            // && this.props.match.params.userId === 'me'
            if (!this.props.isAuth) {
                return <Redirect to='/login' />
            }

            return <Component {...this.props} />
        }
    }
    return connect(mapPropsToState)(RedirectComponent)
}