import { signOut,getAuth, onAuthStateChanged } from "firebase/auth"
import app from './firebase-sdk'

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
            alert('Logout Success !')
            location.reload()
        }).catch(err=>{
            return err
        })
    })
}

const getSession = () =>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const {accessToken,uid} = user;
          sessionStorage.setItem("user", uid);
          sessionStorage.setItem("token", accessToken);
        } else {
          sessionStorage.clear();
        }
      });
}

export {sessionButton, logout, getSession}