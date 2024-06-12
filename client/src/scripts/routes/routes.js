import Article from '../views/pages/article';
import Course from '../views/pages/course';
import Event from '../views/pages/event';
import Gallery from '../views/pages/gallery';
import Home from '../views/pages/home';
import SignIn from '../views/pages/sign-in';
import SignUp from '../views/pages/sign-up';
import DetailArticle from '../views/pages/detail-artikel';
import AddArticle from '../views/pages/add-article';
import AddKebudayaan from '../views/pages/admin/add-kebudayaan';
import DetailCourse from '../views/pages/detail-course';
import DetailGallery from '../views/pages/detail-gallery';
import UserProfile from '../views/pages/user-profile';
import AddKelas from '../views/pages/admin/add-kelas';
import AddEvent from '../views/pages/add-event';
import AdminArticle from '../views/pages/admin/admin-article';
import AdminCourse from '../views/pages/admin/admin-course';
import AdminGallery from '../views/pages/admin/admin-gallery';
import AdminDashboard from '../views/pages/admin/admin-dashboard';
import AdminUser from '../views/pages/admin/admin-user';
import AdminEvent from '../views/pages/admin/admin-event';
import AdminGalleryDetail from '../views/pages/admin/admin-gallery-detail';
import AdminArticleDetail from '../views/pages/admin/admin-article-detail';
import AdminEventDetail from '../views/pages/admin/admin-event-detail';
import AdminCourseDetail from '../views/pages/admin/admin-course-detail';
import AdminGalleryEdit from '../views/pages/admin/admin-gallery-edit';
import AdminArticleEdit from '../views/pages/admin/admin-article-edit';
import AdminEventEdit from '../views/pages/admin/admin-event-edit';
import AdminCourseEdit from '../views/pages/admin/admin-course-edit';
import EditArticle from '../views/pages/edit-article';
import EditEvent from '../views/pages/edit-event'
import DetailEvent from '../views/pages/detail-event';
import ProfileEdit from '../views/pages/profile-edit';

const userRoutes = {
  '/': Home,
  '/home': Home,
  '/gallery': Gallery,
  '/article': Article,
  '/event': Event,
  '/editevent/:id': EditEvent,
  '/course': Course,
  '/signin': Home,
  '/signup': Home,
  '/article/:id': DetailArticle,
  '/editarticle/:id': EditArticle,
  '/course/:id': DetailCourse,
  '/gallery/:id': DetailGallery,
  '/profile': UserProfile,
  '/profileedit/:id': ProfileEdit,
  '/addarticle': AddArticle,
  '/addevent': AddEvent,
  '/event/:id': DetailEvent,
};

const noSessionRoutes = {
  '/': Home,
  '/home': Home,
  '/gallery': Gallery,
  '/article': Article,
  '/event': Event,
  '/course': Course,
  '/signin': SignIn,
  '/signup': SignUp,
  '/article/:id': DetailArticle,
  '/course/:id': DetailCourse,
  '/gallery/:id': DetailGallery,
  '/event/:id': DetailEvent
};

const adminRoutes = {
  '/': Home,
  '/home': Home,
  '/gallery': Gallery,
  '/article': Article,
  '/event': Event,
  '/course': Course,
  '/signin': SignIn,
  '/signup': SignUp,
  '/article/:id': DetailArticle,
  '/course/:id': DetailCourse,
  '/profile': UserProfile,
  '/profileedit/:id': ProfileEdit,
  '/gallery/:id': DetailGallery,
  '/admindashboard': AdminDashboard,
  '/adminuser': AdminUser,
  '/admingallery': AdminGallery,
  '/admingallerydetail/:id': AdminGalleryDetail,
  '/admingalleryedit/:id': AdminGalleryEdit,
  '/addarticle': AddArticle,
  '/addevent': AddEvent,
  '/addkelas': AddKelas,
  '/adminarticle': AdminArticle,
  '/adminarticledetail/:id': AdminArticleDetail,
  '/adminarticleedit/:id': AdminArticleEdit,
  '/adminevent': AdminEvent,
  '/admineventdetail/:id': AdminEventDetail,
  '/admineventedit/:id': AdminEventEdit,
  '/admincourse': AdminCourse,
  '/admincoursedetail/:id': AdminCourseDetail,
  '/admincourseedit/:id': AdminCourseEdit,
  '/addkebudayaan': AddKebudayaan,
  '/addkelas': AddKelas,
  '/addevent': AddEvent,
  '/editarticle/:id': EditArticle,
  '/editevent/:id': EditEvent,
  '/event/:id': DetailEvent

};

export { userRoutes, noSessionRoutes, adminRoutes };
