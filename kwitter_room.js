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

   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";
   function addRoom()
   {room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"

});localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
          console.log("Room Name -"+ room_name);
          row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names+"</div><hr>";
         document.getElementById("output").innerHTML += row;

    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
          window.location = "kwitter.html";