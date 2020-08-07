import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBUXJbrN79Pa8JCFXefMLaHL20XfiZAUAo",
    authDomain: "covid-19-crf.firebaseapp.com",
    databaseURL: "https://covid-19-crf.firebaseio.com",
    projectId: "covid-19-crf",
    storageBucket: "covid-19-crf.appspot.com",
    messagingSenderId: "308720996714",
    appId: "1:308720996714:web:9104a04dd912488822d513",
    measurementId: "G-Z4HGZ6JBQR"
  };
  // Initialize Firebase
const fire =  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export default fire;