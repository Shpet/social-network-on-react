import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { actionCreatorSetUserProfile, actionCreatorUpdateIsLoadingProfile } from '../../../redux/reducerProfile';
import Preloader from '../../CommonComponents/Preloader/Preloader';
import Profile from './Profile';


class ProfileContainer extends React.Component {

  componentDidMount() {
    
    this.props.updateIsLoadingProfile();
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
      .then(response => {
        this.props.updateIsLoadingProfile();
        this.props.setUserProfile(response.data);

      });
  }

  render() {
    let profile = { ...this.props.profile };
    if (this.props.profile) {
      if (!this.props.profile.photos.large) {
        profile = { ...this.props.profile, photos: { ...this.props.profile.photos, large: this.props.baseImgUrl } }
      }
    }
    return this.props.profile ? <Profile {...profile} /> : <Preloader />
  }
}

const mapPropsToState = (state) => {
  return {
    isLoadingProfile: state.profilePage.isLoadingProfile,
    profile: state.profilePage.profile,
    baseImgUrl: state.profilePage.baseImgUrl
  }
}

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapPropsToState, {
  updateIsLoadingProfile: actionCreatorUpdateIsLoadingProfile,
  setUserProfile: actionCreatorSetUserProfile
})(ProfileContainerWithRouter);