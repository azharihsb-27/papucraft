import 'regenerator-runtime';
import '../styles/style.css';
import App from './views/app';
import { sessionButton, logout, getSession } from './utils/session-check';
import UrlParser from './routes/url-parser';
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
  if (url === '/signin' || url === '/signup') {
    document.querySelector('header').classList.add('hidden');
    document.querySelector('footer').classList.add('hidden');
  } else {
    document.querySelector('header').classList.remove('hidden');
    document.querySelector('footer').classList.remove('hidden');
  }
});

window.addEventListener('load', () => {
  app.renderPage();
  sessionButton({ btnLogin, btnLogout, btnRegister });
  logout(btnLogout);
  getSession();
  const url = UrlParser.parseActiveUrlWithCombiner();
  if (url === '/signin' || url === '/signup') {
    document.querySelector('header').classList.add('hidden');
    document.querySelector('footer').classList.add('hidden');
  } else {
    document.querySelector('header').classList.remove('hidden');
    document.querySelector('footer').classList.remove('hidden');
  }
});
