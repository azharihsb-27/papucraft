import 'regenerator-runtime';
import '../styles/style.css';
import App from './views/app';
import { sessionButton, logout, getSession } from './utils/session-check';
import { unShowShell, showShell } from './utils/app-shell';
import UrlParser from './routes/url-parser';
import swRegister from './utils/sw.register';
const btnLogin = document.querySelector('a#btn-signIn');
const btnRegister = document.querySelector('a#btn-signUp');
const btnLogout = document.querySelector('a#btn-logout');

const app = new App({
  drawerButton: document.querySelector('#drawerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  sessionButton({ btnLogin, btnLogout, btnRegister });
  logout(btnLogout);
  getSession();
  const url = UrlParser.parseActiveUrlWithCombiner();
  if (
    (url === '/signin' || url === '/signup') &&
    sessionStorage.getItem('token')
  ) {
    showShell();
  } else if (
    (url === '/signin' || url === '/signup') &&
    !sessionStorage.getItem('token')
  ) {
    unShowShell();
  } else {
    showShell();
  }
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  sessionButton({ btnLogin, btnLogout, btnRegister });
  logout(btnLogout);
  getSession();
  const url = UrlParser.parseActiveUrlWithCombiner();
  if (
    (url === '/signin' || url === '/signup') &&
    sessionStorage.getItem('token')
  ) {
    showShell();
  } else if (
    (url === '/signin' || url === '/signup') &&
    !sessionStorage.getItem('token')
  ) {
    unShowShell();
  } else {
    showShell();
  }
});
