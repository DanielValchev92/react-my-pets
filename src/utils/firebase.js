import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAPrxEhgo1VL_W0K5jnVQZX8TtMJD71VDI",
    authDomain: "reactjs-my-pets.firebaseapp.com",
    projectId: "reactjs-my-pets",
    storageBucket: "reactjs-my-pets.appspot.com",
    messagingSenderId: "963537762831",
    appId: "1:963537762831:web:bffd160229e46a3775017a"
};

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

const app = initializeApp(firebaseConfig);


// export default firebase;

// export const auth = firebase.auth();

