const firebaseConfig = {
  apiKey: "AIzaSyB2kXA6tWhYpf0BHhU1XHsbQ3ebufVNv9A",
  authDomain: "dutyleave-37934.firebaseapp.com",
  databaseURL: "https://dutyleave-37934-default-rtdb.firebaseio.com",
  projectId: "dutyleave-37934",
  storageBucket: "dutyleave-37934.appspot.com",
  messagingSenderId: "534325048541",
  appId: "1:534325048541:web:2f6b7f61ed86a4686c1734",
  measurementId: "G-EHMV8H82EF"
};
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("DutyLeave");
  
  document.getElementById("DutyLeave").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var claSS = getElementVal("claSS");
    var Rollno = getElementVal("Rollno");
    var EventName = getElementVal("EventName");
    var Date = getElementVal("Date");
    var Lecture = getElementVal("Lecture");
    var Time = getElementVal("Time");
  
    saveMessages(name, claSS, Rollno, EventName,Date,Lecture,Time);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("DutyLeave").reset();
  }
  
  const saveMessages = (name, claSS, Rollno, EventName,Date,Lecture,Time) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      claSS:claSS,
      Rollno:Rollno,
      EventName:EventName,
      Date:Date,
      Lecture:Lecture,
      Time:Time
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  