import { getAllArtikel } from '../../utils/api';
import { setTitle } from '../../utils/app-shell';

const Article = {
  async render() {
    return `
            <div class="content">
              <article id="new-articles" class="p-7 lg:p-14">
                <h2 class="text-primary text-xl lg:text-2xl font-medium">Artikel Baru</h2>
                <div class="py-2 lg:py-9">
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="new-artikel">
                    
                  </div>
                </div>
              </article>

              <article id="all-articles" class="p-7 lg:p-14">
                <h2 class="text-primary text-xl lg:text-2xl font-medium">Semua Artikel</h2>
                <div class="py-2 lg:py-9">
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-3" id="all-artikel">
                  
                  </div>  
                </div>
              </article>

              <article id="recommended-articles" class="p-7 lg:p-14">
                <h2 class="text-primary text-xl lg:text-2xl font-medium">Rekomendasi Artikel</h2>
                <div class="py-2 lg:py-9">
                  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" id="recom-artikel">
                    
                  </div> 
                </div>
              </article>
            </div>
      `;
  },

  async afterRender() {
    setTitle('Artikel - PapuCraft')
    const wrapperAllArtikel = document.getElementById('all-artikel');
    const wrapperNewArtikel = document.getElementById('new-artikel');
    const wrapperRecomArtikel = document.getElementById('recom-artikel');
    const { data } = await getAllArtikel();
    const newestArtikel = [...data].slice(0, 3);
    newestArtikel.reverse();

    if (wrapperNewArtikel) {
      wrapperNewArtikel.innerHTML += newestArtikel
        .map((artikel) => {
          return `
          <div class="shadow-xl p-2 py-1 rounded-lg hover:-translate-y-1 duration-300">
            <a href="#/article/${artikel.id}">
            <img data-src="${
              artikel.thumbnail
            }" class="lazyload rounded-md max-h-[90%]">
              <div class="py-2">
                <h3 class="text-xl text-primary font-semibold">${
                  artikel.judul
                }</h3>
                <p class="mt-2">${
                  artikel.author ? artikel.author.username : 'Internet'
                } </p>
              </div>
            </a>
          </div>
        `;
        })
        .join('');
    }

    if (wrapperAllArtikel) {
      wrapperAllArtikel.innerHTML += data
        .map((artikel) => {
          return `
          <div class="shadow-xl p-2 py-1 rounded-lg hover:-translate-y-1 duration-300">
            <a href="#/article/${artikel.id}">
            <img data-src="${
              artikel.thumbnail
            }" class="lazyload rounded-md max-h-[90%]">
              <div class="py-2">
                <h3 class="text-xl text-primary font-semibold">${
                  artikel.judul
                }</h3>
                <p class="mt-2">${
                  artikel.author ? artikel.author.username : 'Internet'
                } </p>
              </div>
            </a>
          </div>
        `;
        })
        .join('');
    }

    if (wrapperRecomArtikel) {
      wrapperRecomArtikel.innerHTML += data
        .slice(0, 3)
        .map((artikel) => {
          return `
          <div class="shadow-xl p-2 py-1 rounded-lg hover:-translate-y-1 duration-300">
            <a href="#/article/${artikel.id}">
            <img data-src="${
              artikel.thumbnail
            }" class="lazyload rounded-md max-h-[90%]">
              <div class="py-2">
                <h3 class="text-xl text-primary font-semibold">${
                  artikel.judul
                }</h3>
                <p class="mt-2">${
                  artikel.author ? artikel.author.username : 'Internet'
                } </p>
              </div>
            </a>
          </div>
        `;
        })
        .join('');
    }
  },
};

export default Article;
