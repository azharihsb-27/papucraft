import { getAuth,createUserWithEmailAndPassword, signOut } from "firebase/auth";
import app from './firebase-sdk'
import { addUser } from "./api";

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
                await addUser({usernameValue, emailValue})
                
                createUserWithEmailAndPassword(auth, emailValue,passwordValue).then((userCredential)=>{
                    const user = userCredential.user
                    const {uid} = user
                    signOut(auth).then(()=>{
                        alert('Register success!')
                        location.href = '/signin'
                    }).catch(err=>{
                        return err
                    })
                }).catch(err=>{
                    const errCode = err.code
                    const errMessage = err.message
                    alert(errMessage)
                    console.log({errCode, errMessage})
                })
            }
        })
    }
    
}
export default RegisterInitiator