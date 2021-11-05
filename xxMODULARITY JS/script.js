import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

apiKey: "AIzaSyATtpJnjyGKpvXA0L4ZitCmkygD43Cap-Q",

authDomain: "two-bf848.firebaseapp.com",

projectId: "two-bf848",

storageBucket: "two-bf848.appspot.com",

messagingSenderId: "408700576779",

appId: "1:408700576779:web:fcb53cf6937f677193930e",

measurementId: "G-PB7YC7GQFH"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

const q = query(collection(db, "items"));

const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
});
