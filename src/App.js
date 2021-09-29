import './App.css';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrap">
        <HeaderContainer />
        <NavbarContainer  />
        <Content />
      </div>
    </BrowserRouter>
  );
}


export default App;
