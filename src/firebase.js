import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAVM4upO25gAxnSo-dcvCuSPHlE-M5Fpec",
    authDomain: "clone-fcd32.firebaseapp.com",
    projectId: "clone-fcd32",
    storageBucket: "clone-fcd32.appspot.com",
    messagingSenderId: "208623912657",
    appId: "1:208623912657:web:c0001902ae0a84903527f0"
  };

  firebase.initializeApp(firebaseConfig )

  export default firebase.auth()