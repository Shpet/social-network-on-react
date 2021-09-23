import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrap">
        <Header />
        <NavbarContainer  />
        <Content />
      </div>
    </BrowserRouter>
  );
}


export default App;
