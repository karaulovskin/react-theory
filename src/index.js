import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
// import {BrowserRouter} from 'react-router-dom'
import serviceWorker from './serviceWorker';

const app = (
    <App />
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker();
