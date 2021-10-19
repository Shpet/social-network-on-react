import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"


const mapPropsToState = state => ({
    isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {


            if (!this.props.isAuth) {

                if (this.props.match) {
                    if (Number.isInteger(+this.props.match.params.userId)) {
                        return <Component {...this.props} />

                    }
                }
                return <Redirect to='/login' />

            }

            return <Component {...this.props} />
        }
    }
    return connect(mapPropsToState)(RedirectComponent)
}