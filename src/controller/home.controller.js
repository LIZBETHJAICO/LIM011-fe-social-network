import { addPost } from '../model/user-post.js';
import { getUserData, currentUser } from '../model/auth-user.js';

export const post = (event) => {
  event.preventDefault();
  const btnShare = event.target;
  const newPost = btnShare.closest('.card-new-post').querySelector('textarea');
  addPost(newPost.value)
    .then((docRef) => {
      window.location.hash = '#/home';
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};
export const getUser = () => {
  getUserData()
    .then((querySnapshot) => {
      querySnapshot.forEach((user) => {
        if (user.id === currentUser().uid) {
          document.querySelector('#user-name').textContent = user.data().displayName;
          document.querySelector('#user-email').textContent = user.data().email;
          document.querySelector('#user-photo').src = user.data().photoURL;
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
