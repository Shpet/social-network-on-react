import mod from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={mod.nav_wrapper}>
      <nav>
        <div>
          <a href="#">Моя страница</a>
        </div>
        <div>
          <a href="#">Сообщение</a>
        </div>
        <div>
          <a href="#">Новости</a>
        </div>
        <div>
          <a href="#">Музыка</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;