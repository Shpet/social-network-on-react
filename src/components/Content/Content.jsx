import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import News from './News/News';
import Music from './Music/Music';
import './Content.module.css';
import { Route } from 'react-router-dom';

const Content = (props) => {
    return (
        <main>
            <Route exact path="/" render={() => <Profile
                data={props.data.profilePage}
                dispatch={props.dispatch} />}
            />
            <Route path="/messages" render={() => <Messages
                data={props.data.messagePage}
                dispatch={props.dispatch}
            />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
        </main>
    )
}

export default Content;