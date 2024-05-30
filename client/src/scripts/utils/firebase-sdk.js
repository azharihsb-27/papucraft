import {initializeApp} from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyB9Pf1C6CGuh6ZiqK2-QT5QrPqpK_ZN1HY",
  authDomain: "papucrafts.firebaseapp.com",
  databaseURL: "https://papucrafts-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "papucrafts",
  storageBucket: "papucrafts.appspot.com",
  messagingSenderId: "212728383296",
  appId: "1:212728383296:web:e295d26991621fd88f5ca5",
  measurementId: "G-18WKFQ6GLJ",
};

const app = initializeApp(firebaseConfig);
export default app
