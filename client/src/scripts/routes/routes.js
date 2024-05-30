import Article from '../views/pages/article';
import Course from '../views/pages/course';
import Event from '../views/pages/event';
import Gallery from '../views/pages/gallery';
import Home from '../views/pages/home';
import SignIn from '../views/pages/sign-in';
import SignUp from '../views/pages/sign-up';


let routes 
 if(sessionStorage.getItem('token')){
  routes = {
    '/': Home,
    '/home': Home,
    '/gallery': Gallery,
    '/article': Article,
    '/event': Event,
    '/course': Course,
    '/signin': Home,
    '/signup': Home,
  }
 }else{
  routes = {
    '/': Home,
    '/home': Home,
    '/gallery': Gallery,
    '/article': Article,
    '/event': Event,
    '/course': Course,
    '/signin': SignIn,
    '/signup': SignUp,
  }
 }


export default routes;
