import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="app-wrap">
      <header>
        <img src="https://i.pinimg.com/originals/0f/41/d0/0f41d0404ae75869088e7c150affab84.png" alt="logo" />
      </header>
      <nav>
        <div>
          <a href="#">Моя страница</a>
        </div>
        <div>
          <a href="#">Сообщение</a>
        </div>
        <div>
          <a href="#">Новости</a>
        </div>
        <div>
          <a href="#">Музыка</a>
        </div>
      </nav>
      <main>
        <div className="banner-img"  style={{
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
              <textarea placeholder="write about your mood..."></textarea>
              <input type="submit"/>
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
    </div>
  );
}


export default App;
