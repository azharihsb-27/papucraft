const DetailCourse = {
  async render() {
    return `
        <div class="container mx-auto p-4">
        <article>
            <h1 class="text-2xl font-bold text-red-600">Course Detail</h1>
            <div class="mt-4">
            <img src="/img/bg.jpg" alt="Kelas Populer" class="object-cover h-full w-full"/>
                <h2 class="mt-4 text-xl font-semibold text-primary">Nama Kelas</h2>
                <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur. Nulla augue eget augue hendrerit morbi urna. Leo vestibulum venenatis sed eu iaculis lobortis faucibus sit. Aliquam arcu nisl massa donec duis nibh amet. Amet amet faucibus magna gravida arcu. At natoque erat fames arcu aliquam mattis lacus. Netus at et at quis velit.</p>
            </div>
        </article>
        <article class="mt-8">
            <div class="flex justify-between items-center">
                <h2 class="text-lg font-semibold text-primary">Kelas Lainnya</h2>
                <a href="#/course" class="text-red-600 hover:underline">Semua</a>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <a href="#/course">
                    <img src="/img/bg.jpg" alt="Kelas Populer" class="object-cover w-full"/>
                    <div class="p-4">
                        <h3 class="font-semibold text-primary"><a href="#/course/:id">Nama Kelas</a></h3>
                    </div>
                    </a>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <a href="#/course">
                    <img src="/img/bg.jpg" alt="Kelas Populer" class="object-cover w-full"/>
                    <div class="p-4">
                        <h3 class="font-semibold text-primary"><a href="#/course/:id">Nama Kelas</a></h3>
                    </div>
                    </a>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <a href="#/course">
                    <img src="/img/bg.jpg" alt="Kelas Populer" class="object-cover w-full"/>
                    <div class="p-4">
                        <h3 class="font-semibold text-primary">Nama Kelas</h3>
                    </div>
                    </a>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <a href="#/course">
                    <img src="/img/bg.jpg" alt="Kelas Populer" class="object-cover w-full"/>
                    <div class="p-4">
                        <h3 class="font-semibold text-primary"><a href="#/course/:id">Nama Kelas</a></h3>
                    </div>
                    </a>
                </div>
            </div>
        </article>
    </div>
        `;
  },

  async afterRender() {},
};
export default DetailCourse;
