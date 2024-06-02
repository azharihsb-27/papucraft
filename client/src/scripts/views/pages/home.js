import { getAllKebudayaan } from '../../utils/api';

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
              <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="list-kebudayaan">
                
              </ul>
            </div>
          </article>

          <article id="article" class="p-7 lg:p-14">
            <div class="flex justify-between items-center text-primary">
              <h2 class="text-xl lg:text-2xl font-medium">Artikel Baru</h2>
              <a href="#/article" class="py-3 lg:text-xl font-medium hover:translate-x-2 duration-300">Lihat Semua</a>
            </div>
            <div class="py-2 lg:py-9 grid md:grid-cols-2 gap-6">
              <img 
                src="/img/bg.jpg"
              />
              <div class="flex flex-col justify-center gap-4">
                <h3 class="font-semibold text-primary text-xl xl:text-2xl">Judul Artikel</h3>
                <p class="-mt-2 xl:text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ab amet quas ipsam, qui ullam molestiae consequatur saepe quam esse quae minus laboriosam fugiat autem, porro voluptate ex eos. A aut necessitatibus optio nihil, dolorum magni, eos molestiae doloribus officia illo harum aperiam. Dolores, repudiandae quos. Quod molestias vitae provident!
                </p>
                <a href="#/article/:id" class="w-max px-3 py-[10.4px] text-white bg-primary border border-white hover:bg-primary_dark duration-300">Lihat Selengkapnya</a>
              </div>
            </div>
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
    const { data } = await getAllKebudayaan();
    listKebudayaan.innerHTML += `
      ${data.map((kebudayaan) => {
        return `
        <li class="shadow-xl px-2 py-3 rounded-lg">
          <a href=#/gallery/${kebudayaan.id}>
            <img
              src=${kebudayaan.thumbnail}
            />
            <div class="py-2">
              <h3 class="text-xl text-primary font-semibold">${kebudayaan.nama}</h3>
              <p>${kebudayaan.asal_daerah}</p>
            </div>
          </a>
        </li>
        `;
      })}
    `;
  },
};

export default Home;
