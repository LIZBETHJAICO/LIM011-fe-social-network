export default () => {
  const loginView = `
<p>Bienvenidx</p>
  <form action="">
    <p>Si ya tienes una cuenta</p>
    <input type="email" id="email-login" placeholder="Correo Electronico" required>
    <input type="password" id="password-login" placeholder="Contraseña" required>
    <button id="btn-login" class="btn-general" type="submit">INGRESAR</button>
  </form>
  <p>ó ingresa con :</p>
    <a>Facebook</a>
    <a>Gmail</a>
  <p>¿No tienes una cuenta?<a href="#/register">Regístrate</a></p>`;
  const divELem = document.createElement('div');
  divELem.innerHTML = loginView;
  return divELem;
};
