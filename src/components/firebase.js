import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyANeruULUGnWHnblOcuEgdXD3yTumaeqek",
    authDomain: "auth-demo-b7bb2.firebaseapp.com",
    projectId: "auth-demo-b7bb2",
    storageBucket: "auth-demo-b7bb2.appspot.com",
    messagingSenderId: "983083327238",
    appId: "1:983083327238:web:f9553a004cc1be75028887"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;