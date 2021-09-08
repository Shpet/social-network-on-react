import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import mod from './Navbar.module.css';

const Navbar = (props) => {
  debugger;
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
      <Friends className={mod.nav_wrapper} data={props.data.friends} />
    </div>
  )
}

export default Navbar;