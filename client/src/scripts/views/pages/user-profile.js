import { getArtikelByAuthor, getUserProfile } from "../../utils/api"

const UserProfile = {
    async render(){
        return `
            <div class="content p-7 lg:p-14">
                <h2 class="text-primary text-xl lg:text-2xl font-medium">Profil User</h2>
                <div class="w-full flex flex-col md:flex-row md:justify-center mt-2 gap-5">
                    <div class="w-full md:w-2/5 p-4 flex flex-col items-center shadow-lg gap-2 p-2 rounded-md mb-4">
                        <img class="w-[175px] h-[175px] rounded-full" id="profile-image" alt="profile image">
                        <h3 class="text-xl font-semibold" id="profile-name"></h3>
                    </div>
                    <div class="w-full md:w-2/5 flex flex-col shadow-lg gap-5 p-4 rounded-md">
                        <div class="flex w-full items-center">
                        <h4 class="text-lg">Artikel Anda</h4>
                        <a href="/#/addarticle" class="w-[150px] text-center text-white hover:text-primary px-2 bg-primary hover:border hover:border-1 hover:border-primary hover:bg-transparent rounded-md  ml-auto transition">Tambah Artikel</a>
                        </div>
                        <div class="px-4" id="artikel-anda">
                        </div>

                        <div class="flex w-full items-center">
                        <h4 class="text-lg">Acara Anda</h4>
                        <a href="/#/addarticle" class="w-[150px] text-center text-white hover:text-primary px-2 bg-primary hover:border hover:border-1 hover:border-primary hover:bg-transparent rounded-md ml-auto transition">Tambah Acara</a>
                        </div>
                        <div class="px-4" id="Acara-anda">
                            <p>Belum Ada Acara
                        </div>
                    </div>
                </div>
            </div>
        
        `
    },
    async afterRender(){
        const user = JSON.parse(sessionStorage.getItem('user'))
        const loginMethod = sessionStorage.getItem('loginMethod')
        const image = document.getElementById('profile-image')
        const name = document.getElementById('profile-name')
        const listArtikel = document.getElementById('artikel-anda')

        const artikel = await getArtikelByAuthor(user.uid)
        const dataArtikel = artikel.data

        if(dataArtikel){
            const list = document.createElement('ol')
            list.innerHTML += 
                dataArtikel.map(data=>{
                    return`<li class="flex justify-between my-2">
                        <p class="w-[80%]" overflow-hidden text-truncate>${data.judul}</p>
                        <a href="#/article/${data.id}" target="_blank"><span class="w-[20%] material-symbols-outlined">open_in_new</span></a>
                        </li>`
                }).join('')
            
            listArtikel.appendChild(list)
        }else{
            listArtikel.innerHTML += `<p class="text-sm">Data Tidak Ada</p>`
        }

        if(loginMethod === 'google'){
            image.setAttribute('src', user.photoURL)
            name.textContent = user.displayName
        }else{
            const {data} = await getUserProfile(user.uid)
            name.textContent = data.username
            image.setAttribute('src',data.profile_image)
        }
    }
}

export default UserProfile