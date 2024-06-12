import { editKebudayaan , getUserProfile} from "./api";
import {token} from './session-check'
import {alertError, alertSuccess} from './show-alert'

const editKebudayaanInitiator = {
    init({form, nama, asalDaerah, source, kategori, deskripsi, thumbnail, id}){
        form.addEventListener('submit', async (ev)=>{
            ev.preventDefault()
            const namaValue = nama.value
            const asalDaerahValue = asalDaerah.value
            const sourceValue = source.value
            const kategoriValue = kategori.value
            const deskripsiValue = deskripsi.value
            let file 
            if(thumbnail.files){
                file = thumbnail.files
            }

            let author
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

            if(file.length){
                dataKebudayaan.set('file', file[0])
            }

            this._editKebudayaan(id,dataKebudayaan)

        })
    },
    async _editKebudayaan(id,dataKebudayaan){
        const {success, data, message} = await editKebudayaan(id,dataKebudayaan)
        if(success){
            alertSuccess(message)
            setTimeout(()=> location.href = `#/gallery/${id}`, 3000)
        }else{
            alertError(message)
        }
    }
}
export default editKebudayaanInitiator