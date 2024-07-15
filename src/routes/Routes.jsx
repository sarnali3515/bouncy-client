import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Registration></Registration>,
            }
        ]
    },
]);