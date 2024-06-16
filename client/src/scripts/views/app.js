import { adminRoutes, noSessionRoutes, userRoutes } from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import {
  getSession,
  isAdmin,
  sessionButton,
  showProfile,
  token,
} from '../utils/session-check';
import NotFound from './pages/not-found';

const btnLogin = document.querySelector('a#btn-signIn');
const btnRegister = document.querySelector('a#btn-signUp');
const btnLogout = document.querySelector('a#btn-logout');

class App {
  constructor({ drawerButton, drawer, content }) {
    this._drawerButton = drawerButton;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      drawerButton: this._drawerButton,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    getSession();
    sessionButton({ btnLogin, btnLogout, btnRegister });
    await showProfile();
    let page;
    const admin = await isAdmin();
    if (token) {
      switch (admin) {
        case true:
          page = adminRoutes[url];
          break;
        default:
          page = userRoutes[url];
          break;
      }
    } else {
      page = noSessionRoutes[url];
    }

    if (page) {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } else {
      this._content.innerHTML = await NotFound.render();
      await NotFound.afterRender();
    }
  }
}

export default App;
