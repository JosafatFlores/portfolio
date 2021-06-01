
import firebase from 'firebase/app'
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCZcTZ7i0fl3TmcG1Ue-NuC8BBbj-xGiIk",
    authDomain: "portafolio-ea2c2.firebaseapp.com",
    projectId: "portafolio-ea2c2",
    storageBucket: "portafolio-ea2c2.appspot.com",
    messagingSenderId: "191110563109",
    appId: "1:191110563109:web:262adf0c6eaadf67a046cc",
    measurementId: "G-GWZQ4EWZZ0"
};

const fb = firebase.initializeApp(config);
export const db = fb.firestore();