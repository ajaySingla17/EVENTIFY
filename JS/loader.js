firebase.auth().onAuthStateChanged((user) => {
      // login
      setTimeout(() => {
        window.location.assign("./HTML/login.html");
      }, 1000);
    });
  