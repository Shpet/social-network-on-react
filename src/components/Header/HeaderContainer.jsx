import React from 'react';
import { connect } from 'react-redux';
import { profileAPI } from '../../API/profileAPI';
import { actionCreatorSetUserData } from '../../redux/reducerAuth';
import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount() {
        profileAPI.getAuthInfo()
            .then(response => {
                if (response.resultCode === 0) {
                    let { id, email, login } = response.data;
                    this.props.setUserData(id, email, login);
                }

            });
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
    setUserData: actionCreatorSetUserData
})(HeaderContainer);