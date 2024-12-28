const firebaseConfig = {
    apiKey: "AIzaSyBgaV-6Nyzax6n3y_R98WA0VfcgaABl-tw",
    authDomain: "reviews-7a976.firebaseapp.com",
    databaseURL: "https://reviews-7a976-default-rtdb.firebaseio.com",
    projectId: "reviews-7a976",
    storageBucket: "reviews-7a976.appspot.com",
    messagingSenderId: "449821426308",
    appId: "1:449821426308:web:8225e6de6946e01c8478d1",
    measurementId: "G-53VN0CM7QL"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("Reviews");
  
  document.getElementById("Reviews").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var review = getElementVal("review");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent, review);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("Reviews").reset();
  }
  
  const saveMessages = (name, emailid, msgContent, review) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      review: review,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  