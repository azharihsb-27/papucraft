import {addArtikel} from './api'
import {token} from './session-check'
import {alertError, alertSuccess} from './show-alert'
let author
if(token){
    const user = JSON.parse(sessionStorage.getItem('user'))
    const loginMethod = JSON.parse(sessionStorage.getItem('login-method'))
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

const addArtikelInitiator = {
    init({form, judul, source, ringkasan, editorValue, thumbnail}){
        const body = editorValue.innerHTML
        
        form.addEventListener('submit', (ev)=>{
            ev.preventDefault()
            const judulValue = judul.value
            const sourceValue = source.value
            const ringkasanValue = ringkasan.value
            const file = thumbnail.files
            const dataArtikel = new FormData()
            dataArtikel.set('judul', judulValue)
            dataArtikel.set('source', sourceValue)
            dataArtikel.set('ringkasan', ringkasanValue)
            dataArtikel.set('body', body)
            dataArtikel.set('file', file[0])
            dataArtikel.set('uid', author.uid)
            dataArtikel.set('username', username.uid)

            if(body.length < 1){
                alertError('Mohon isi semua input!')
            }else{
                this._addAritkel(dataArtikel)
            }
        })
    },
    async _addAritkel(dataArtikel){
        const {success, data, message} = await addArtikel(dataArtikel)
        if(success){
            alertSuccess(message)
            setTimeout(()=> location.href = '#/article', 3000)
        }else{
            alertError(message)
        }
    }
}
export default addArtikelInitiator