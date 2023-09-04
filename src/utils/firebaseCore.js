import { getAuth, GithubAuthProvider,GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBMvEHY-oWpFkacSaXgDYuzzyQcnHnq_w8",
    authDomain: "nyust-gdsc-web.firebaseapp.com",
    projectId: "nyust-gdsc-web",
    storageBucket: "nyust-gdsc-web.appspot.com",
    messagingSenderId: "463903910747",
    appId: "1:463903910747:web:0359afef240be665b9887e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const githubProvider = new GithubAuthProvider();
const  googleProvider = new GoogleAuthProvider();


export { auth, githubProvider,googleProvider }