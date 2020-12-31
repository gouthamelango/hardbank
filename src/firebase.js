import firebase from 'firebase/app';
import 'firebase/auth';

const app  = firebase.initializeApp({
    /*apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,*/
    apiKey: "AIzaSyBut2ZbaFgVUl3Q5MRdcVhiVLS9i1NuVPA",
    authDomain: "hardbank-e46b3.firebaseapp.com",
    //databaseURL: "https://hardbank-e46b3.firebaseio.com",
    projectId: "hardbank-e46b3",
    storageBucket: "hardbank-e46b3.appspot.com",
    messagingSenderId: "448394948531",
    appId: "1:448394948531:web:3e2a8b10a3c1cbbab765c6",
    measurementId: "G-6W849SRETZ"
})

export const auth =  app.auth()
export default app