import reportWebVitals from './reportWebVitals';
import data, { sendMess, updateTextSendMess, addPost, updateTextNewPost } from './redux/data';
import rerender from './rerender';


rerender(data, addPost, updateTextNewPost);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
