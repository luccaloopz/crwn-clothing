import { initializeApp } from 'firebase/app';

import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

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
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); 

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) { 
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};