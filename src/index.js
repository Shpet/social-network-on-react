import reportWebVitals from './reportWebVitals';
import data, { functions } from './redux/data';
import rerender from './rerender';


rerender(data, functions);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
