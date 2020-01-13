/* eslint-disable no-console */

import { registerUserEmail } from '../model/auth-user.js';
import { addUserData } from '../model/user-firestore.js';

export default (event) => {
  event.preventDefault();
  const btnRegister = event.target;
  const email = btnRegister.closest('form').querySelector('input[type=email]');
  const password = btnRegister.closest('form').querySelector('input[type=password]');
  const nameUser = btnRegister.closest('form').querySelector('input[type=text]');
  const typeUser = btnRegister.closest('form').querySelector('#typeUser');
  const msgError = btnRegister.closest('form').querySelector('#error-message');
  const msgErrorEmail = btnRegister.closest('form').querySelector('#error-email');
  const msgErrorPassword = btnRegister.closest('form').querySelector('#error-password');
  if (email.value !== '' && password.value !== '') {
    registerUserEmail(email.value, password.value)
      .then((result) => {
        const redirectLogin = {
          url: 'https://lizbethjaico.github.io/LIM011-fe-social-network/src/',
        };
        result.user.sendEmailVerification(redirectLogin).then(() => {
          console.log('Para continuar por favor revise su correo el electronico y valide');
          const userId = result.user.uid;
          const userObj = {
            displayName: nameUser.value,
            photoURL: 'https://image.flaticon.com/icons/svg/149/149071.svg',
            email: result.user.email,
            typeUser: typeUser.value,
          };
          addUserData(userId, userObj);
          window.location.hash = '#/login';
          nameUser.value = '';
          email.value = '';
          password.value = '';
        }).catch((error) => {
          console.error(error);
        });
      }).catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/weak-password') {
          msgError.innerHTML = 'La contraseña ingresada es debil, ingrese 6 o más caracteres';
          password.value = '';
          password.className = 'error-color';
        } else if (errorCode === 'auth/email-already-in-use') {
          email.value = '';
          email.className = 'error-color';
          msgError.innerHTML = ' El correo ingresado ya se encuentra registrado';
        } else if (errorCode === 'auth/invalid-email') {
          email.value = '';
          email.className = 'error-color';
          msgError.innerHTML = 'el correo ingresado no es valido';
        }
      });
  } else {
    email.className = 'error-color';
    password.className = 'error-color';
    msgErrorEmail.innerHTML = 'Por favor ingrese un correo electrónico(*)';
    msgErrorPassword.innerHTML = 'Por favor ingrese una contraseña(*)';
  }
};

export const passwordShow = () => {
  const tipo = document.querySelector('#password-register');
  if (tipo.type === 'password') {
    tipo.type = 'text';
  } else {
    tipo.type = 'password';
  }
};
