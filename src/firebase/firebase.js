import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBtavhVRiAyE8VhB76AbQL39BsHP9JpwZs",
  authDomain: "devdeadviz-evernote-clone.firebaseapp.com",
  projectId: "devdeadviz-evernote-clone",
  storageBucket: "devdeadviz-evernote-clone.appspot.com",
  messagingSenderId: "788873528762",
  appId: "1:788873528762:web:c250177b75ae8ad12e8983",
});

const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { timestamp };
export default firebase;
