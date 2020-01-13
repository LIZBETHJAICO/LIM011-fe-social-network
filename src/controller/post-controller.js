/* eslint-disable no-alert */
/* eslint-disable no-console */
import {
  addPost,
  updatePost,
  deletePost,
  updateTypePost,
} from '../model/user-post.js';

import { addLikes, getUserLike, deleteLikes } from '../model/likes-post.js';
import { currentUser } from '../model/auth-user.js';

export const addDataPost = (event) => {
  event.preventDefault();
  const btnShare = event.target;
  const newPost = btnShare.closest('.card-new-post').querySelector('textarea');
  const typePost = btnShare.closest('.card-new-post').querySelector('select');
  const objectPost = {
    post: newPost.value,
    idUser: currentUser().uid,
    name: currentUser().displayName,
    email: currentUser().email,
    date: new Date(),
    numlikes: 0,
    type: typePost.value,
  };
  addPost(objectPost)
    .then((docRef) => {
      window.location.hash = '#/home';
      newPost.value = '';
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};
  // eventShowPostToChange  ?
export const eventShowPostToChange = (event) => {
  event.preventDefault();
  const btnShowPost = event.target;
  const newTextPost = btnShowPost.closest('.card-post').querySelector('#text-post');
  const userId = btnShowPost.closest('.card-post').querySelector('.user-post').id;
  console.log(userId);
  const btnSave = btnShowPost.closest('.card-post').querySelector('.btn-save-change');
  const btnContSave = btnShowPost.closest('.card-post').querySelector('.update-post');
  if (currentUser().uid === userId) {
    newTextPost.disabled = false;
    btnShowPost.style.display = 'none';
    btnContSave.style.display = 'none';
    btnSave.classList.remove('hidden');
  }
};
// modifica
export const eventUpdatePost = (event) => {
  event.preventDefault();
  const btnUpdate = event.target;
  const postId = btnUpdate.closest('.card-post').id;
  const newTextPost = btnUpdate.closest('.card-post').querySelector('#text-post');
  const btnSave = btnUpdate.closest('.card-post').querySelector('.btn-save-change');
  const iconUpdate = btnUpdate.closest('.card-post').querySelector('.icon-social');
  const btnUpdatePost = btnUpdate.closest('.card-post').querySelector('.update-post');

  newTextPost.disabled = true;
  btnUpdate.style.display = 'block';
  iconUpdate.style.display = 'block';
  btnUpdatePost.style.display = 'block';
  btnSave.style.display = 'none';
  updatePost(postId, newTextPost.value)
    .then((doc) => {
      console.log(doc);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const eventDeletePost = (event) => {
  event.preventDefault();
  const btnUpdate = event.target;
  const postId = btnUpdate.closest('.card-post').id;
  const userId = btnUpdate.closest('.card-post').querySelector('.user-post').id;
  if (currentUser().uid === userId) {
    if (window.confirm('Estas seguro que deseas eliminar este post')) {
      deletePost(postId)
        .then((doc) => {
          console.log('Documento eliminado satisfactoriamente', doc);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  } else {
    alert('No puedes eliminar este post');
  }
};

export const addAndDeleteLikes = (event) => {
  event.preventDefault();
  const btnLike = event.target;
  const idPost = btnLike.closest('.card-post').id;
  getUserLike(idPost, currentUser().uid)
    .then((likes) => {
      console.log(likes);
      if (!likes.empty) {
        console.log('el usuario ya no puede dar like');
        likes.forEach((doclike) => {
          deleteLikes(doclike.id, idPost, currentUser().user);
        });
      } else {
        console.log('el usuario puede dar like');
        addLikes(idPost, currentUser().uid, currentUser().displayName);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const eventChangeTypePost = (event) => {
  event.preventDefault();
  const x = event.target;
  const idPost = x.closest('.card-post').id;
  const newTypePost = x.closest('.card-post').querySelector('select').value;
  const userId = x.closest('.card-post').querySelector('.user-post').id;
  if (currentUser().uid === userId) {
    updateTypePost(idPost, newTypePost)
      .then((doc) => {
        console.log(doc);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
