import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from './../seed';

// here, I want to import the seed file
const config = {
    apiKey: "AIzaSyD3wbN2Xzs64uGyYp43MHlhOv6_223Ntys",
    authDomain: "instagram-react-990e9.firebaseapp.com",
    projectId: "instagram-react-990e9",
    storageBucket: "instagram-react-990e9.appspot.com",
    messagingSenderId: "679867369356",
    appId: "1:679867369356:web:3a56dec79b07cd27f4b8a9"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// I want to call the seed file (only once!)
// seedDatabase(firebase)

export { firebase, FieldValue }