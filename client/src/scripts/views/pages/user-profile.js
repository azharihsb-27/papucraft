import { getUserProfile } from "../../utils/api"

const UserProfile = {
    async render(){
        return `
            <div class="content p-7 lg:p-14">
                <h2 class="text-primary text-xl lg:text-2xl font-medium">Profil User</h2>
                <div class="w-full flex md:justify-center mt-2 gap-5">
                    <div class="w-auto md:w-2/5 p-4 flex flex-col items-center bg-slate-300 gap-2 rounded-md mb-4">
                        <img class="w-[175px] h-[175px] rounded-full" id="profile-image" alt="profile image">
                        <h3 class="text-xl font-semibold" id="profile-name"></h3>
                    </div>
                    <div class="md:w-2/5 flex flex-col bg-slate-300 gap-5 p-4 rounded-md">
                        <div class="flex w-full items-center">
                        <h4 class="text-lg">Artikel Anda</h4>
                        <a href="/#/addarticle" class="w-[150px] text-center px-2 bg-green-500 rounded-md ml-auto">Tambah Artikel</a>
                        </div>
                        <div class="px-4" id="artikel-anda">
                            <p>Belum Ada Artikel
                        </div>

                        <div class="flex w-full items-center">
                        <h4 class="text-lg">Acara Anda</h4>
                        <a href="/#/addarticle" class="w-[150px] text-center px-2 bg-green-500 rounded-md ml-auto">Tambah Acara</a>
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


        if(loginMethod === 'google'){
            image.setAttribute('src', user.photoURL)
            name.textContent = user.displayName
        }else{
            const {data} = await getUserProfile(user.uid)
            name.textContent = data.username
        }
    }
}

export default UserProfile