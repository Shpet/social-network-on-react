import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let rerender = (data, functions) => {
  ReactDOM.render(
    <React.StrictMode>
      
      <App data={data} functions={functions}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default rerender;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
