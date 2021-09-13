import MyPostsContainer from './MyPosts/MyPostsContainer';
import mod from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <div className={mod['banner-img']} style={{
        backgroundImage: `url("https://eskipaper.com/images/horizon-pictures-4.jpg")`
      }}>
      </div>
      <div className={mod.profile}>
        <div className={mod.profile__avatarWrap}>
          <img src="https://avatars.mds.yandex.net/get-zen_gallery/3129491/pub_5f735184ece66e29a8651a30_5f735185ece66e29a8651a32/scale_1200" alt="avatar" />
        </div>
        <div className={mod.profile__text}>
          <div className={mod['profile__text-name']}>
            <p>Ksenia Hug</p>
          </div>
          <div className={mod['profile__text-info']}>
            <p>Birthday: 01.03.2000</p>
            <p>City: Kiev</p>
            <p>Telegram: @INeznayka</p>
            <p>Inst: neznayka_sh</p>
          </div>
        </div>
      </div>
      <MyPostsContainer postData={props.data.profilePage.postData} 
               textNewPost={props.data.profilePage.textNewPost}
               dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;