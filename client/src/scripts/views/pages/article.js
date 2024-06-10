import { getAllArtikel } from "../../utils/api";
import { alertError } from "../../utils/show-alert";

const Article = {
  async render() {
    return `
            <div class="content">
              <article id="new-articles" class="p-7 lg:p-14">
                <h2 class="text-primary text-xl lg:text-2xl font-medium">Artikel Baru</h2>
                <div class="py-2 lg:py-9">
                  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <li class="shadow-xl p-2 rounded-lg hover:-translate-y-1 duration-300">
                      <a href="#/article/:id">
                        <img
                          src="/img/bg.jpg"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Judul Artikel</h3>
                          <p>Author / Source</p>
                        </div>
                      </a>
                    </li>
                    <li class="shadow-xl p-2 rounded-lg hover:-translate-y-1 duration-300">
                      <a href="#/article/:id">
                        <img
                          src="/img/bg.jpg"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Judul Artikel</h3>
                          <p>Author / Source</p>
                        </div>
                      </a>
                    </li>
                    <li class="shadow-xl p-2 rounded-lg hover:-translate-y-1 duration-300">
                      <a href="#/article/:id">
                        <img
                          src="/img/bg.jpg"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Judul Artikel</h3>
                          <p>Author / Source</p>
                        </div>
                      </a>
                    </li>
                  </ul>
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
                  <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <li class="shadow-xl p-2 rounded-lg hover:-translate-y-1 duration-300">
                      <a href="#/article/:id">
                        <img
                          src="/img/bg.jpg"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Judul Artikel</h3>
                          <p>Author / Source</p>
                        </div>
                      </a>
                    </li>
                    <li class="shadow-xl p-2 rounded-lg hover:-translate-y-1 duration-300">
                      <a href="#/article/:id">
                        <img
                          src="/img/bg.jpg"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Judul Artikel</h3>
                          <p>Author / Source</p>
                        </div>
                      </a>
                    </li>
                    <li class="shadow-xl p-2 rounded-lg hover:-translate-y-1 duration-300">
                      <a href="#/article/:id">
                        <img
                          src="/img/bg.jpg"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
                          <p>Author / Source</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
      `;
  },

  async afterRender() {
    const wrapperAllArtikel = document.getElementById('all-artikel')
    const {success,data,message} = await getAllArtikel()
    if(wrapperAllArtikel){
      wrapperAllArtikel.innerHTML += data.map(artikel=>{
        return`
          <div class="shadow-xl p-2 py-1 rounded-lg hover:-translate-y-1 duration-300">
            <a href="#/article/${artikel.id}">
            <img src="${artikel.thumbnail}" class="rounded-md max-h-[90%]">
              <div class="py-2">
                <h3 class="text-xl text-primary font-semibold">${artikel.judul}</h3>
                <p class="mt-2">${artikel.user ? artikel.user : 'Internet'} </p>
              </div>
            </a>
          </div>
        `
      }).join('')
    }
  },

};

export default Article;
