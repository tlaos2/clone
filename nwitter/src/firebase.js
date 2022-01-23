import * as firebase from 'firebase/app';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDBrx0vqkH7dcScah260UYNI3TXTBo3cT4",
//   authDomain: "nwitter-b002c.firebaseapp.com",
//   projectId: "nwitter-b002c",
//   storageBucket: "nwitter-b002c.appspot.com",
//   messagingSenderId: "57253204294",
//   appId: "1:57253204294:web:0eea5b9f9a59c7df195547"
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default firebase.initializeApp(firebaseConfig);