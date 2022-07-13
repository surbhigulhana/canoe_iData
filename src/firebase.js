import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCaNUyeaFtdRZOkLERDXt4vnRfMRork1bs",
  authDomain: "canoe-app-751af.firebaseapp.com",
  projectId: "canoe-app-751af",
  storageBucket: "canoe-app-751af.appspot.com",
  messagingSenderId: "1064605653341",
  appId: "1:1064605653341:web:a2a7b3dbe92082ff88b0b4",
  measurementId: "G-015ENNK814"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }