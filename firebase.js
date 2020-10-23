 import firebase from 'firebase/app'
 import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBrbUhrTakZTq2r-Bp0DneSERbG9eEGwKo",
    authDomain: "bagelshop-d4cad.firebaseapp.com",
    databaseURL: "https://bagelshop-d4cad.firebaseio.com",
    projectId: "bagelshop-d4cad",
    storageBucket: "bagelshop-d4cad.appspot.com",
    messagingSenderId: "441358505398",
    appId: "1:441358505398:web:8f59558e08b1df8e6a1d17"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const db = firebase.firestore()
  export const dbMenuAdd = db.collection('menuItems');