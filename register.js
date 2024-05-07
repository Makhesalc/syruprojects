import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyA9e8uWyQgQhc-Iz1OImHieLgUgAi4S7Yw",
    authDomain: "syruprojects-5cad0.firebaseapp.com",
    projectId: "syruprojects-5cad0",
    storageBucket: "syruprojects-5cad0.appspot.com",
    messagingSenderId: "404579406526",
    appId: "1:404579406526:web:14d756c99aa6802fd084ef",
    measurementId: "G-M1E9VJ6SJH"
  };
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app)
auth.useDeviceLanguage()

//grab
const register = document.getElementById("register");
register.addEventListener("click", function (event) {
 event.preventDefault()

 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;

 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   const user = userCredential.user;
   alert("Account Created , Login")
   window.location.href = "login.html";
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   alert(errorMessage)

  });

})




const google = document.getElementById("google");
google.addEventListener("click",
 function registerWithGoogle() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = "dashboard.html";




  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    
alert(errorMessage)


  });



 }
)
