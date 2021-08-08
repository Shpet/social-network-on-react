import Companion from './Companion/Companion';
import mod from './Companions.module.css';

const Companions = () => {
    const companionsData = [
        { id: "1", imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", name: "Vadik Shpet" },
        { id: "2", imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", name: "Pomidor Siniy" },
        { id: "3", imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", name: "Pochka Ruka" },
        { id: "4", imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", name: "Lishayna Masha" },
        { id: "5", imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", name: "Neznayeva Ksu" }
    ];
    let companions = companionsData.map(c => <Companion id={c.id} imgUrl={c.imgUrl} imgAlt={c.imgAlt} name={c.name} />)
    return (

        <div className={mod.companionWrap}>
            {companions}
        </div>
    )
}

export default Companions;