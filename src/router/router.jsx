import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Home/Register/Register";
import Login from "../Pages/Login/Login";
import CreateAssignment from "../Pages/Create/CreateAssignment";
import PrivetRoute from "./PrivetRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Route not Found</h2>,
      children: [
        {
            path: '/',
            element: <Home></Home>

        },
        {
            path: 'register',
            element:<Register></Register>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path: 'createAssign',
          element:<PrivetRoute>
            <CreateAssignment></CreateAssignment>
          </PrivetRoute>

        }
      ]
    },
  ]);

  export default router;