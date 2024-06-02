const Article = {
  async render() {
    return `
            <div class="content">
              <article id="newest-article" class="p-7 lg:p-14">
                <h2 class="text-primary text-xl lg:text-2xl font-medium">Artikel Terbaru</h2>
                <div class="py-2 lg:py-9">
                  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <li class="shadow-xl p-2 rounded-lg">
                      <a href="#/detailarticle/02311">
                        <img
                          src="https://images.unsplash.com/photo-1528360458789-d7774f47397b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
                          <p>Deskripsi</p>
                        </div>
                      </a>
                    </li>
                    <li class="shadow-xl p-2 rounded-lg">
                      <a href="#/detailarticle/02311">
                        <img
                          src="https://images.unsplash.com/photo-1528360458789-d7774f47397b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
                          <p>Deskripsi</p>
                        </div>
                      </a>
                    </li>
                    <li class="shadow-xl p-2 rounded-lg">
                      <a href="#/detailarticle/02311">
                        <img
                          src="https://images.unsplash.com/photo-1528360458789-d7774f47397b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

              <article id="all-article" class="p-7 lg:p-14">
                <h2 class="text-primary text-xl lg:text-2xl font-medium">Semua Artikel</h2>
                <div class="py-2 lg:py-9">
                  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <li class="shadow-xl p-2 rounded-lg">
                      <a href="#/detailarticle/02311">
                        <img
                          src="https://images.unsplash.com/photo-1528360458789-d7774f47397b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
                          <p>Daerah</p>
                        </div>
                      </a>
                    </li>
                    <li class="shadow-xl p-2 rounded-lg">
                      <a href="#/detailarticle/02311">
                        <img
                          src="https://images.unsplash.com/photo-1528360458789-d7774f47397b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
                          <p>Daerah</p>
                        </div>
                      </a>
                    </li>
                    <li class="shadow-xl p-2 rounded-lg">
                      <a href="#/detailarticle/02311">
                        <img
                          src="https://images.unsplash.com/photo-1528360458789-d7774f47397b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
                          <p>Daerah</p>
                        </div>
                      </a>
                    </li>
                    <li class="shadow-xl p-2 rounded-lg">
                      <a href="#/detailarticle/02311">
                        <img
                          src="https://images.unsplash.com/photo-1528360458789-d7774f47397b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
                          <p>Daerah</p>
                        </div>
                      </a>
                    </li>
                    <li class="shadow-xl p-2 rounded-lg">
                      <a href="#/detailarticle/02311">
                        <img
                          src="https://images.unsplash.com/photo-1528360458789-d7774f47397b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
                          <p>Daerah</p>
                        </div>
                      </a>
                    </li>
                    <li class="shadow-xl p-2 rounded-lg">
                      <a href="#/detailarticle/02311">
                        <img
                          src="https://images.unsplash.com/photo-1528360458789-d7774f47397b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

              <article id="recommended-article" class="p-7 lg:p-14">
                <h2 class="text-primary text-xl lg:text-2xl font-medium">Rekomendasi Artikel</h2>
                <div class="py-2 lg:py-9">
                  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <li class="shadow-xl p-2 rounded-lg">
                      <a href="#/detailarticle/02311">
                        <img
                          src="https://images.unsplash.com/photo-1528360458789-d7774f47397b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
                          <p>Deskripsi</p>
                        </div>
                      </a>
                    </li>
                    <li class="shadow-xl p-2 rounded-lg">
                      <a href="#/detailarticle/02311">
                        <img
                          src="https://images.unsplash.com/photo-1528360458789-d7774f47397b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <div class="py-2">
                          <h3 class="text-xl text-primary font-semibold">Kebudayaan</h3>
                          <p>Deskripsi</p>
                        </div>
                      </a>
                    </li>
                    <li class="shadow-xl p-2 rounded-lg">
                      <a href="#/detailarticle/02311">
                        <img
                          src="https://images.unsplash.com/photo-1528360458789-d7774f47397b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
