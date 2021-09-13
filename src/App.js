import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrap">
        <Header />
        <Navbar data={props.data.navbar} />
        <Content profilePage={props.data.profilePage}
          messagePage={props.data.messagePage}
          dispatch={props.dispatch} />
      </div>
    </BrowserRouter>
  );
}


export default App;
