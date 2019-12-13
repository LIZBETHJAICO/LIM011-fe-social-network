export const loginUserEmail = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    console.log(firebase.auth().currentUser.uid);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
};
