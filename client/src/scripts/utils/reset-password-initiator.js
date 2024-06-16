import { errorResult } from '../../../../api/src/result/result'
import { sendResetPassword } from './api'

const resetPasswordInitiator = {
    init({btnReset, linkReset, email}){
        btnReset.addEventListener('click', () => this._sendResetLink(email, linkReset))
    },
    async _sendResetLink(email, linkReset){
        console.log('tes')
        const {success,data, message} = await sendResetPassword(email)
        if(success){
            linkReset.classList.remove('hidden')
            linkReset.href = data
        }else{
            errorResult(message)
        }
    }
}

export default resetPasswordInitiator