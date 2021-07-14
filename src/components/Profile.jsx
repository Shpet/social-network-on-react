const Profile = () => {
  return (
    <main>
      <div className="banner-img" style={{
        backgroundImage: `url("https://eskipaper.com/images/horizon-pictures-4.jpg")`
      }}>
      </div>
      <div className="profile">
        <div className="profile__avatarWrap">
          <img src="https://avatars.mds.yandex.net/get-zen_gallery/3129491/pub_5f735184ece66e29a8651a30_5f735185ece66e29a8651a32/scale_1200" alt="avatar" />
        </div>
        <div className="profile__text">
          <div className="profile__text-name">
            <p>Ksenia Hug</p>
          </div>
          <div className="profile__text-info">
            <p>Birthday: 01.03.2000</p>
            <p>City: Kiev</p>
            <p>Telegram: @INeznayka</p>
            <p>Inst: neznayka_sh</p>
          </div>
        </div>
      </div>
      <div className="posts">
        <h3>My posts</h3>
        <div className="posts__new-post">
          <form>
            <textarea placeholder="Write about your mood..."></textarea>
            <input type="submit" />
          </form>
        </div>
        <div className="posts__old-posts">
          <div className="old-posts__post">
            <p>Some text Some text Some text Some textSome text</p>
            <p>01.11.2021</p>
          </div>
          <div className="old-posts__post">
            <p>Some text Some text Some text Some textSome text</p>
            <p>01.11.2021</p>
          </div>
          <div className="old-posts__post">
            <p>Some text Some text Some text Some textSome text</p>
            <p>01.11.2021</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Profile;