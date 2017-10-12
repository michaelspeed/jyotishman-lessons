import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyDI43g1tBe7_9oa3Yns-JKcQBeZsUfzuKI",
    authDomain: "lesson-chat.firebaseapp.com",
    databaseURL: "https://lesson-chat.firebaseio.com",
    projectId: "lesson-chat",
    storageBucket: "",
    messagingSenderId: "433814877969"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
