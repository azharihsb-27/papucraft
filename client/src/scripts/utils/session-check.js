import { signOut,getAuth, onAuthStateChanged, getRedirectResult } from "firebase/auth"
import app from './firebase-sdk'
import { alertSuccess } from "./show-alert"

const auth = getAuth(app)

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
            const {accessToken,uid, displayName, photoURL} = user;
            if(user.emailVerified){
                const userProfile = {displayName, photoURL, uid}
                sessionStorage.setItem("token", accessToken);
                sessionStorage.setItem("user", JSON.stringify(userProfile));
                sessionStorage.setItem("loginMethod",'google');
            }else{
                sessionStorage.setItem("token", accessToken);
                sessionStorage.setItem("user", uid);
                sessionStorage.setItem("loginMethod",'non-google');
            }
        } else {
          sessionStorage.clear();
        }
    });
}

export {sessionButton, logout, getSession}