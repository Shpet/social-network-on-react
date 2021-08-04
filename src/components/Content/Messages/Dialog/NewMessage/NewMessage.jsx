import mod from './NewMessage.module.css';

const NewMessage = () => {
    return (
        <form className={mod.newMessage}>
            <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam?"></textarea>
            <input type="submit" value="отправить" />
        </form>
    )
}

export default NewMessage;