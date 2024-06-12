import { editKelas,getUserProfile } from "./api";
import { token } from "./session-check";
import { alertError, alertSuccess } from "./show-alert";

const editKelasInitiator = {
    init({form, nama, alamat, deskripsi, thumbnail, id}){
        form.addEventListener('submit',async(ev)=>{
            ev.preventDefault()
            const namaValue = nama.value
            const alamatValue = alamat.value
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

            const dataKelas = new FormData()
            dataKelas.set('nama_kelas', namaValue)
            dataKelas.set('alamat', alamatValue)
            dataKelas.set('deskripsi', deskripsiValue)
            if(file.length){
                dataKelas.set('file', file[0])
            }

            this._editKelas(id,dataKelas)
        })
    },
    async _editKelas(id,dataKelas){
        const {success,data, message} = await editKelas(id,dataKelas)
        if(success){
            alertSuccess(message)
            setTimeout(()=> location.href = `#/course/${id}`, 3000)
        }else{
            alertError(message)
        }
    }
}

export default editKelasInitiator