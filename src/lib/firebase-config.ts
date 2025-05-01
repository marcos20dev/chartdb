// src/lib/firebase-config.ts

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyBVL6DF78Q9lXlHWISK0wLcJ7AsniSKlH8',
    authDomain: 'chardb-overfy.firebaseapp.com',
    projectId: 'chardb-overfy',
    storageBucket: 'chardb-overfy.firebasestorage.app',
    messagingSenderId: '438797602397',
    appId: '1:438797602397:web:4280733cb91a762a8f87b4',
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firebase Auth
const auth = getAuth(app);

// Exporta lo necesario para usar en otras partes del proyecto
export { auth, GoogleAuthProvider, signInWithPopup };
