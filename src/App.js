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
        <Navbar />
        <Content postData={props.postData} messageData={props.messageData} companionsData={props.companionsData} />
      </div>
    </BrowserRouter>
  );
}


export default App;
