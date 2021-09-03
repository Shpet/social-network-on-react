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
                addPost={props.functions.addPost}
                updateTextNewPost={props.functions.updateTextNewPost} />} />
            <Route path="/messages" render={() => <Messages 
                data={props.data.messagePage}
                sendMess={props.functions.sendMess}
                updateTextSendMess={props.functions.updateTextSendMess}
                 />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
        </main>
    )
}

export default Content;