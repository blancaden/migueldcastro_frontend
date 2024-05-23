import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import HomeView from "../views/publicViews/HomeView";
import AboutMeView from "../views/publicViews/AboutMeView";
import LayoutPrivate from "../layout/LayoutPrivate";
import AdminWorkshop from '../views/privateViews/AdminWorkshopView';
import AdminFormView from '../views/privateViews/AdminFormView';
import AdminBlogView from '../views/privateViews/AdminBlogView';
import TherapyView from '../views/publicViews/TherapyView';
import WorkshopView from '../views/publicViews/WorkshopView';
import CoachingView from '../views/publicViews/CoachingView';
import EqualityView from '../views/publicViews/EqualityView';
import BlogView from '../views/publicViews/BlogView';
import ContactView from '../views/publicViews/ContactView';
import AdminLoginView from "../views/privateViews/AdminLoginView";
import BlogDetailView from "../views/publicViews/BlogDetailView";
import WorkshopDetailView from "../views/publicViews/WorkshopDetailView";


export const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,

    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: "/sobremi",
        element: <AboutMeView />,
      },
      {
        path: "/terapia",
        element: <TherapyView />,
      },
      {
        path: "/talleres",
        element: <WorkshopView />,
      },
      {
        path: "/coaching",
        element: <CoachingView />,
      },

      {
        path: "/igualdad",
        element: <EqualityView />,
      },
      {
        path: "/blog",
        element: <BlogView />,
      },
      {
        path: "/contacto",
        element: <ContactView />,
      },
      {
        path: "/login",
        element: <AdminLoginView />,
      },
      {
        path: "/taller",
        element: <WorkshopDetailView />,
      },
      {
        path: "/taller/:id",
        element: <WorkshopDetailView />,
      },
      {
        path: "/articulo",
        element: <BlogDetailView />,
      },

      {
        path: "/articulo/:id",
        element: <BlogDetailView />,
      },
    ],
  },
  {
    path: "/workshop",
    element: <LayoutPrivate />,
    children: [
      {
        index: true,
        element: <AdminWorkshop />,
      },
      {
        path: "/workshop/adminform",
        element: <AdminFormView />,
      },
      {
        path: "/workshop/adminblog",
        element: <AdminBlogView />,
      },
    ],
  },
]);
