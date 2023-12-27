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

document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Bejelentkezés
    signInWithEmailAndPassword(auth, email, password)
        .then(function (userCredential) {
            // Bejelentkezés sikeres
            var user = userCredential.user;
            console.log("Sikeres bejelentkezés:", user);
        })
        .catch(function (error) {
            // Hiba történt
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Bejelentkezési hiba:", errorCode, errorMessage);
        });
})