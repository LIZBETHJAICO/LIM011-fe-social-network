export const registerUserEmail = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
};
export const loginUserEmail = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
};
