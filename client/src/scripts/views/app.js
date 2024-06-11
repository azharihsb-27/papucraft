import { adminRoutes, noSessionRoutes, userRoutes } from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import { isAdmin, showProfile, token } from '../utils/session-check';
import NotFound from './pages/not-found';
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
    await showProfile()
    let page
    const admin = await isAdmin()
    if(token){
      switch (admin) {
        case true:
          page = adminRoutes[url]
          break;
        default:
          page = userRoutes[url]
          break;
      }
    }else{
      page = noSessionRoutes[url]
    }
    

    if(page){
      this._content.innerHTML = await page.render();
      await page.afterRender();
    }else{
      this._content.innerHTML = await NotFound.render();
      await NotFound.afterRender();
    } 

  }
}

export default App;
