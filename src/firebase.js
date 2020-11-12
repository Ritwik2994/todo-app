// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGCSrEmiWtXzltMAvRyGiRzn_O7d9ETEk",
    authDomain: "todo-one-56164.firebaseapp.com",
    databaseURL: "https://todo-one-56164.firebaseio.com",
    projectId: "todo-one-56164",
    storageBucket: "todo-one-56164.appspot.com",
    messagingSenderId: "178709886225",
    appId: "1:178709886225:web:c0067c74381b6c7ff9c8b0",
    measurementId: "G-M7SVNSSW4Q"

});

const db = firebaseApp.firestore();

export default db;