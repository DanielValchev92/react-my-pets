import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
//import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAPrxEhgo1VL_W0K5jnVQZX8TtMJD71VDI",
    authDomain: "reactjs-my-pets.firebaseapp.com",
    projectId: "reactjs-my-pets",
    storageBucket: "reactjs-my-pets.appspot.com",
    messagingSenderId: "963537762831",
    appId: "1:963537762831:web:bffd160229e46a3775017a"
};

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('Logged');
    } else {
        console.log('Not Logged');
    }
});

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

const app = initializeApp(firebaseConfig);




// export default firebase;

//export const getauth = firebase.auth();

