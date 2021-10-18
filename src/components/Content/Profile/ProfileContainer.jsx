import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { thunkGetProfile } from '../../../redux/reducerProfile';
import Preloader from '../../CommonComponents/Preloader/Preloader';
import Profile from './Profile';


class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId);
  }

  render() {

    if (!this.props.isAuth && this.props.match.params.userId === 'me') {
      return <Redirect to='/login' />
    }

    let profile = { ...this.props.profile };

    if (this.props.profile) {
      if (!this.props.profile.photos.large) {
        profile = { ...this.props.profile, photos: { ...this.props.profile.photos, large: this.props.baseImgUrl } }
      }
    }
    return <>
      {this.props.isLoadingProfile && <Preloader />}
      {this.props.profile && <Profile {...profile} />}
    </>
  }
}

const mapPropsToState = (state) => {
  return {
    isLoadingProfile: state.profilePage.isLoadingProfile,
    profile: state.profilePage.profile,
    baseImgUrl: state.profilePage.baseImgUrl,
    isAuth: state.auth.isAuth
  }
}

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapPropsToState, {
  getProfile: thunkGetProfile
})(ProfileContainerWithRouter);