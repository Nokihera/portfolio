import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import ProjectsPage from "../pages/ProjectsPage";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import AdminSignInPage from "../pages/AdminSignInPage";

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
        path: "*",
        element: <NotFound/>
    }
])
export default router