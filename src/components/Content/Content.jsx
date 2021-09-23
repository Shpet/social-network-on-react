import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import News from './News/News';
import Music from './Music/Music';
import './Content.module.css';
import { Route } from 'react-router-dom';

const Content = () => {
    return (
        <main>
            <Route exact path="/" render={() => <Profile />} />
            <Route path="/messages" render={() => <Messages />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
        </main>
    )
}

export default Content;