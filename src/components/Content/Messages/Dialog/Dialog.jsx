import mod from './Dialog.module.css';
import DialogHeader from './DialogHeader/DialogHeader';
import Message from './Message/Message';

const Dialog = () => {
    return (
        <div className={mod.dialog}>
            <DialogHeader name="Vadik Shpet" status="online" />
            <section className={mod.messages}>
                <Message imgUrl="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" imgAlt="companion's avatar" textMess="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quos illum provident deleniti. Velit laboriosam dolorum necessitatibus ab vitae eaque est aliquam. Possimus excepturi voluptate magni nemo impedit nisi at iure laudantium. Minima velit, blanditiis ipsum voluptatibus eligendi nobis sunt vero libero ad quas eveniet maiores, inventore dolor. Consequuntur quas iste delectus voluptates doloremque accusantium vitae deserunt blanditiis? Ullam, reprehenderit rerum? Vero quos perferendis voluptatibus facere minima inventore, suscipit alias cupiditate assumenda sit veniam maiores voluptatum! Vel libero necessitatibus inventore consequuntur ex doloremque quae perferendis? Similique distinctio rerum cumque quos assumenda amet porro. Maxime recusandae aperiam accusantium, amet impedit consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus." dateMess="12.03.2017" />
                <Message imgUrl="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" imgAlt="companion's avatar" textMess="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus." dateMess="12.03.2017" />
                <Message imgUrl="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" imgAlt="companion's avatar" textMess="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus." dateMess="12.03.2017" />
                <Message imgUrl="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" imgAlt="companion's avatar" textMess="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus." dateMess="12.03.2017" />

                <div>
                    <div className={mod.newMessageMargin}></div>
                    <form className={mod.newMessage}>
                        <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam?"></textarea>
                        <input type="submit" value="отправить" />
                    </form>
                </div>
            </section>
        </div >
    )
}

export default Dialog;