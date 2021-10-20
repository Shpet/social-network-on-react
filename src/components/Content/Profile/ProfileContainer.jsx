import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { thunkGetProfile, thunkGetStatus, thunkUpdateStatus } from '../../../redux/reducerProfile';
import Preloader from '../../CommonComponents/Preloader/Preloader';
import Profile from './Profile';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;

    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {

    let profile = { ...this.props.profile };

    if (this.props.profile) {
      if (!this.props.profile.photos.large) {
        profile = { ...this.props.profile, photos: { ...this.props.profile.photos, large: this.props.baseImgUrl } }
      }
    }
    return <>
      {this.props.isLoadingProfile && <Preloader />}
      {this.props.profile && <Profile {...profile} status={this.props.status} updateStatus={this.props.updateStatus} />}
    </>
  }
}

const mapPropsToState = (state) => {
  return {
    isLoadingProfile: state.profilePage.isLoadingProfile,
    profile: state.profilePage.profile,
    baseImgUrl: state.profilePage.baseImgUrl,
    status: state.profilePage.status

  }
}



export default compose(
  connect(mapPropsToState, {
    getProfile: thunkGetProfile,
    getStatus: thunkGetStatus, updateStatus: thunkUpdateStatus
  }),
  withRouter,
  withAuthRedirect

)(ProfileContainer)
