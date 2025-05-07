import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const configuracoesFirebase = {
  apiKey: "AIzaSyAXBNMAOpUOBw0bfstuBdR8cRC4zLUexTE",
  authDomain: "autenticausuario-4435b.firebaseapp.com",
  projectId: "autenticausuario-4435b",
  storageBucket: "autenticausuario-4435b.firebasestorage.app",
  messagingSenderId: "527033136271",
  appId: "1:527033136271:web:d8ab62d26330239a61ecfa"
};

const app = initializeApp(configuracoesFirebase);
export const autenticacao = getAuth(app);