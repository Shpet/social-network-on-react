import mod from './Dialog.module.css';
import DialogHeader from './DialogHeader/DialogHeader';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const Dialog = () => {
    const messageData = [
        { imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", textMess: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quos illum provident deleniti. Velit laboriosam dolorum necessitatibus ab vitae eaque est aliquam. Possimus excepturi voluptate magni nemo impedit nisi at iure laudantium. Minima velit, blanditiis ipsum voluptatibus eligendi nobis sunt vero libero ad quas eveniet maiores, inventore dolor. Consequuntur quas iste delectus voluptates doloremque accusantium vitae deserunt blanditiis? Ullam, reprehenderit rerum? Vero quos perferendis voluptatibus facere minima inventore, suscipit alias cupiditate assumenda sit veniam maiores voluptatum! Vel libero necessitatibus inventore consequuntur ex doloremque quae perferendis? Similique distinctio rerum cumque quos assumenda amet porro. Maxime recusandae aperiam accusantium, amet impedit consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus.", dateMess: "12.03.2017" },
        { imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", textMess: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus.", dateMess: "12.03.2017" },
        { imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", textMess: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus.", dateMess: "12.03.2017" },
        { imgUrl: "https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo", imgAlt: "companion's avatar", textMess: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus.", dateMess: "12.03.2017" }
    ];
    let messages = messageData.map(m => <Message imgUrl={m.imgUrl} imgAlt={m.imgAlt} textMess={m.textMess} dateMess={m.dateMess} />)
    return (
        <div className={mod.dialog}>
            <DialogHeader name="Vadik Shpet" status="online" />
            <section className={mod.messages}>
                {messages}
                <NewMessage />

            </section>
        </div >
    )
}

export default Dialog;