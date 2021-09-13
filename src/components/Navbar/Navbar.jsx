import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';
import mod from './Navbar.module.css';

const Navbar = (props) => {

  return (
    <div className={mod.sidebar}>
      <div className={mod.nav_wrapper} >
        <nav>
          <div>
            <NavLink exact to="/" activeClassName={mod.activeLink}>Моя страница</NavLink>
          </div>
          <div>
            <NavLink to="/messages" activeClassName={mod.activeLink}>Сообщения</NavLink>
          </div>
          <div>
            <NavLink to="/news" activeClassName={mod.activeLink}>Новости</NavLink>
          </div>
          <div>
            <NavLink to="/music" activeClassName={mod.activeLink}>Музыка</NavLink>
          </div>
        </nav>
      </div>
      <FriendsContainer className={mod.nav_wrapper} data={props.data.navbar.friends} />
    </div>
  )
}

export default Navbar;