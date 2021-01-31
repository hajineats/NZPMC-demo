import firebase from "./Firebase";
require("firebase/app");
require("firebase/database");

const getQuestion = async (num) => {
  var json = "Hello";
  await firebase
    .database()
    .ref("/questions/" + num)
    .once("value")
    .then((snapshot) => {
      if (snapshot.val()) {
        json = snapshot.val();
      }
    });
  return json;
};

const checkInitialized = async (num) => {
  var initialized = true;
  await firebase
    .database()
    .ref("/users/" + firebase.auth().currentUser.uid + "/startedAt")
    .once("value")
    .then((snapshot) => {
      console.log("initialized is ");
      console.log(snapshot.val());
      if (!snapshot.val()) {
        initialized = false;
      }
    });
  return initialized;
};

const submitChoice = async (qIndex, choice) => {
  await firebase
    .database()
    .ref("/users/" + firebase.auth().currentUser.uid + "/options/" + qIndex)
    .set(choice);
};

export default getQuestion;
export { submitChoice, checkInitialized };
