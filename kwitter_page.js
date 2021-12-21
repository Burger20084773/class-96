var firebaseConfig = {
      apiKey: "AIzaSyAntsvrBT8HrjwXNrkApgYpXfVf-9GMdxw",
      authDomain: "kwitter-1-8617f.firebaseapp.com",
      databaseURL: "https://kwitter-1-8617f-default-rtdb.firebaseio.com",
      projectId: "kwitter-1-8617f",
      storageBucket: "kwitter-1-8617f.appspot.com",
      messagingSenderId: "1018188470828",
      appId: "1:1018188470828:web:a0f1da07b632031a99cf89",
      measurementId: "G-GLCBCKMH74"
    };
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:ms,
                like:0
          });

          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



      } });  }); }
getData();
