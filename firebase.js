// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-async-storage/async-storage' ;   
import { initializeApp } from 'firebase/app' ;   
import { 
  initializeAuth ,
  getReactNativePersistence
} from 'firebase/auth/react-native' ; 
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDbhugab2TcIYFCOvH8J_Mr-ikJ33qvG10",
  authDomain: "orcamentocerto-9b658.firebaseapp.com",
  projectId: "orcamentocerto-9b658",
  storageBucket: "orcamentocerto-9b658.appspot.com",
  messagingSenderId: "127014661008",
  appId: "1:127014661008:web:73fe769d312455427a2115",
  measurementId: "G-E895PCR88D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = initializeAuth ( app , {  
  persistência : getReactNativePersistence ( AsyncStorage ) 
} ) ;

export { auth } ; 
//const analytics = getAnalytics(app);