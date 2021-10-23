var contactApp = angular.module('contactApp',[]);

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcrixBMxsKRMb3vs6u_2hQehgKPQzK9Os",
    authDomain: "clase-22a91.firebaseapp.com",
    projectId: "clase-22a91",
    storageBucket: "clase-22a91.appspot.com",
    messagingSenderId: "141374520055",
    appId: "1:141374520055:web:d15417d23f83a10239f1f2"
  };

  // inciarliza la base de datos firebase//
  firebase.initializeApp(firebaseConfig);
  var db=firebase.firestore();

  
