import mod from './Users.module.css';
import * as axios from 'axios';
import React from 'react';
import baseImgUrl from '../../../assets/img/user-small.jpg';


class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div className={mod.usersWrap}>

                {this.props.users.map(item => <div key={item.id} className={mod.userWrap}>

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
                            ? <button className={mod.btn} onClick={() => this.props.goToFollowed(item.id)}>Unfollow</button>
                            : <button className={`${mod.follow} ${mod.btn}`} onClick={() => this.props.goToFollowed(item.id)}>Follow</button>
                        }
                    </div>
                </div >
                )
                }
            </div >
        )
    };
}

// [
//     {
//         id: 0, firstName: 'Pomidor', lastName: 'Siniy', age: 18, location: { country: 'Ukraine', city: 'Heart' },
//         imgUrl: 'https://www.smokersguide.com/adressen/img/19-983-999-x5y.jpg', follow: true,
//         status: 'I\'m number 0 '
//     },
//     {
//         id: 1, firstName: 'Pochka', lastName: 'Ruka', age: 123, location: { country: 'Japan', city: 'Konoha' },
//         imgUrl: 'https://p.kindpng.com/picc/s/214-2143478_ryuk-death-note-png-vector-clipart-psd-death.png', follow: false,
//         status: 'I\'m number 1 '
//     },
//     {
//         id: 2, firstName: 'Lishayna', lastName: 'Masha', age: 16, location: { country: 'Belarus', city: 'Potatoland' },
//         imgUrl: 'https://upload.wikimedia.org/wikipedia/ru/c/c0/Masha_%28mult%29.jpg', follow: false,
//         status: 'I\'m number 2 '
//     },
//     {
//         id: 3, firstName: 'Neznayeva', lastName: 'Ksu', age: 19, location: { country: 'Iceland', city: 'Reykjavik' },
//         imgUrl: 'https://oir.mobi/uploads/posts/2021-03/1616701408_21-p-neznaika-krasivo-26.jpg', follow: true,
//         status: 'I\'m number 3 '
//     },

// ]


export default Users;