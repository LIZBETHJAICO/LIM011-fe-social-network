import { eventUpdateProfile } from '../controller/profile-controller.js';

export default (dataUser) => {
  const mainElem = document.createElement('main');
  const homeProfile = ` 
      <div class='main-profile'>  
        <div class='container-update-profile'>  
          <h2 class=''>Perfil</h2>           
          <img class='user-photo' id='u-photo' src='${dataUser.photoURL}'>
          <form class='form-profile'>
            <label>Nombre</label>
              <input type='text' class='input-text' id='u-name' value='${dataUser.displayName}'>
            <label>Email</label>
              <input type='text' disabled class='input-text' id='u-email' value='${dataUser.email}'>
            <label>Ocupación: COMPRADOR-VENDEDOR</label>
              <input type='text' class='input-text' id='u-type' value='${dataUser.type}'>
            
              <button type='submit' class='btn button-save' id='button-save'> GUARDAR</button>
 
          </form>
        </div>
      </div>
      `;

  mainElem.innerHTML = homeProfile;

  const btnUpdate = mainElem.querySelector('#button-save');
  btnUpdate.addEventListener('click', eventUpdateProfile);
  return mainElem;
};
