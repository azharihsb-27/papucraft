import 'regenerator-runtime';
import '../styles/style.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import { sessionButton, logout, getSession } from './utils/session-check';
import { unShowShell, showShell } from './utils/app-shell';
import UrlParser from './routes/url-parser';
import swRegister from './utils/sw.register';
const btnLogin = document.querySelector('a#btn-signIn');
const btnRegister = document.querySelector('a#btn-signUp');
const btnLogout = document.querySelector('a#btn-logout');
const adminTopbar = document.querySelector('#adminTopbar');
const adminSidebar = document.querySelector('#adminSidebar');
const footer = document.querySelector('footer');

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
  const adminUrl = [
    '/admindashboard',
    '/adminuser',
    '/admingallery',
    '/admingallerydetail/:id',
    '/admingalleryedit/:id',
    '/adminarticle',
    'adminarticledetail/:id',
    '/adminarticleedit/:id',
    '/adminevent',
    'admineventdetail/:id',
    '/admineventedit/:id',
    '/admincourse',
    'admincoursedetail/:id',
    '/admincourseedit/:id',
  ];

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

  if (adminUrl.includes(url)) {
    adminTopbar.classList.add('flex', 'md:hidden');
    adminSidebar.classList.add('md:flex');
    footer.classList.add('hidden');
  } else {
    adminTopbar.classList.add('hidden');
    adminSidebar.classList.remove('md:flex');
  }
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  sessionButton({ btnLogin, btnLogout, btnRegister });
  logout(btnLogout);
  getSession();
  const url = UrlParser.parseActiveUrlWithCombiner();
  const adminUrl = [
    '/admindashboard',
    '/adminuser',
    '/admingallery',
    '/admingallerydetail/:id',
    '/admingalleryedit/:id',
    '/adminarticle',
    'adminarticledetail/:id',
    '/adminarticleedit/:id',
    '/adminevent',
    'admineventdetail/:id',
    '/admineventedit/:id',
    '/admincourse',
    'admincoursedetail/:id',
    '/admincourseedit/:id',
  ];

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

  if (adminUrl.includes(url)) {
    adminTopbar.classList.add('flex', 'md:hidden');
    adminSidebar.classList.add('md:flex');
    footer.classList.add('hidden');
  } else {
    adminTopbar.classList.add('hidden');
    adminSidebar.classList.remove('md:flex');
  }
});
