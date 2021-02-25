import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD034vmzr4aiRq5ugv7KA3TapCWW3cEfes",
	authDomain: "twitter-34a08.firebaseapp.com",
	projectId: "twitter-34a08",
	storageBucket: "twitter-34a08.appspot.com",
	messagingSenderId: "82438515274",
	appId: "1:82438515274:web:f37ebf6d46e15d26f754b3",
	measurementId: "G-Q7GW5Z2F4H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
