import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAwzfQF3CJxsLZ5uwPfw-VbPxevLD9c6u8",
    authDomain: "manga-2df8e.firebaseapp.com",
    projectId: "manga-2df8e",
    storageBucket: "manga-2df8e.appspot.com",
    messagingSenderId: "199110239678",
    appId: "1:199110239678:web:e97290d2abf2774c3545ef",
    measurementId: "G-YBVTEZC64S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const verifyEmailBtn = document.getElementById('verifyEmailBtn');

const signupForm = document.getElementById('signupForm');
const signupBtn = document.getElementById('signupBtn');

// Submit event listener
signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const usernme = document.getElementById('usernme').value;
  const email = document.getElementById('email').value;

  // Új user email és felhasználónév
  firebase.auth().createUserWithEmailAndPassword(email, usernme)
    .then((userCredential) => {
      // Beléptél
      const user = userCredential.user;

      // Email küldés
      user.sendEmailVerification().then(function() {
        // Email küldve.
        console.log("Verification email sent!");
        alert("Account created! Verification email sent. Please check your inbox.");
      }).catch(function(error) {
        // Valami baj lenni
        console.error("Error sending verification email: ", error);
        alert("Error sending verification email. Please try again.");
      });

    })
    .catch((error) => {
      console.error("Error creating account: ", error);
      alert("Error creating account. Please try again.");
    });
});
