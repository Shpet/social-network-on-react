import mod from './Users.module.css';
import baseImgUrl from '../../../assets/img/user-small.jpg';


const Users = (props) => {

    return (
        <div className={mod.usersWrap}>

            {props.users.map(item => <div key={item.id} className={mod.userWrap}>

                <div className={mod.imgWrap} style={{ backgroundImage: `url(${item.photos.small ? item.photos.small : baseImgUrl})` }}>
                </div>
                <div className={mod.info}>
                    <span>{item.name} </span>
                </div>
                <div className={mod.status}>
                    {item.status ? item.status : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ducimus.'}
                </div>
                <div className={mod.buttWrap}>
                    {item.followed
                        ? <button className={mod.btn} onClick={() => props.goToFollowed(item.id)}>Unfollow</button>
                        : <button className={`${mod.follow} ${mod.btn}`} onClick={() => props.goToFollowed(item.id)}>Follow</button>
                    }
                </div>
            </div >
            )
            }

            {props.remainingUsers > 0 && <button onClick={props.loadMore} className={mod.loadMore}>загрузить ещё 12 из {props.remainingUsers}</button>}
        </div >
    )
};


export default Users;