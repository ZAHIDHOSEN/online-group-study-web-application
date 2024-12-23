import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Home/Register/Register";
import Login from "../Pages/Login/Login";
import CreateAssignment from "../Pages/Create/CreateAssignment";
import PrivetRoute from "./PrivetRoute";
import AssignmentPage from "../Pages/Assignment/AssignmentPage";
import Details from "../Pages/Details/Details";
import AssignmentSub from "../Pages/Submited/AssignmentSub";
import MySubmission from "../Pages/MySubmission/MySubmission";


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

        },
        {
          path: 'assignPage',
          element: <AssignmentPage></AssignmentPage>
          
        },
        {
          path: 'assignments/:id',
          element: <PrivetRoute>
            <Details></Details>
          </PrivetRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/assignments/${params.id}`)
        },
        {
          path: 'submission/:id',
          element:<PrivetRoute>
            <AssignmentSub></AssignmentSub>
          </PrivetRoute>
        },
        {
          path: 'mySubmission',
          element:<PrivetRoute>
            <MySubmission></MySubmission>
          </PrivetRoute>
        }

      ]
    },
  ]);

  export default router;