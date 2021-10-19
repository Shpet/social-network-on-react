import MessagesContainer from './Messages/MessagesContainer';
import News from './News/News';
import Music from './Music/Music';
import './Content.module.css';
import { Route } from 'react-router-dom';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';
import LoginContainer from './Login/LoginContainer';

const Content = () => {
    return (
        <main>
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/messages" render={() => <MessagesContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
        </main>
    )
}

export default Content;