import { getHighlight } from '../../utils/api';
import { setTitle } from '../../utils/app-shell';
import {
  highlightCardSkeleton,
  leftImgHighlightSkeleton,
  rightImgHighlightSkeleton,
} from '../templates/template-skeleton';

const Home = {
  async render() {
    return `
        <div class="content">
          <article id="hero" class="w-full h-screen relative">
          <picture>
            <source class="lazyload w-full h-[89vh] object-cover" media="(max-width: 680px)" data-srcset="./bg-img/bg-small.jpg" />
            <img class="lazyload w-full h-[89vh] object-cover" data-src="./bg-img/bg-large.jpg" alt="Hero Image"
            />
          </picture>
          <div class="absolute top-[30%] left-1/2 -translate-x-1/2">
            <h3 class="text-primary text-5xl text-center font-bold ">PapuCraft</h3>
            <p class="text-2xl text-white font-medium">Karya-karya Seni Budaya Papua</p>
          </div>
          </article>

          <article id="gallery" class="p-7 lg:p-14">
            <div class="flex justify-between items-center text-primary">
              <h2 class="text-xl lg:text-2xl font-medium">Galeri Budaya</h2>
              <a href="#/gallery" class="py-3 lg:text-xl font-medium hover:translate-x-2 duration-300">Lihat Semua</a>
            </div>
            <div class="py-2 lg:py-9">
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" id="list-kebudayaan">
                ${highlightCardSkeleton(4)}
              </div>
            </div>
          </article>

          <article id="article" class="p-7 lg:p-14">
            <div class="flex justify-between items-center text-primary">
              <h2 class="text-xl lg:text-2xl font-medium">Artikel Baru</h2>
              <a href="#/article" class="py-3 lg:text-xl font-medium hover:translate-x-2 duration-300">Lihat Semua</a>
            </div>
            <div class="py-2 lg:py-9 grid md:grid-cols-2 gap-6" id="list-artikel">
              ${leftImgHighlightSkeleton(1)}
            </div>
          </article>

          <article id="event" class="p-7 lg:p-14">
            <div class="flex justify-between items-center text-primary">
              <h2 class="text-xl lg:text-2xl font-medium">Acara Baru</h2>
              <a href="#/event" class="py-3 lg:text-xl font-medium hover:translate-x-2 duration-300">Lihat Semua</a>
            </div>
            <div class="py-2 lg:py-9 grid md:grid-cols-2 gap-6" id="list-acara">
              ${rightImgHighlightSkeleton(1)}
            </div>
          </article>
      </div>
    `;
  },

  async afterRender() {
    setTitle('PapuCraft | Karya-karya Seni dan Budaya Papua');
    const listKebudayaan = document.getElementById('list-kebudayaan');
    const { data } = await getHighlight();
    const { kebudayaan, artikel, event } = data;
    console.log(artikel);
    listKebudayaan.innerHTML = kebudayaan
      .map((budaya) => {
        return `
        <div class="shadow-xl px-2 py-1 rounded-lg">
          <a href=#/gallery/${budaya.id}>
            <img
              data-src=${budaya.thumbnail}
              class="lazyload rounded-xl h-[170px] w-full object-cover"
              alt=${budaya.nama}
            />
            <div class="py-2">
              <h3 class="text-xl text-primary font-semibold">${budaya.nama}</h3>
              <p>${budaya.asal_daerah}</p>
            </div>
          </a>
        </div>
        `;
      })
      .join('');

    const articleWrapper = document.getElementById('list-artikel');
    if (articleWrapper) {
      articleWrapper.innerHTML = `
        <img 
          data-src=${artikel.thumbnail}
          class="lazyload object-cover"
        />
        <div class="flex flex-col justify-center gap-4">
          <h3 class="font-semibold text-primary text-xl xl:text-2xl">${artikel.judul}</h3>
          <p class="-mt-2 xl:text-lg">
            ${artikel.ringkasan}
          </p>
          <a href="#/article/${artikel.id}" class="w-max px-3 py-[10.4px] text-white bg-primary border border-white hover:bg-primary_dark duration-300">Lihat Selengkapnya</a>
        </div>
      
      `;
    }
    const acaraWrapper = document.getElementById('list-acara');
    if (acaraWrapper) {
      acaraWrapper.innerHTML = `
        <div class="flex flex-col justify-center gap-4">
          <h3 class="font-semibold text-primary text-xl xl:text-2xl">${event.nama}</h3>
          <p class="-mt-2 xl:text-lg">
            ${event.deskripsi}
          </p>
          <a href="#/event/${event.id}" class="w-max px-3 py-[10.4px] text-white bg-primary border border-white hover:bg-primary_dark duration-300">Lihat Selengkapnya</a>
        </div>
        <img 
          data-src=${event.thumbnail}
          class="lazyload object-cover order-first md:order-last"
        />
      `;
    }
  },
};

export default Home;
