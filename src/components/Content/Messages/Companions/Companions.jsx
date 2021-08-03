import Companion from './Companion/Companion';
import mod from './Companions.module.css';

const Companions = () => {
    return (

        <div className={mod.companionWrap}>
            <Companion isActive="true" imgUrl="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" imgAlt="companion's avatar" name="Vadik Shpet" />
            <Companion imgUrl="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" imgAlt="companion's avatar" name="Pomidor Siniy" />
            <Companion imgUrl="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" imgAlt="companion's avatar" name="Pochka Ruka" />
            <Companion imgUrl="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" imgAlt="companion's avatar" name="Lishayna Masha" />
            <Companion imgUrl="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" imgAlt="companion's avatar" name="Neznayeva Ksu" />
        </div>
    )
}

export default Companions;