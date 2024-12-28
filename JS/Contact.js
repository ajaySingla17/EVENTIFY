const firebaseConfig = {
    apiKey: "AIzaSyAX31BD1uIAUNAbhNQZyhFGHMCgr2DF88s",
    authDomain: "contactus-d694e.firebaseapp.com",
    databaseURL: "https://contactus-d694e-default-rtdb.firebaseio.com",
    projectId: "contactus-d694e",
    storageBucket: "contactus-d694e.appspot.com",
    messagingSenderId: "597179043101",
    appId: "1:597179043101:web:31dcc5ed776b4d1e85a5f4",
    measurementId: "G-6KLY6X953W"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  