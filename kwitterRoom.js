const firebaseConfig = {
  apiKey: "AIzaSyDw5vQYCcIM-cnfojcU9Te48X1tnxKSlko",
  authDomain: "kwiter3-b3a6e.firebaseapp.com",
  databaseURL: "https://kwiter3-b3a6e-default-rtdb.firebaseio.com",
  projectId: "kwiter3-b3a6e",
  storageBucket: "kwiter3-b3a6e.appspot.com",
  messagingSenderId: "34254497287",
  appId: "1:34254497287:web:7a9c3aca9fa1317817eca2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    objetivo : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;

      //console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id='"+roomNames+"' onclick='redirectToRoomName(this.id)' > #"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}


getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
