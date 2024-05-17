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



export const Router = createBrowserRouter([

    {
        path:'/',
        element: 
             <LayoutPublic/>,

        children:[
            {
                index: true,
                element:(
                        <HomeView/> 
                )
            }, 
            {
                path: '/sobremi',
                element: <AboutMeView/>
            },
            {
                path: '/terapia',
                element: <TherapyView/>
            },
            {
                path: '/talleres',
                element: <WorkshopView/>
            },
            {
                path: '/coaching',
                element: <CoachingView/>
            },
            
            {
                path: '/igualdad',
                element: <EqualityView/>
            },
            {
                path: '/blog',
                element: <BlogView/>
            },
            {
                path: '/contacto',
                element: <ContactView/>
            },
            {
                path: '/login',
                element: <AdminLoginView/>
            },
            
            
        ]
    },
    {
            path: '/workshop',
            element: <LayoutPrivate/>,
            children: [
                { index: true, element: <AdminWorkshop /> },
                { path: '/workshop/adminform', element: <AdminFormView /> },
                { path: '/workshop/adminblog', element: <AdminBlogView /> },
            ]
        }
    ]);










// {
//     path: '/workshop',
//     element: <LayoutPrivate />,
//     children: [
//         { index: true, element: <AdminWorkshop /> },
//         { path: '/workshop/adminform', element: <AdminFormView /> },
//         { path: '/workshop/adminblog', element: <AdminBlogView /> },
//     ]
// }
// ]);








































// import { createBrowserRouter } from "react-router-dom";
// import LayoutPublic from "../layout/LayoutPublic";
// import HomeView from "../views/publicViews/HomeView";
// import AboutMeView from "../views/publicViews/AboutMeView";
// import LayoutPrivate from "../layout/LayoutPrivate";
// import AdminWorkshop from '../views/privateViews/AdminWorkshopView';
// import AdminFormView from '../views/privateViews/AdminFormView';
// import AdminBlogView from '../views/privateViews/AdminBlogView';
// import TherapyView from '../views/publicViews/TherapyView';
// import WorkshopView from '../views/publicViews/WorkshopView';
// import CoachingView from '../views/publicViews/CoachingView';
// import EqualityView from '../views/publicViews/EqualityView';
// import BlogView from '../views/publicViews/BlogView';
// import ContactView from '../views/publicViews/ContactView';
// import AdminLoginView from "../views/privateViews/AdminLoginView";
// import PrivateRoute from './PrivateRoute'


// export const Router = createBrowserRouter([

//     {
//         path:'/',
//         element: 
//              <LayoutPublic/>,

//         children:[
//             {
//                 index: true,
//                 element:(
//                         <HomeView/>
                       
//                 )
//             }, 
//             {
//                 path: '/sobremi',
//                 element: <AboutMeView/>
//             },
//             {
//                 path: '/terapia',
//                 element: <TherapyView/>
//             },
//             {
//                 path: '/talleres',
//                 element: <WorkshopView/>
//             },
//             {
//                 path: '/coaching',
//                 element: <CoachingView/>
//             },
            
//             {
//                 path: '/igualdad',
//                 element: <EqualityView/>
//             },
//             {
//                 path: '/blog',
//                 element: <BlogView/>
//             },
//             {
//                 path: '/contacto',
//                 element: <ContactView/>
//             },
//             {
//                 path: '/login',
//                 element: <AdminLoginView/>
//             },
            
            
//         ]
//     },
//     {
        
//             path: '/workshop',
//             element: <LayoutPrivate/>,
//             children:[
//                 {
//                     index: true,
//                     element: (
//                     <AdminWorkshop/>
//                 )          
//                 },
//                 {
//                     path: '/workshop/adminform',
//                     // element: <AdminFormView/>
//                     element: <PrivateRoute path="/workshop/adminform" element={<AdminFormView />} />
//                 },
//                 {
//                     path: '/workshop/adminblog',
//                     // element: <AdminBlogView/>
//                     element: <PrivateRoute path="/workshop/adminblog" element={<AdminBlogView />} />
//                 },

//             ]
//     }

// ]);