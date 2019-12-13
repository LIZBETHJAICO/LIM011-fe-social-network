import { loginUserEmail } from '../model/login-model.js';

export default () => {
  const btnLogin = document.querySelector('#btn-login');
  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login');
    const password = document.querySelector('#password-login');
    loginUserEmail(email.value, password.value);
    
  });
};
