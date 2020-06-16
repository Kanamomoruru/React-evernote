import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyCk7x_YJdVRZI_OQ7JMCh1Xz0l-ZeLvPkE",
  authDomain: "evernote-clone-6862f.firebaseapp.com",
  databaseURL: "https://evernote-clone-6862f.firebaseio.com",
  projectId: "evernote-clone-6862f",
  storageBucket: "evernote-clone-6862f.appspot.com",
  messagingSenderId: "192752030464",
  appId: "1:192752030464:web:e9639e9828f817c5c5d9e5"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
