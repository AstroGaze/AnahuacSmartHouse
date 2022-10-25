/* import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
import { firebase } from "firebase/app";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDf0G5ayGCFNFwk-i_XjnM30EHfMprbLQY",
    authDomain: "esp32-smarthome-448da.firebaseapp.com",
    databaseURL: "https://esp32-smarthome-448da-default-rtdb.firebaseio.com",
    projectId: "esp32-smarthome-448da",
    storageBucket: "esp32-smarthome-448da.appspot.com",
    messagingSenderId: "438169807641",
    appId: "1:438169807641:web:45438569bd40eeb08ab388",
    measurementId: "G-T2473WCHNQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const analytics = getAnalytics(app);


$(document).ready(function () {
    var database = app.database();
    var foco1status;
    var foco2Status;
    var ventiladorSatus;
    var cerraduraStatus;
    var temperatura;

    database.ref().on("value", function (snap) {
        foco1status = snap.val().foco1status;
        foco2Status = snap.val().foco1Status;
        ventiladorSatus = snap.val().ventiladorSatus;
        cerraduraStatus = snap.val().cerraduraStatus;
        temperatura = snap.val().temperatura;

        if (foco1status == "1") {
            document.getElementById("unact1").style.display = "none";
            document.getElementById("act1").style.display = "block";

        } else {
            document.getElementById("unact1").style.display = "block";
            document.getElementById("act1").style.display = "none";
        }

        if (foco2Status == "1") {
            document.getElementById("unact2").style.display = "none";
            document.getElementById("act2").style.display = "block";

        } else {
            document.getElementById("unact2").style.display = "block";
            document.getElementById("act2").style.display = "none";
        }

        if (ventiladorSatus == "1") {
            document.getElementById("unact3").style.display = "none";
            document.getElementById("act3").style.display = "block";

        } else {
            document.getElementById("unact3").style.display = "block";
            document.getElementById("act3").style.display = "none";
        }

        if (cerraduraStatus == "1") {
            document.getElementById("unact4").style.display = "none";
            document.getElementById("act4").style.display = "block";

        } else {
            document.getElementById("unact4").style.display = "block";
            document.getElementById("act4").style.display = "none";
        }

        $("#togglebtn1").click(function () {
            var firebaseRef = app.database().ref().child("foco1status")
            if (foco1status == "1") {
                firebaseRef.set("0");
                foco1status = "0";
            } else {
                firebaseRef.set("1")
                foco1status = "1";
            }
        })

        $("#togglebtn2").click(function () {
            var firebaseRef = app.database().ref().child("foco2Status")
            if (foco2Status == "1") {
                firebaseRef.set("0");
                foco2Status = "0";
            } else {
                firebaseRef.set("1")
                foco2Status = "1";
            }
        })

        $("#togglebtn3").click(function () {
            var firebaseRef = app.database().ref().child("ventiladorSatus")
            if (ventiladorSatus == "1") {
                firebaseRef.set("0");
                ventiladorSatus = "0";
            } else {
                firebaseRef.set("1")
                ventiladorSatus = "1";
            }
        })

        $("#togglebtn4").click(function () {
            var firebaseRef = app.database().ref().child("cerraduraStatus")
            if (cerraduraStatus == "1") {
                firebaseRef.set("0");
                cerraduraStatus = "0";
            } else {
                firebaseRef.set("1")
                cerraduraStatus = "1";
            }
        })


    })

    $(".container").hide();

}); */
