import { NavLink } from 'react-router-dom';
import mod from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={mod.nav_wrapper}>
      <nav>
        <div>
          <NavLink to="/profile" activeClassName={mod.activeLink}>Моя страница</NavLink>
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
  )
}

export default Navbar;