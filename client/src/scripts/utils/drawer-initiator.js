const DrawerInitiator = {
  init({ drawerButton, drawer, content }) {
    drawerButton.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    const nav = drawer.getAttribute('aria-label');
    if (nav === 'User Navigation') {
      drawer.classList.toggle('open-user-drawer');
    } else {
      drawer.classList.toggle('open-admin-drawer');
    }
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    const nav = drawer.getAttribute('aria-label');
    if (nav === 'User Navigation') {
      drawer.classList.remove('open-user-drawer');
    } else {
      drawer.classList.remove('open-admin-drawer');
    }
  },
};

export default DrawerInitiator;
