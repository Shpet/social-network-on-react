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
                data={props.store.getData().content.profilePage}
                dispatch={props.store.dispatch.bind(props.store)} />}
            />
            <Route path="/messages" render={() => <Messages
                data={props.store.getData().content.messagePage}
                dispatch={props.store.dispatch.bind(props.store)}
            />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
        </main>
    )
}

export default Content;