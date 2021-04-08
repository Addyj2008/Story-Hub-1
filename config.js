import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAY-atCLdDctYJMZAYkMekJpMgLMMIg-Yo",
  authDomain: "library-app-ce021.firebaseapp.com",
  projectId: "library-app-ce021",
  storageBucket: "library-app-ce021.appspot.com",
  messagingSenderId: "508664082502",
  appId: "1:508664082502:web:d4ae67555efab33f115a47",
  measurementId: "G-828LZ2L73E"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();