import mod from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={mod.nav_wrapper}>
      <nav>
        <div>
          <a href="/profile">Моя страница</a>
        </div>
        <div>
          <a href="/messages">Сообщения</a>
        </div>
        <div>
          <a href="/news">Новости</a>
        </div>
        <div>
          <a href="/music">Музыка</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;