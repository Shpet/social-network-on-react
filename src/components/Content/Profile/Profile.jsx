import MyPostsContainer from './MyPosts/MyPostsContainer';
import mod from './Profile.module.css';
import StatusContainer from './Status/StatusContainer';
// 
const Profile = (props) => {
  return (
    <div>
      <div className={mod['banner-img']} style={{
        backgroundImage: `url("https://eskipaper.com/images/horizon-pictures-4.jpg")`
      }}>
      </div>
      <div className={mod.profile}>
        <div className={mod.profile__avatarWrap} style={{ backgroundImage: `url(${props.photos.large})` }}></div>
        <div className={mod.profile__text}>
          <div className={mod['profile__text-name']}>
            <p>{props.fullName}</p>
          </div>
          <div className={mod['profile__text-info']}>
            <p><b>About me</b>: {props.aboutMe}</p>
            <p><b>Looking for a job</b>: {props.lookingForAJob ? ' Yes' : ' No'}</p>
            <p><b>Github:</b> <a href={props.contacts.github} target="_blank" rel="noreferrer"> {props.contacts.github}</a></p>
            <p><b>Inst:</b> <a href={props.contacts.instagram} target="_blank" rel="noreferrer"> {props.contacts.instagram}</a></p>

            <StatusContainer status={props.status} updateStatus={props.updateStatus} />
          </div>
        </div>
      </div>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;