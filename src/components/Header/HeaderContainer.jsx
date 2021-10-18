import React from 'react';
import { connect } from 'react-redux';
import { thunkAuthInfo } from '../../redux/reducerAuth';
import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authInfo();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {
    authInfo: thunkAuthInfo
})(HeaderContainer);