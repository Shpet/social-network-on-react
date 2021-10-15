import mod from "./Users.module.css";
import baseImgUrl from "../../../assets/img/user-small.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
  return (
    <div className={mod.usersWrap}>
      {props.users.map((item) => (
        <div key={item.id} className={mod.userWrap}>
          <NavLink to={`profile/${item.id}`}>
            <div
              className={mod.imgWrap}
              style={{
                backgroundImage: `url(${item.photos.small ? item.photos.small : baseImgUrl
                  })`,
              }}
            ></div>
          </NavLink>
          <div className={mod.info}>
            <span>{item.name} </span>
          </div>
          <div className={mod.status}>
            {item.status
              ? item.status
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ducimus."}
          </div>
          <div className={mod.buttWrap}>
            {item.followed ? (
              <button
                className={mod.btn}
                onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": 'fa054d18-01a6-4959-93b2-7241c273e8f0'
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) props.goToFollowed(item.id)
                    });
                }
                }>
                Unfollow
              </button>
            ) : (
              <button
                className={`${mod.follow} ${mod.btn}`}
                onClick={() => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": 'fa054d18-01a6-4959-93b2-7241c273e8f0'
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) props.goToFollowed(item.id)
                    });
                }
                }>
                Follow
              </button>
            )}
          </div>
        </div>
      ))}

      {props.remainingUsers > 0 && (
        <button onClick={props.loadMore} className={mod.loadMore}>
          загрузить ещё 12 из {props.remainingUsers}
        </button>
      )}
    </div>
  );
};

export default Users;
