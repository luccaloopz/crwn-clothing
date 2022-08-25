import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDNZLcloZULZGxBWHkas_2TqY3TvLZRv_E",
    authDomain: "crwn-clothing-db-bd3f0.firebaseapp.com",
    projectId: "crwn-clothing-db-bd3f0",
    storageBucket: "crwn-clothing-db-bd3f0.appspot.com",
    messagingSenderId: "575047005477",
    appId: "1:575047005477:web:3a06203fe48e3d139c56cc"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)