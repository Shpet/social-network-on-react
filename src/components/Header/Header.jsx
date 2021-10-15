import mod from './Header.module.css';

const Header = (props) => {
    return (
        <header className={mod.header}>
            <img src="https://i.pinimg.com/originals/0f/41/d0/0f41d0404ae75869088e7c150affab84.png" alt="logo" />
            {

                props.isAuth
                    ? <div className={`${mod.auth} ${mod.auth_login}`}>{props.login}</div>
                    : <div className={`${mod.auth} ${mod.auth_signIn}`}>Sign In</div>
            }
        </header>
    )
}

export default Header;