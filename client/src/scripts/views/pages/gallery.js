import { getAllKebudayaan } from '../../utils/api';

const Gallery = {
  async render() {
    return `
            <div class="content">
              <article id="gallery" class="p-7 lg:p-14">
                <h2 class="text-primary text-xl lg:text-2xl font-medium">Galeri</h2>
                <div class="mt-6 flex gap-4" id="switch-wrapper">
                  <button class="px-2 py-1 border-2 border-primary rounded-full hover:bg-primary hover:text-white duration-300" id="all">Semua</button>
                  <button class="px-2 py-1 border-2 border-primary rounded-full hover:bg-primary hover:text-white duration-300" id="tarian">Tarian</button>
                  <button class="px-2 py-1 border-2 border-primary rounded-full hover:bg-primary hover:text-white duration-300" id="alat-musik">Alat Musik</button>
                  <button class="px-2 py-1 border-2 border-primary rounded-full hover:bg-primary hover:text-white duration-300" id="makanan">Makanan</button>
                </div>
                <div class="my-2">
                  <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2" id="list-gallery">
                    
                    
                  </div>
                </div>
              </article>
            </div>
      `;
  },

  async afterRender() {
    const { success, data, message } = await getAllKebudayaan();
    const wrapper = document.getElementById('list-gallery');
    const button = document.querySelectorAll('#switch-wrapper button');
    const musikData = data.filter((data) => data.kategori == 'Alat Musik');
    const makananData = data.filter((data) => data.kategori == 'Makanan');
    const tarianData = data.filter((data) => data.kategori == 'Tarian');

    const renderKebudayaan = (data) => {
      wrapper.innerHTML = '';
      wrapper.innerHTML += data
        .map((budaya) => {
          console.log(budaya.id);
          return `
        <div class="group rounded-md">
          <a href="#/gallery/${budaya.id}" class="relative">
            <img
              src="${budaya.thumbnail}" class="w-full h-full block m-auto rounded-md bg-cover bg-center object-fit"
            />
            <div class="w-full h-full top-0 left-0 absolute bg-black/30 opacity-0 duration-300 rounded-md group-hover:opacity-100">
              <h3 class="text-white text-xl inset-4 absolute">${budaya.nama}</h3>
            </div>
          </a>
        </div>`;
        })
        .join('');
    };

    button.forEach((btn) => {
      btn.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (btn.getAttribute('id') == 'tarian') {
          renderKebudayaan(tarianData);
        } else if (btn.getAttribute('id') == 'alat-musik') {
          renderKebudayaan(musikData);
        } else if (btn.getAttribute('id') == 'makanan') {
          renderKebudayaan(makananData);
        } else {
          renderKebudayaan(data);
        }
      });
    });
    if (wrapper) {
      renderKebudayaan(data);
    }
  },
};

export default Gallery;
