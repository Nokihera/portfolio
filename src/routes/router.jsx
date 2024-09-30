import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import ProjectsPage from "../pages/ProjectsPage";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import AdminSignInPage from "../pages/AdminSignInPage";
import AdminDashboard from "../pages/AdminDashboard";
import MessageDetail from "../pages/MessageDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/projects",
                element: <ProjectsPage/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    },
    {
        path: "/login",
        element: <AdminSignInPage/>
    },
    {
        path: "/admin",
        element: <AdminDashboard/>
    },
    {
        path: "/admin/:id",
        element: <MessageDetail/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
])
export default router