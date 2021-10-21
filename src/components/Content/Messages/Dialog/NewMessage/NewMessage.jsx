import React from 'react';
import { Field, reduxForm } from 'redux-form';
import mod from './NewMessage.module.css';

const NewMessage = (props) => {

    return (
        <form className={mod.newMessage} onSubmit={props.handleSubmit}>
            <Field component="textarea" placeholder="Enter your message" name="message" onKeyDown={props.isPressSend} />
            <button>отправить</button>
        </form>
    )
}

export default reduxForm({ form: 'newMessage' })(NewMessage);