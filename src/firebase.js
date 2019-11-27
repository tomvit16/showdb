import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // copy and paste your firebase credential here
  apiKey: "AIzaSyBGzJew_38Bh_RZ7Yso6Q6cl4qHMH1KWL8",
  authDomain: "fitgoweb.firebaseapp.com",
  databaseURL: "https://fitgoweb.firebaseio.com",
  projectId: "fitgoweb",
  storageBucket: "fitgoweb.appspot.com",
  messagingSenderId: "765156513917",
  appId: "1:765156513917:web:b29ca02e0a01a77c1ab914",
  measurementId: "G-446CWHN8JJ"

  // apiKey: "AIzaSyCV5yOWfPvHV7vGSrvYWR77rQomsWLlGTY",
  // authDomain: "rn301019.firebaseapp.com",
  // databaseURL: "https://rn301019.firebaseio.com",
  // projectId: "rn301019",
  // storageBucket: "rn301019.appspot.com",
  // messagingSenderId: "656637758169",
  // appId: "1:656637758169:web:a6e53f0561adba27070cc8",
  // measurementId: "G-41PPJCXCEL"



});

const db = firebaseApp.firestore();

export { db };