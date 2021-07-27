import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import News from './News/News';
import Music from './Music/Music';
import './Content.module.css';
import { Route } from 'react-router-dom';

const Content = () => {
    return (
        <main>
            <Route component={Profile} path="/profile" />
            <Route component={Messages} path="/messages" />
            <Route component={News} path="/news" />
            <Route component={Music} path="/music" />
        </main>
    )
}

export default Content;