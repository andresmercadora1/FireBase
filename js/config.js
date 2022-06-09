
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyC12LTng76TQCDHAatq4dtlojRuwQ5FcTQ",
    authDomain: "tienda-f773f.firebaseapp.com",
    projectId: "tienda-f773f",
    storageBucket: "tienda-f773f.appspot.com",
    messagingSenderId: "185579742663",
    appId: "1:185579742663:web:9fedc1b12f7afbf9fe25e2",
    measurementId: "G-2Q7GDPF2ZX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
