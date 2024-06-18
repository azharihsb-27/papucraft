import { getAllEvent } from '../../utils/api';
import { eventSkeleton } from '../templates/template-skeleton';

const Event = {
  async render() {
    return `
			<div class="content">
				<article id="new-event" class="p-7 lg:p-14">
					<h2 class="text-primary text-xl lg:text-2xl font-medium">Acara Terbaru</h2>
					<div class="py-2 lg:py-9 flex flex-col gap-4">
						<img src="./img/preview.png" alt="Newest Event Image" class="lazyload w-full h-[490px] object-cover" id="new-thumbnail"/>
						<div class="flex flex-col justify-center gap-4">
							<h3 class="font-semibold text-primary text-xl xl:text-2xl" id="new-nama"></h3>
							<p class="xl:text-lg" id="new-deskripsi"></p>
							<a class="w-max px-3 py-[10.4px] cursor-pointer text-white bg-primary border border-white hover:bg-primary_dark duration-300" id="new-link">Lihat Selengkapnya</a>
						</div>
					</div>
				</article>
							
				<article id="all-event" class="p-7 lg:p-14">
					<h2 class="text-primary text-xl lg:text-2xl font-medium">Semua Acara</h2>
					<div class="py-2 lg:py-9">
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"  id="list-event">
							${eventSkeleton(2)}
        		</div>
      	</div>
      </article>
			</div>
      `;
  },

  async afterRender() {
    const newestNama = document.getElementById('new-nama');
    const newestDeskripsi = document.getElementById('new-deskripsi');
    const newestThumbnail = document.getElementById('new-thumbnail');
    const newestLink = document.getElementById('new-link');

    const { data } = await getAllEvent();

    const newestEvent = data[data.length - 1];
    newestNama.textContent = newestEvent.nama;
    newestDeskripsi.textContent = newestEvent.deskripsi;
    newestThumbnail.src = newestEvent.thumbnail;
    newestLink.setAttribute('href', `#/event/${newestEvent.id}`);

    const listEvent = document.getElementById('list-event');
    listEvent.innerHTML = data
      .map((event) => {
        return `
			<div class="shadow-xl p-2 py-1 rounded-lg hover:-translate-y-1 duration-300">
				<img
				data-src=${event.thumbnail} class="lazyload object-cover max-h-[90%]"
				/>
				<div class="px-4 py-2 flex flex-col gap-2">
					<h3 class="text-xl text-primary font-semibold">${event.nama}</h3>
					<p>${event.deskripsi}</p>
					<a href="#/event/${event.id}" class="w-full text-center px-3 py-[10.4px] mt-2 text-white bg-primary border border-white hover:bg-primary_dark duration-300">Lihat Selengkapnya</a>
				</div>
			</div>
			`;
      })
      .join('');
  },
};

export default Event;
