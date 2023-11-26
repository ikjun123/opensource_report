import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyC5Kru9fHUzJMmNNUmAbv5IkCoCyDJSXd4",
    authDomain: "opensource-report.firebaseapp.com",
    databaseURL: "https://opensource-report-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "opensource-report",
    storageBucket: "opensource-report.appspot.com",
    messagingSenderId: "294731816014",
    appId: "1:294731816014:web:0f018f647d258ba508b71f",
    measurementId: "G-7K9XTFBD7J"
  };

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()