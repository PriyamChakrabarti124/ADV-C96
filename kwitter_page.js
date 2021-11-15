var firebaseConfig = {

    apiKey: "AIzaSyDrWhWytpzBVbPLdS1BblQ6YEi3bgMGsD4",
    authDomain: "kwitter-pc94.firebaseapp.com", 
    databaseURL: "https://kwitter-pc94-default-rtdb.firebaseio.com",
    projectId: "kwitter-pc94",
    storageBucket: "kwitter-pc94.appspot.com",
    messagingSenderId: "74217428158",
    appId: "1:74217428158:web:9a7a65e2044d9130f17aef"
  
  };

  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem ("user_name");
    room_name = localStorage.getItem ("room_name");

    function send() {
          msg= document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value ="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    
//Start code

//End code
    } });  }); }
getData();