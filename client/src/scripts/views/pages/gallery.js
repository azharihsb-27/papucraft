const Gallery = {
  async render() {
    return `
            <div class="content">
              <article id="gallery" class="p-7 lg:p-14">
                <h2 class="text-primary text-xl lg:text-2xl font-medium">Galeri</h2>
                <div class="mt-6 flex gap-4">
                  <button class="px-2 py-1 border-2 border-primary rounded-full hover:bg-primary hover:text-white duration-300">Semua</button>
                  <button class="px-2 py-1 border-2 border-primary rounded-full hover:bg-primary hover:text-white duration-300">Tarian</button>
                  <button class="px-2 py-1 border-2 border-primary rounded-full hover:bg-primary hover:text-white duration-300">Alat Musik</button>
                  <button class="px-2 py-1 border-2 border-primary rounded-full hover:bg-primary hover:text-white duration-300">Makanan</button>
                </div>
                <div class="mt-4">
                  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <li class="group">
                      <a href="#/gallery/:id" class="relative">
                        <img
                          src="img/bg.jpg" class="w-full h-full block m-auto"
                        />
                        <div class="w-full h-full top-0 left-0 absolute bg-black/30 opacity-0 duration-300 group-hover:opacity-100">
                          <h3 class="text-white text-xl inset-4 absolute">Nama Tarian</h3>
                        </div>
                      </a>
                    </li>
                    <li class="group">
                      <a href="#/gallery/:id" class="relative">
                        <img
                          src="img/bg.jpg" class="w-full h-full block m-auto"
                        />
                        <div class="w-full h-full top-0 left-0 absolute bg-black/30 opacity-0 duration-300 group-hover:opacity-100">
                          <h3 class="text-white text-xl inset-4 absolute">Nama Tarian</h3>
                        </div>
                      </a>
                    </li>
                    <li class="group">
                      <a href="#/gallery/:id" class="relative">
                        <img
                          src="img/bg.jpg" class="w-full h-full block m-auto"
                        />
                        <div class="w-full h-full top-0 left-0 absolute bg-black/30 opacity-0 duration-300 group-hover:opacity-100">
                          <h3 class="text-white text-xl inset-4 absolute">Nama Tarian</h3>
                        </div>
                      </a>
                    </li>
                    <li class="group">
                      <a href="#/gallery/:id" class="relative">
                        <img
                          src="img/bg.jpg" class="w-full h-full block m-auto"
                        />
                        <div class="w-full h-full top-0 left-0 absolute bg-black/30 opacity-0 duration-300 group-hover:opacity-100">
                          <h3 class="text-white text-xl inset-4 absolute">Nama Alat Musik</h3>
                        </div>
                      </a>
                    </li>
                    <li class="group">
                      <a href="#/gallery/:id" class="relative">
                        <img
                          src="img/bg.jpg" class="w-full h-full block m-auto"
                        />
                        <div class="w-full h-full top-0 left-0 absolute bg-black/30 opacity-0 duration-300 group-hover:opacity-100">
                          <h3 class="text-white text-xl inset-4 absolute">Nama Alat Musik</h3>
                        </div>
                      </a>
                    </li>
                    <li class="group">
                      <a href="#/gallery/:id" class="relative">
                        <img
                          src="img/bg.jpg" class="w-full h-full block m-auto"
                        />
                        <div class="w-full h-full top-0 left-0 absolute bg-black/30 opacity-0 duration-300 group-hover:opacity-100">
                          <h3 class="text-white text-xl inset-4 absolute">Nama Alat Musik</h3>
                        </div>
                      </a>
                    </li>
                    <li class="group">
                      <a href="#/gallery/:id" class="relative">
                        <img
                          src="img/bg.jpg" class="w-full h-full block m-auto"
                        />
                        <div class="w-full h-full top-0 left-0 absolute bg-black/30 opacity-0 duration-300 group-hover:opacity-100">
                          <h3 class="text-white text-xl inset-4 absolute">Nama Makanan</h3>
                        </div>
                      </a>
                    </li>
                    <li class="group">
                      <a href="#/gallery/:id" class="relative">
                        <img
                          src="img/bg.jpg" class="w-full h-full block m-auto"
                        />
                        <div class="w-full h-full top-0 left-0 absolute bg-black/30 opacity-0 duration-300 group-hover:opacity-100">
                          <h3 class="text-white text-xl inset-4 absolute">Nama Makanan</h3>
                        </div>
                      </a>
                    </li>
                    <li class="group">
                      <a href="#/gallery/:id" class="relative">
                        <img
                          src="img/bg.jpg" class="w-full h-full block m-auto"
                        />
                        <div class="w-full h-full top-0 left-0 absolute bg-black/30 opacity-0 duration-300 group-hover:opacity-100">
                          <h3 class="text-white text-xl inset-4 absolute">Nama Makanan</h3>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
      `;
  },

  async afterRender() {},
};

export default Gallery;
