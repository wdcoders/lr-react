import { createBrowserRouter } from "react-router-dom";
import Login from "./views/admin/auth/Login";
import NotFound from "./views/admin/NotFound";
import Register from "./views/admin/auth/Register";
import Users from "./views/admin/Users";
import GuestLayout from "./views/admin/layouts/auth/GuestLayout";
import Dashboard from "./views/admin/Dashboard";
import MasterLayout from "./views/admin/layouts/base/MasterLayout";

// Users
import UserIndex from "./views/admin/users/Index";
import UserCreate from "./views/admin/users/Create";
import UserUpdate from "./views/admin/users/Update";

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <GuestLayout />,
        children: [
            {
                path: "",
                element: <Login />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/admin",
        element: <MasterLayout />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "users",
                element: <UserIndex />,
            },
            {
                path: "users/create",
                element: <UserCreate />,
            },
            {
                path: "users/:id/edit",
                element: <UserUpdate />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
