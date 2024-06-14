import { updateUserProfile } from "./api";
import { token } from "./session-check";
import { alertError, alertSuccess } from "./show-alert";

const editProfileInitiator = {
    init({form, username, email, profile, id}){
        form.addEventListener('submit', async (ev)=>{
            ev.preventDefault()
            const usernameValue = username.value
            const emailValue = email.value
            let file
            if(profile.files){
                file = profile.files
            }


            const dataUser = new FormData()
            dataUser.set('username', usernameValue)
            dataUser.set('email', emailValue)
            if(file.length){
                dataUser.set('file', file[0])
            }

            this._editProfile(id, dataUser)
        })
    },
    async _editProfile(id, dataUser){
        const {success, data, message} = await updateUserProfile(id, dataUser)
        if(success){
            alertSuccess(message)
            setTimeout(()=> location.href = `#/profile`, 3000)
        }else{
            alertError(message)
        }
    }
}

export default editProfileInitiator