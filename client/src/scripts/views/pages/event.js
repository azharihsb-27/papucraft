const Event = {
	async render() {
		return `
			<div class="content">
				<article id="new-event" class="p-7 lg:p-14">
					<h2 class="text-primary text-xl lg:text-2xl font-medium">Acara Terbaru</h2>
					<div class="py-2 lg:py-9 flex flex-col gap-4">
						<img src="/img/bg.jpg" alt="Newest Event Image" class="w-full h-[490px] object-cover" />
						<div class="flex flex-col justify-center gap-4">
							<h3 class="font-semibold text-primary text-xl xl:text-2xl">Judul Acara</h3>
							<p class="xl:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere, enim atque expedita dolor excepturi consectetur quam dignissimos mollitia veritatis magni, quis suscipit asperiores, architecto facilis. Reprehenderit culpa error adipisci at obcaecati architecto repellendus voluptas nisi, sint eum a nam. Odit, voluptatum. Iure assumenda debitis earum veritatis eius quisquam vero!</p>
							<a href="#/event/:id" class="w-max px-3 py-[10.4px] text-white bg-primary border border-white hover:bg-primary_dark duration-300">Lihat Selengkapnya</a>
						</div>
					</div>
				</article>
							
				<article id="all-event" class="p-7 lg:p-14">
					<h2 class="text-primary text-xl lg:text-2xl font-medium">Semua Acara</h2>
					<div class="py-2 lg:py-9">
						<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<li class="h-max shadow-xl p-2 rounded-lg">
								<img
								src="/img/bg.jpg"
								/>
								<div class="px-4 py-2 flex flex-col gap-2">
									<h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere, enim atque expedita dolor excepturi consectetur quam dignissimos mollitia veritatis magni, quis suscipit asperiores, architecto facilis. Reprehenderit culpa error adipisci at obcaecati architecto repellendus voluptas nisi, sint eum a nam. Odit, voluptatum. Iure assumenda debitis earum veritatis eius quisquam vero!</p>
									<a href="#/event/:id" class="w-full text-center px-3 py-[10.4px] mt-2 text-white bg-primary border border-white hover:bg-primary_dark duration-300">Lihat Selengkapnya</a>
								</div>
                    		</li>
                    		<li class="h-max shadow-xl p-2 rounded-lg">
								<img
								src="/img/bg.jpg"
								/>
								<div class="px-4 py-2 flex flex-col gap-2">
									<h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere, enim atque expedita dolor excepturi consectetur quam dignissimos mollitia veritatis magni, quis suscipit asperiores, architecto facilis. Reprehenderit culpa error adipisci at obcaecati architecto repellendus voluptas nisi, sint eum a nam. Odit, voluptatum. Iure assumenda debitis earum veritatis eius quisquam vero!</p>
									<a href="#/event/:id" class="w-full text-center px-3 py-[10.4px] mt-2 text-white bg-primary border border-white hover:bg-primary_dark duration-300">Lihat Selengkapnya</a>
								</div>
							</li>
							<li class="h-max shadow-xl p-2 rounded-lg">
								<img
								src="/img/bg.jpg"
								/>
								<div class="px-4 py-2 flex flex-col gap-2">
									<h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere, enim atque expedita dolor excepturi consectetur quam dignissimos mollitia veritatis magni, quis suscipit asperiores, architecto facilis. Reprehenderit culpa error adipisci at obcaecati architecto repellendus voluptas nisi, sint eum a nam. Odit, voluptatum. Iure assumenda debitis earum veritatis eius quisquam vero!</p>
									<a href="#/event/:id" class="w-full text-center px-3 py-[10.4px] mt-2 text-white bg-primary border border-white hover:bg-primary_dark duration-300">Lihat Selengkapnya</a>
								</div>
                    		</li>
                  		</ul>
                	</div>
              	</article>
			</div>
      `;
	},

	async afterRender() {},
};

export default Event;
