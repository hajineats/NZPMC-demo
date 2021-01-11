import firebase from "./Firebase";
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

export default getQuestion;
