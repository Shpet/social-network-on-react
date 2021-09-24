import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import News from './News/News';
import Music from './Music/Music';
import './Content.module.css';
import { Route } from 'react-router-dom';
import UsersContainer from './Users/UsersContainer';

const Content = () => {
    return (
        <main>
            <Route exact path="/" render={() => <Profile />} />
            <Route path="/messages" render={() => <Messages />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
        </main>
    )
}

export default Content;