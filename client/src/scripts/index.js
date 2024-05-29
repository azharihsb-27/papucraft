import 'regenerator-runtime';
import '../styles/style.css';
import App from './views/app';

const app = new App({
  drawerButton: document.querySelector('#drawerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
