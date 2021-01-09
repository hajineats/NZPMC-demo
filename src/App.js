import { useEffect, useState } from 'react';
import firebase from "firebase/app";
import Paper from '@material-ui/core/Paper';
import 'firebaseui/dist/firebaseui.css'
import QuestionPage from "./component/currentquestion/QuestionPage";
import NavBar from "./component/NavBar";
import UserInfo from "./component/userpage/UserInfo";
import QuestionList from "./component/questionlist/QuestionList";
import MathJax from "react-mathjax-preview";
const pageStates = {
  QUESTIONSLIST: 0,
  CURRENTQUESTION: 1,
  USERPAGE: 2
};

var firebaseui = require('firebaseui');
require("firebase/auth");
require("firebase/database");

var firebaseConfig = {
  apiKey: "AIzaSyB3gPUOiJ7uWEKsNs6sTa8pbrb_F2HaTWQ",
  authDomain: "auth-development-b60bd.firebaseapp.com",
  projectId: "auth-development-b60bd",
  databaseURL: "https://auth-development-b60bd-default-rtdb.firebaseio.com/",
  storageBucket: "auth-development-b60bd.appspot.com",
  messagingSenderId: "464891238921",
  appId: "1:464891238921:web:92f3034effc2bce463b6d8"
};


var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      return true;
    },
    uiShown: function() {
      // document.getElementById('loader').style.display = 'none';
    }
  },
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: 'https://www.google.com',
  privacyPolicyUrl: 'https://www.google.com'
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [pageState, setPageState] = useState(3);
  const [math, setMath] = useState(String.raw``);
  useEffect(()=>{
    firebase.initializeApp(firebaseConfig);
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    firebase.auth().onAuthStateChanged((user)=>{
      setEmail(user?user.email:"");
      setName(user?user.displayName:"");
      setPhotoUrl(user?user.setPhotoUrl:"");
      setLoggedIn(user?true:false);
    });
  },[]);
  
  function writeUserData() {
    firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
      username: name,
      email_address: email,
      latex: String.raw`
      Question 3: Evaluate the following integral.
      \begin{align*}
      \int x + \frac{x^2}{2} dx
      \end{align*}
      
      `,
    });
  }

  function readUserData(){
    firebase.database().ref('users/'+firebase.auth().currentUser.uid).once('value').then((snapshot) => {
      // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      setMath(String.raw`${snapshot.val().latex}`);
    });
  }

  return (
    <>
      <h1>Welcome to My Awesome App</h1>
      <Paper id="firebaseui-auth-container" />
      {loggedIn?<Paper>Hello! You are logged in as {name}!</Paper>:<Paper>You are not logged in, sorry!</Paper>}
      <button onClick={writeUserData}>write!</button>
      <button onClick={readUserData}>read!</button>
      <MathJax math={math} />
      {/* <MathJax math={math} /> */}
      {/* <div>
          <div className="App" style={{ textAlign: "center" }}>
          <div style={{ backgroundColor: "#cfe8fc", height: "100vh" }}>
            <NavBar onHandleChange={setPageState} />
            {pageState === pageStates.CURRENTQUESTION && <QuestionPage />}
            {pageState === pageStates.QUESTIONSLIST && <QuestionList />}
            {pageState === pageStates.USERPAGE && <UserInfo />}
          </div>
        </div>
      </div> */}
      
    </>
  );
}

export default App;
