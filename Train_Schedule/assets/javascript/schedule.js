


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBnrojFzZLQMZqL4nN3PoxmIH6Ap7Pp6sM",
    authDomain: "train-schedule-3d791.firebaseapp.com",
    databaseURL: "https://train-schedule-3d791.firebaseio.com",
    projectId: "train-schedule-3d791",
    storageBucket: "train-schedule-3d791.appspot.com",
    messagingSenderId: "43490748956"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

    // Initial Values
    var trainName = "";
    var destination = "";
    var firstTrain = "";
    var frequency = "";
    var minsAway = 0;

    $("#add-train").on("click", function(event) {
        event.preventDefault();
       // Grabbed values from text boxes
       trainName = $("#trainName-input").val().trim();
       destination = $("#destination-input").val().trim();
       firstTrain = $("#firstTrain-input").val().trim();
       frequency = $("#frequency-input").val().trim();
 
       database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

    });

    database.ref().on("child_added", function(snapshot) {
        // storing the snapshot.val() in a variable for convenience
        var sv = snapshot.val();
  
        // Console.loging the last user's data
        console.log(sv.trainName);
        console.log(sv.destination);
        console.log(sv.firstTrain);
        console.log(sv.frequency);
  
        // Change the HTML to reflect
       
        $("#schedule").append(sv.trainName, sv.destination, sv.firstTrain, sv.frequency);
      

        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });
