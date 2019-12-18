
export default () => {
  const registerView = `
   <form clas= "form-register">
   <p>Bienvenidx</p>
   <input id="username" type="text" placeholder="Nombre de usuario">
   <input id="email-register" type="email" placeholder="Correo Electronico">
   <input id="password-register" type="password" placeholder="Contraseña">
   <button id="btn-register" class="btn-general" type="submit">REGISTRAME</button>
   </form>
     
    `;
  const divElem = document.createElement('div');
  divElem.className = 'viewRegister';
  divElem.innerHTML = registerView;
  return divElem;
};
