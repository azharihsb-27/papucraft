import Article from "../views/pages/article";
import Course from "../views/pages/course";
import Event from "../views/pages/event";
import Gallery from "../views/pages/gallery";
import Home from "../views/pages/home";
import SignIn from "../views/pages/sign-in";
import SignUp from "../views/pages/sign-up";
import DetailArticle from "../views/pages/detail-artikel";
import AddArticle from "../views/pages/add-article";
import AddKebudayaan from "../views/pages/add-kebudayaan";
import DetailCourse from "../views/pages/detail-course";
import DetailGallery from "../views/pages/detail-gallery";
import { token } from "../utils/session-check";
import UserProfile from "../views/pages/user-profile";
import AddKelas from "../views/pages/add-kelas";
import AdminArticle from "../views/pages/admin/admin-article";
import AdminCourse from "../views/pages/admin/admin-course";
import AdminGallery from "../views/pages/admin/admin-gallery";

const userRoutes = {
  "/": Home,
  "/home": Home,
  "/gallery": Gallery,
  "/article": Article,
  "/event": Event,
  "/course": Course,
  "/signin": Home,
  "/signup": Home,
  "/article/:id": DetailArticle,
  "/course/:id": DetailCourse,
  "/gallery/:id": DetailGallery,
  "/addarticle": AddArticle,
  "/addkebudayaan": AddKebudayaan,
  "/profile": UserProfile,
  "/addkelas": AddKelas
}

const noSessionRoutes = {
  "/": Home,
  "/home": Home,
  "/gallery": Gallery,
  "/article": Article,
  "/event": Event,
  "/course": Course,
  "/signin": SignIn,
  "/signup": SignUp,
  "/article/:id": DetailArticle,
  "/course/:id": DetailCourse,
  "/gallery/:id": DetailGallery,
  "/adminarticle": AdminArticle,
  "/admincourse": AdminCourse,
  "/admingallery": AdminGallery
}

export {userRoutes, noSessionRoutes};
