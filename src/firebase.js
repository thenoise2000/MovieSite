import firebase from "firebase";

const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxx-xxxxxxxxxxxxx-xxxxxxxx",
    authDomain: "xxxxxxxx-xxxxxxx-xxxxxxxx",
    projectId: "xxxxxxxxx",
    storageBucket: "xxxxxxxxxx-xxxxxx-xxxx",
    messagingSenderId: "xxxxxxxxx",
    appId: "xxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;