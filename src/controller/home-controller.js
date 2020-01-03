
import { getUserData, currentUser } from '../model/auth-user.js';
import { getPost } from '../model/user-post.js';
import printPost from '../view/post-view.js';

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

export const getDataPost = () => {
  getPost()
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((post) => {
        printPost(post);
      });
    });
};
