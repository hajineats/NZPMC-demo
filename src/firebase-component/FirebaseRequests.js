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

const submitChoice = async (qIndex, choice) => {
  await firebase
    .database()
    .ref("/users/" + firebase.auth().currentUser.uid + "/options/" + qIndex)
    .set(choice);
};

export default getQuestion;
export { submitChoice };
