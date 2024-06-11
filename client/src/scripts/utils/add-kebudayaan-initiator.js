import {addKebudayaan, getUserProfile} from './api'
import {token} from './session-check'
import {alertError, alertSuccess} from './show-alert'
let author


const addKebudayaanInitiator = {
    init({form, nama, asalDaerah, source, kategori, deskripsi, thumbnail}){
        form.addEventListener('submit', async (ev)=>{
            ev.preventDefault()
            const namaValue = nama.value
            const asalDaerahValue = asalDaerah.value
            const sourceValue = source.value
            const kategoriValue = kategori.value
            const deskripsiValue = deskripsi.value
            const file = thumbnail.files

            if(token){
                const user = JSON.parse(sessionStorage.getItem('user'))
                const loginMethod = sessionStorage.getItem('loginMethod')
                if(loginMethod == 'google'){
                    const {uid, displayName} = user
                    author = {
                        uid, username: displayName
                    }
                }else{
                    const userData = await getUserProfile(user.uid)
                    const {username, uid} = userData.data
                    author = {
                        uid, username
                    }
                }
            }

            const dataKebudayaan = new FormData()
            dataKebudayaan.set('nama', namaValue)
            dataKebudayaan.set('asal_daerah', asalDaerahValue)
            dataKebudayaan.set('source', sourceValue)
            dataKebudayaan.set('kategori', kategoriValue)
            dataKebudayaan.set('deskripsi', deskripsiValue)
            dataKebudayaan.set('file', file[0])
            dataKebudayaan.set('uid', author.uid)
            dataKebudayaan.set('username', author.username)

            this._addKebudayaan(dataKebudayaan)

        })
    },
    async _addKebudayaan(dataKebudayaan){
        const {success, data, message} = await addKebudayaan(dataKebudayaan)
        if(success){
            alertSuccess(message)
            setTimeout(()=> location.href = '#/gallery', 3000)
        }else{
            alertError(message)
        }
    }
}
export default addKebudayaanInitiator