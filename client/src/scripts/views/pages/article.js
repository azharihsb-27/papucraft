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
                          <h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
                          <p>Deskripsi</p>
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
                          <p>Deskripsi</p>
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
                          <p>Deskripsi</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </article>

              <article id="all-articles" class="p-7 lg:p-14">
                <h2 class="text-primary text-xl lg:text-2xl font-medium">Semua Artikel</h2>
                <div class="py-2 lg:py-9">
                  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <li class="shadow-xl p-2 rounded-lg hover:-translate-y-1 duration-300">
                      <a href="#/article/:id">
                        <img
                          src="/img/bg.jpg"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
                          <p>Daerah</p>
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
                          <p>Daerah</p>
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
                          <p>Daerah</p>
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
                          <p>Daerah</p>
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
                          <p>Daerah</p>
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
                          <p>Daerah</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </article>

              <article id="recommended-articles" class="p-7 lg:p-14">
                <h2 class="text-primary text-xl lg:text-2xl font-medium">Rekomendasi Artikel</h2>
                <div class="py-2 lg:py-9">
                  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <li class="shadow-xl p-2 rounded-lg hover:-translate-y-1 duration-300">
                      <a href="#/article/:id">
                        <img
                          src="/img/bg.jpg"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
                          <p>Deskripsi</p>
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
                          <p>Deskripsi</p>
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
                          <p>Deskripsi</p>
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

export default Article;
