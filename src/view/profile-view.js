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
              <input type='text' class='input-text' id='u-ocupation'>
            <div class='container-button'>
              <input type='submit' class='btn button-save' id='button-save' value='Guardar'>
            </div>
          </form>
        </div>
      </div>
      `;

  mainElem.innerHTML = homeProfile;

  const btnUpdate = mainElem.querySelector('#button-save');
  btnUpdate.addEventListener('click', event);
  return mainElem;
};
