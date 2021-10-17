import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { profileAPI } from '../../../API/profileAPI';
import { actionCreatorSetUserProfile, actionCreatorUpdateIsLoadingProfile } from '../../../redux/reducerProfile';
import Preloader from '../../CommonComponents/Preloader/Preloader';
import Profile from './Profile';


class ProfileContainer extends React.Component {

  componentDidMount() {



    if (this.props.match.params.userId === 'me') {
      this.props.updateIsLoadingProfile();

      profileAPI.getAuthInfo()
        .then(response => {
          if (response.resultCode === 0) {

            let id = response.data.id;

            profileAPI.getProfile(id)
              .then(response => {
                this.props.updateIsLoadingProfile();
                this.props.setUserProfile(response);

              });
          }

        });
    }
    else {

      this.props.updateIsLoadingProfile();
      profileAPI.getProfile(this.props.match.params.userId)
        .then(response => {
          this.props.updateIsLoadingProfile();
          this.props.setUserProfile(response);
        })
        .catch(response => {
          this.props.updateIsLoadingProfile();
        });
    }
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
      {this.props.profile && <Profile {...profile} />}
    </>
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