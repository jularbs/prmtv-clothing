import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2kKels17a3OzU-fAlvpQbcDRctMR_lJE",
    authDomain: "prmtv-clothing.firebaseapp.com",
    databaseURL: "https://prmtv-clothing.firebaseio.com",
    projectId: "prmtv-clothing",
    storageBucket: "prmtv-clothing.appspot.com",
    messagingSenderId: "566777225977",
    appId: "1:566777225977:web:0150512f1b7b6eb46d7828",
    measurementId: "G-MNR376J7VC"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
