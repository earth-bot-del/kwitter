
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

      apiKey: "AIzaSyD99DsDR58Z5N8dR2lLxvRxyq3wNIznroY",
    
      authDomain: "kwitter-7f23b.firebaseapp.com",

      databaseURL: "https://kwitter-7f23b-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-7f23b",
    
      storageBucket: "kwitter-7f23b.appspot.com",
    
      messagingSenderId: "474378443490",
    
      appId: "1:474378443490:web:af06ad867c5807ff2d1cbb"
    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
