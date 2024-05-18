// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD6m2PxWHv44j2rsMj3jcJobynzgiGSEmY',
  authDomain: 'medical-24-7-j-comp-697da.firebaseapp.com',
  projectId: 'medical-24-7-j-comp-697da',
  storageBucket: 'medical-24-7-j-comp-697da.appspot.com',
  messagingSenderId: '209761011941',
  appId: '1:209761011941:web:1326a9b46ee93aaef6ac0c',
  measurementId: 'G-DYV1YV99S3'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
