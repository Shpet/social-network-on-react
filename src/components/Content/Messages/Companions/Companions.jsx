import Companion from './Companion/Companion';
import mod from './Companions.module.css';

const Companions = () => {
    return (

        <div className={mod.companionWrap}>
            <Companion id="1" imgUrl="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" imgAlt="companion's avatar" name="Vadik Shpet" />
            <Companion id="2" imgUrl="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" imgAlt="companion's avatar" name="Pomidor Siniy" />
            <Companion id="3" imgUrl="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" imgAlt="companion's avatar" name="Pochka Ruka" />
            <Companion id="4" imgUrl="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" imgAlt="companion's avatar" name="Lishayna Masha" />
            <Companion id="5" imgUrl="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" imgAlt="companion's avatar" name="Neznayeva Ksu" />
        </div>
    )
}

export default Companions;