export default () => {
  const loginView = `
  <form class="form-login" action="">
    <p>Bienvenidx</p>
    <input type="email" id="email-login" placeholder="Correo Electronico" required>
    <input type="password" id="password-login" placeholder="Contraseña" required>
    <button id="btn-login" class="btn-general" type="submit">INGRESAR</button>
    <p>ó ingresa con :</p>
    <div class="button-social"> 
    <button id="btn-facebook" class="btn-social-icon" type="submit" ><img src="../img/facebook.png" alt="facebook"></button>
    <button id="btn-google" class="btn-social-icon" type="submit"><img src="../img/google.png" alt="gmail"></button>
    </div>
    
    <p>¿No tienes una cuenta?<a href="#/register">Regístrate</a></p>
    </form>`;
  const divELem = document.createElement('div');
  divELem.innerHTML = loginView;
  return divELem;
};
