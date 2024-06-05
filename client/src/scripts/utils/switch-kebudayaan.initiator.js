const RENDER_EVENT = 'RENDER_EVENT'
let data 
const SwitchKebudayaanInitiator= {
    init({wrapper, allData,button}){
        const musikData = allData.filter(data=> data.kategori == 'Alat Musik')
        const makananData = allData.filter(data=> data.kategori == 'Makanan')
        button.forEach(btn => {
            btn.addEventListener('click', (ev)=>{
                ev.stopPropagation()
                console.log(btn.getAttribute('id'))
                if(btn.getAttribute('id') == 'tarian'){
                    data = allData.filter(data=> data.kategori == 'Tarian')
                    this._renderChanges(wrapper, musikData)
                    document.dispatchEvent(new Event(RENDER_EVENT))
                }
            })
        });
    },
    _renderChanges(wrapper, data){
        document.addEventListener(RENDER_EVENT, ()=>{
            // wrapper.innerHTML = ''
            wrapper.innerHTML += data.map(budaya=>{
              return `
              <div class="group rounded-md">
                <a href="#/gallery/${budaya.id}" class="relative">
                  <img
                    src="${budaya.thumbnail}" class="w-full h-full block m-auto rounded-md"
                  />
                  <div class="w-full h-full top-0 left-0 absolute bg-black/30 opacity-0 duration-300 rounded-md group-hover:opacity-100">
                    <h3 class="text-white text-xl inset-4 absolute">${budaya.nama}</h3>
                  </div>
                </a>
              </div>`  
            }).join('')
          })
    }
}

export default SwitchKebudayaanInitiator