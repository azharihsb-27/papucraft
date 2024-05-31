import { getAuth,createUserWithEmailAndPassword, signOut } from "firebase/auth";
import app from './firebase-sdk'
import { addUser } from "./api";
import { alertError, alertSuccess } from "./show-alert";

const auth = getAuth(app)
const RegisterInitiator = {
    init({username,email,password,confirm, btnRegister}){
        btnRegister.addEventListener('click',async (ev)=>{
            ev.preventDefault()
            const usernameValue = username.value
            const emailValue = email.value
            const passwordValue = password.value
            const confirmValue = confirm.value

            if(passwordValue !== confirmValue){
                alert('Password not match !')
            }else{
                createUserWithEmailAndPassword(auth, emailValue,passwordValue).then(async (userCredential)=>{
                    const user = userCredential.user
                    const {uid} = user
                    const response = await addUser({usernameValue, emailValue, uid})
                    const {error,message} = response
                    if(!error){
                        signOut(auth).then(()=>{
                            alertSuccess('Register Success!')  
                            setTimeout(() => location.href = '/signin', 3000);
                        }).catch(err=>{
                            alertError(err)
                        })
                    }else{
                        alertError(message)
                    }
                }).catch(err=>{
                    const errCode = err.code
                    const errMessage = err.message
                    alertError(errMessage)
                })
            }
        })
    }
    
}
export default RegisterInitiator