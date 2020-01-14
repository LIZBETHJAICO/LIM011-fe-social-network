
export const addPost = (objPost) => {
  const result = firebase.firestore().collection('posts').add(objPost);
  return result;
};

export const getPosts = callback => firebase.firestore().collection('posts').orderBy('date', 'desc')
  .onSnapshot((querySnapshot) => {
    const arr = [];
    querySnapshot.forEach((doc) => {
      const obj = {
        id: doc.id,
        ...doc.data(),
      };
      arr.push(obj);
    });
    callback(arr);
  });


export const updatePost = (idPost, newTextPost) => {
  const result = firebase.firestore().collection('posts').doc(idPost).update({
    post: newTextPost,
  });
  return result;
};

export const deletePost = (idPost) => {
  const result = firebase.firestore().collection('posts').doc(idPost).delete();
  return result;
};

export const updateTypePost = (idPost, typePost) => {
  const result = firebase.firestore().collection('posts').doc(idPost).update({
    type: typePost,
  });
  return result;
};
