import { getHighlight} from '../../utils/api';

const Home = {
  async render() {
    return `
        <div class="content">
          <article id="hero" class="w-full h-screen">
            <img src="/img/bg.jpg" alt="Hero Image"
              class="w-full h-full object-cover"
            />
          </article>

          <article id="gallery" class="p-7 lg:p-14">
            <div class="flex justify-between items-center text-primary">
              <h2 class="text-xl lg:text-2xl font-medium">Galeri Budaya</h2>
              <a href="#/gallery" class="py-3 lg:text-xl font-medium hover:translate-x-2 duration-300">Lihat Semua</a>
            </div>
            <div class="py-2 lg:py-9">
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" id="list-kebudayaan">
                
              </div>
            </div>
          </article>

          <article id="article" class="p-7 lg:p-14">
            
          </article>

          <article id="event" class="p-7 lg:p-14">
            <div class="flex justify-between items-center text-primary">
              <h2 class="text-xl lg:text-2xl font-medium">Acara Baru</h2>
              <a href="#/event" class="py-3 lg:text-xl font-medium hover:translate-x-2 duration-300">Lihat Semua</a>
            </div>
            <div class="py-2 lg:py-9 grid md:grid-cols-2 gap-6">
              <div class="flex flex-col justify-center gap-4">
                <h3 class="font-semibold text-primary text-xl xl:text-2xl">Nama Acara</h3>
                <p class="-mt-2 xl:text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ab amet quas ipsam, qui ullam molestiae consequatur saepe quam esse quae minus laboriosam fugiat autem, porro voluptate ex eos. A aut necessitatibus optio nihil, dolorum magni, eos molestiae doloribus officia illo harum aperiam. Dolores, repudiandae quos. Quod molestias vitae provident!
                </p>
                <a href="#/event/:id" class="w-max px-3 py-[10.4px] text-white bg-primary border border-white hover:bg-primary_dark duration-300">Lihat Selengkapnya</a>
              </div>
              <img 
                src="/img/bg.jpg"
                class="order-first md:order-last"
              />
            </div>
          </article>
      </div>
    `;
  },

  async afterRender() {
    const listKebudayaan = document.getElementById('list-kebudayaan');
    const {data} = await getHighlight()
    const {kebudayaan, artikel} = data
    listKebudayaan.innerHTML += kebudayaan.slice(0,4).map(budaya=>{
      return `
        <div class="shadow-xl px-2 py-1 rounded-lg">
          <a href=#/gallery/${budaya.id}>
            <img
              src=${budaya.thumbnail}
              class="rounded-xl h-[150px] md:h-[170px] w-full object-fit object-center"
              alt=${budaya.nama}
            />
            <div class="py-2">
              <h3 class="text-xl text-primary font-semibold">${budaya.nama}</h3>
              <p>${budaya.asal_daerah}</p>
            </div>
          </a>
        </div>
        `;
    }).join('')

    const articleWrapper = document.querySelector('article#article')
    const newestArticle = artikel[artikel.length - 1]
    
    if(articleWrapper){
      articleWrapper.innerHTML += `
        <div class="flex justify-between items-center text-primary">
          <h2 class="text-xl lg:text-2xl font-medium">Artikel Baru</h2>
          <a href="#/article" class="py-3 lg:text-xl font-medium hover:translate-x-2 duration-300">Lihat Semua</a>
        </div>
        <div class="py-2 lg:py-9 grid md:grid-cols-2 gap-6">
          <img 
            src="${newestArticle.thumbnail}"
          />
          <div class="flex flex-col justify-center gap-4">
            <h3 class="font-semibold text-primary text-xl xl:text-2xl">${newestArticle.judul}</h3>
            <p class="-mt-2 xl:text-lg">
              ${newestArticle.ringkasan}
            </p>
            <a href="#/article/${newestArticle.id}" class="w-max px-3 py-[10.4px] text-white bg-primary border border-white hover:bg-primary_dark duration-300">Lihat Selengkapnya</a>
          </div>
        </div>
      `
    }

  },
};

export default Home;
