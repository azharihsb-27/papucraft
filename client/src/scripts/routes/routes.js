import Article from '../views/pages/article';
import Course from '../views/pages/course';
import Event from '../views/pages/event';
import Gallery from '../views/pages/gallery';
import Home from '../views/pages/home';
import SignIn from '../views/pages/sign-in';
import SignUp from '../views/pages/sign-up';
import DetailArticle from '../views/pages/detail-artikel';
import AddArticle from '../views/pages/add-article';
import AddKebudayaan from '../views/pages/add-kebudayaan';

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
    '/article/:id': DetailArticle,
    '/addarticle': AddArticle,
    '/addkebudayaan': AddKebudayaan,
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
    '/article/:id': DetailArticle,
  }
 }


export default routes;
