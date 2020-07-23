import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBzYpi4GM0jUq1qdmQdJRsHpmZeaHyT_mQ",
    authDomain: "prueba-desarrollo-b7ee6.firebaseapp.com",
    databaseURL: "https://prueba-desarrollo-b7ee6.firebaseio.com",
    projectId: "prueba-desarrollo-b7ee6",
    storageBucket: "prueba-desarrollo-b7ee6.appspot.com",
    messagingSenderId: "413174821247",
    appId: "1:413174821247:web:c57720b733eacc420e2a4a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp