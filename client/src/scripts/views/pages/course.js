const Course = {
  async render() {
    return `
        <div class="container mx-auto p-4">

        <!-- Kelas Populer -->
        <article class="p-7 lg:p-14">
            <h2 class="text-xl font-semibold mb-2 pb-5 text-primary">Kelas Populer</h2>
            <div class="flex items-center bg-white shadow-lg rounded-lg p-4 mb-6">
                <div class="w-1/2 bg-gray-300 h-100 flex justify-center items-center overflow-hidden">
                    <img src="/img/bg.jpg" alt="Kelas Populer" class="object-cover h-full w-full"/>
                </div>
                <div class="w-2/3 px-10">
                    <h3 class="text-lg font-bold text-primary pb-2" >Nama Kelas</h3>
                    <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur. Tempor nibh tortor mattis rutrum lobortis. Ut eleifend rhoncus natoque ipsum mattis. Non non est arcu purus vel elit pulvinar blandit lobortis.</p>
                    <button class="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded">Lihat Selengkapnya</button>
                </div>
            </div>
        </article>

        <!-- Semua Kelas -->
        <article class="p-7 lg:p-14">
            <h2 class="text-xl font-semibold mb-2 pb-5 text-primary">Semua Kelas</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Class Card -->
                <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="bg-gray-300 h-54 flex justify-center items-center">
                    <img src="/img/bg.jpg" alt="Kelas Populer" class="object-cover h-full w-full"/>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-bold text-primary pb-3">Judul Kelas</h3>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque quis amet est viverra. Ut in mollis pharetra vitae felis enim ultricies interdum.</p>
                        <button class="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded w-full">Lihat Selengkapnya</button>
                    </div>
                </div>
                <!-- Repeat the above block for more classes -->
                <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="bg-gray-300 h-54 flex justify-center items-center">
                    <img src="/img/bg.jpg" alt="Kelas Populer" class="object-cover h-full w-full"/>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-bold text-primary pb-3">Judul Kelas</h3>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque quis amet est viverra. Ut in mollis pharetra vitae felis enim ultricies interdum.</p>
                        <button class="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded w-full">Lihat Selengkapnya</button>
                    </div>
                </div>
                <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="bg-gray-300 h-54 flex justify-center items-center">
                    <img src="/img/bg.jpg" alt="Kelas Populer" class="object-cover h-full w-full"/>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-bold text-primary pb-3">Judul Kelas</h3>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque quis amet est viverra. Ut in mollis pharetra vitae felis enim ultricies interdum.</p>
                        <button class="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded w-full">Lihat Selengkapnya</button>
                    </div>
                </div>
                <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="bg-gray-300 h-54 flex justify-center items-center">
                    <img src="/img/bg.jpg" alt="Kelas Populer" class="object-cover h-full w-full"/>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-bold text-primary pb-3">Judul Kelas</h3>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque quis amet est viverra. Ut in mollis pharetra vitae felis enim ultricies interdum.</p>
                        <button class="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded w-full">Lihat Selengkapnya</button>
                    </div>
                </div>
                <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="bg-gray-300 h-54 flex justify-center items-center">
                    <img src="/img/bg.jpg" alt="Kelas Populer" class="object-cover h-full w-full"/>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-bold text-primary pb-3">Judul Kelas</h3>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque quis amet est viverra. Ut in mollis pharetra vitae felis enim ultricies interdum.</p>
                        <button class="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded w-full">Lihat Selengkapnya</button>
                    </div>
                </div>
                <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="bg-gray-300 h-54 flex justify-center items-center">
                    <img src="/img/bg.jpg" alt="Kelas Populer" class="object-cover h-full w-full"/>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-bold text-primary pb-3">Judul Kelas</h3>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque quis amet est viverra. Ut in mollis pharetra vitae felis enim ultricies interdum.</p>
                        <button class="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded w-full">Lihat Selengkapnya</button>
                    </div>
                </div>
            </div>
        </article>
        </div>
    `;
  },

  async afterRender() {},
};

export default Course;
