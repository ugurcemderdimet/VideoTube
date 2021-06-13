import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBNbJRS7spIudEutZpfBhuGzYJNiAQzB8U",
  authDomain: "videotube-15c05.firebaseapp.com",
  projectId: "videotube-15c05",
  storageBucket: "videotube-15c05.appspot.com",
  messagingSenderId: "272611965382",
  appId: "1:272611965382:web:31d515a6541f99cc185ac7",
  measurementId: "G-SQPNGEXKZV",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;

