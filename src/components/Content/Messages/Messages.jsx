import mod from './Messages.module.css';

const Messages = () => {
    return (
        <div className={mod.messWrap}>
            <div className={mod.companionWrap}>
                <div className={mod.companion + " " + mod.companionActive}>
                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" alt="" />
                    <span>Vadik Shpet</span>
                </div>
                <div className={mod.companion}>
                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" alt="" />
                    <span>Vadik Shpet</span>
                </div>
                <div className={mod.companion}>
                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" alt="" />
                    <span>Vadik Shpet</span>
                </div>
                <div className={mod.companion}>
                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" alt="" />
                    <span>Vadik Shpet</span>
                </div>
                <div className={mod.companion}>
                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" alt="" />
                    <span>Vadik Shpet</span>
                </div>
            </div>
            <div className={mod.dialog}>
                <header>
                    <p>Vadik Shpet</p>
                    <p className={mod.statusOnline}>Online</p>
                </header>
                <section className={mod.messages}>
                    <div className={mod.message}>
                        <img src="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" alt="" />
                        <p class={mod.textMessage}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quos illum provident deleniti. Velit laboriosam dolorum necessitatibus ab vitae eaque est aliquam. Possimus excepturi voluptate magni nemo impedit nisi at iure laudantium. Minima velit, blanditiis ipsum voluptatibus eligendi nobis sunt vero libero ad quas eveniet maiores, inventore dolor. Consequuntur quas iste delectus voluptates doloremque accusantium vitae deserunt blanditiis? Ullam, reprehenderit rerum? Vero quos perferendis voluptatibus facere minima inventore, suscipit alias cupiditate assumenda sit veniam maiores voluptatum! Vel libero necessitatibus inventore consequuntur ex doloremque quae perferendis? Similique distinctio rerum cumque quos assumenda amet porro. Maxime recusandae aperiam accusantium, amet impedit consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus.</p>
                        <p className={mod.dateMess}>12.03.2017</p>
                    </div>
                    <div className={mod.message}>
                        <img src="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" alt="" />
                        <p class={mod.textMessage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus.</p>
                        <p className={mod.dateMess}>12.03.2017</p>
                    </div>
                    <div className={mod.message}>
                        <img src="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" alt="" />
                        <p class={mod.textMessage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus.</p>
                        <p className={mod.dateMess}>12.03.2017</p>
                    </div>
                    <div className={mod.message}>
                        <img src="https://lh3.googleusercontent.com/ogw/ADea4I6pTMZmY51r32eT9i3FAiOVlAD9s9LICrcc-ifpaw=s32-c-mo" alt="" />
                        <p class={mod.textMessage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse commodi exercitationem eligendi quasi ullam quod, enim assumenda placeat ducimus.</p>
                        <p className={mod.dateMess}>12.03.2017</p>
                    </div>
                    <div className={mod.message}>
                        <div className={mod.newMessageMargin}></div>
                        <form className={mod.newMessage}>
                            <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam?"></textarea>
                            <input type="submit" value="отправить" />
                        </form>
                        <p className={mod.dateMess}></p>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Messages;