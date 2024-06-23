import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration object
const firebaseConfig = {
    apiKey: 'AIzaSyD8mjFkin0hfSlVELl263xkBqOQsRFjUnc',
    authDomain: 'crowler-9b401.firebaseapp.com',
    projectId: 'crowler-9b401',
    storageBucket: 'crowler-9b401.appspot.com',
    messagingSenderId: '290846847354',
    appId: '1:290846847354:web:e0b6c99690bb3e29faa6c3',
    measurementId: 'G-QPMPT3GRGK',
}

// Initialize Firebase app with the configuration
const app = initializeApp(firebaseConfig)

// Get Firestore instance from the initialized app
export const db = getFirestore(app)
