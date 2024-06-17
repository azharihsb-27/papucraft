const unShowShell = () => {
  document.querySelector('header').classList.add('hidden');
  document.querySelector('footer').classList.add('hidden');
};
const showShell = () => {
  document.querySelector('header').classList.remove('hidden');
  document.querySelector('footer').classList.remove('hidden');
}; 
const setTitle = (title) =>{
  document.title = title
}

export { unShowShell, showShell, setTitle };
