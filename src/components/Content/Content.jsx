import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import News from './News/News';
import Music from './Music/Music';
import './Content.module.css';
import { Route } from 'react-router-dom';

const Content = (props) => {
    return (
        <main>
            <Route render={() => <Profile postData={props.postData} />} path="/profile" />
            <Route render={() => <Messages messageData={props.messageData} companionsData={props.companionsData} />} path="/messages" />
            <Route render={() => <News />} path="/news" />
            <Route render={() => <Music />} path="/music" />
        </main>
    )
}

export default Content;