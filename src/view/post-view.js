import { eventUpdatePost, eventDeletePost } from '../controller/post-controller.js';

export default (postId, postData) => {
  console.log(postData);
  console.log(postId);

  const postView = `
  <div class='header-post'>
  <span id="user-post">${postData.name}</span>
  <a href='http://' class='delete-post'>x</a>
</div>
<div class='detail-post'>
  <textarea name='' id='text-post'>${postData.post}</textarea>
</div>
<div class='footer-post'>
  <button class='like-post btn-post'>
  <i class="fas fa-heart icon-general"></i>
  </button>
  <button class='update-post btn-post'>
  <i class="fas fa-edit class=icon-social icon-general"></i>
  </button>
`;
  const divELem = document.createElement('div');
  divELem.innerHTML = postView;
  document.querySelector('#container-posts').appendChild(divELem);

  const btnUpdate = divELem.querySelector('.update-post');
  btnUpdate.addEventListener('click', eventUpdatePost);

  const btnDelete = divELem.querySelector('.delete-post');
  btnDelete.addEventListener('click', eventDeletePost);
};
