import { signOut,getAuth, onAuthStateChanged, getRedirectResult } from "firebase/auth"
import app from './firebase-sdk'
import { alertSuccess } from "./show-alert"
import { isAdminCheck } from "./api"

const auth = getAuth(app)

const user = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {uid: '0'}

const sessionButton = ({btnLogin, btnLogout, btnRegister}) =>{
    if(sessionStorage.getItem('token')){
        btnLogin.classList.add('hidden')
        btnLogout.classList.remove('hidden')
        btnRegister.classList.add('hidden')
    }else{
        btnLogin.classList.remove('hidden')
        btnLogout.classList.add('hidden')
        btnRegister.classList.remove('hidden')
    }
}

const logout = (btnLogout) =>{
    btnLogout.addEventListener('click', (ev)=>{
        ev.preventDefault()
        signOut(auth).then(()=>{
            alertSuccess('Logout Success!')
            setTimeout(()=> location.reload(),3000)
        }).catch(err=>{
            return err
        })
    })
}

const getSession = () =>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            if(user.emailVerified){
                const {accessToken,uid, displayName, photoURL} = user;
                const userProfile = {displayName, photoURL, uid}
                sessionStorage.setItem("token", accessToken);
                sessionStorage.setItem("user", JSON.stringify(userProfile));
                sessionStorage.setItem("loginMethod",'google');
            }else{
                const {accessToken,uid} = user;
                const userProfile = {accessToken, uid}
                sessionStorage.setItem("token", accessToken);
                sessionStorage.setItem("user", JSON.stringify(userProfile));
                sessionStorage.setItem("loginMethod",'non-google');
            }
        } else {
          sessionStorage.clear();
        }
    });
}

const isAdmin = async () =>{
    return await isAdminCheck(user.uid)
}


const token = sessionStorage.getItem('token')

export {sessionButton, logout, getSession, token, isAdmin}