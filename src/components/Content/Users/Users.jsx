import mod from './Users.module.css'


const Users = (props) => {

    
    
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 0, firstName: 'Pomidor', lastName: 'Siniy', age: 18, location: { country: 'Ukraine', city: 'Heart' },
                    imgUrl: 'https://www.smokersguide.com/adressen/img/19-983-999-x5y.jpg', followed: true,
                    status: 'I\'m number 0 '
                },
                {
                    id: 1, firstName: 'Pochka', lastName: 'Ruka', age: 123, location: { country: 'Japan', city: 'Konoha' },
                    imgUrl: 'https://p.kindpng.com/picc/s/214-2143478_ryuk-death-note-png-vector-clipart-psd-death.png', followed: false,
                    status: 'I\'m number 1 '
                },
                {
                    id: 2, firstName: 'Lishayna', lastName: 'Masha', age: 16, location: { country: 'Belarus', city: 'Potatoland' },
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/ru/c/c0/Masha_%28mult%29.jpg', followed: false,
                    status: 'I\'m number 2 '
                },
                {
                    id: 3, firstName: 'Neznayeva', lastName: 'Ksu', age: 19, location: { country: 'Iceland', city: 'Reykjavik' },
                    imgUrl: 'https://oir.mobi/uploads/posts/2021-03/1616701408_21-p-neznaika-krasivo-26.jpg', followed: true,
                    status: 'I\'m number 3 '
                },

            ]
        )
    }
    
    return (
        <div className={mod.usersWrap}>

            {props.users.map(item => <div key={item.id} className={mod.userWrap}>

                <div className={mod.imgWrap}>
                    <img src={item.imgUrl} alt={`${item.firstName} ${item.lastName}`} />
                </div>
                <div className={mod.info}>
                    <span>{item.firstName} {item.lastName},
                        {item.age}</span>
                </div>
                <div className={mod.location}>
                    <span>{item.location.country}, {item.location.city}</span>
                </div>
                <div className={mod.status}>
                    {item.status}
                </div>
                <div className={mod.buttWrap}>
                    {item.followed
                        ? <button className="mod.unfollowed" onClick={() => props.goToFollowed(item.id)}>Unfollowed</button>
                        : <button className="mod.Followed" onClick={() => props.goToFollowed(item.id)}>Followed</button>
                    }
                </div>
            </div >
            )
            }
        </div>
    )

}


export default Users;