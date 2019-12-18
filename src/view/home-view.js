export default () => {
  const homeView = `
  <form class="form-home" >
  <p>Bienvenidx</p>
  <div class="photo-perfil">
  <label id="label-name">su nombre:</label>
  <img id="img-photo" alt="su foto aqui "></img>
  </div>
  <a href="#/">Cerrar Sesión</a>
  </form> `;
  const divELem = document.createElement('div');
  divELem.innerHTML = homeView;
  return divELem;
};
