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
import Update from "../Pages/Update/Update";
import Pending from "../Pages/Pending/Pending";


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
          loader: ({params}) => fetch(`https://assignment-11-server-pi-seven.vercel.app/assignments/${params.id}`)
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
        },
        {
          path: 'update/:id',
          element:<PrivetRoute>
             <Update></Update>
          </PrivetRoute>,
          loader: ({params}) => fetch(`https://assignment-11-server-pi-seven.vercel.app/assignments/${params.id}`)
        },
        {
          path: 'pending',
          element: <PrivetRoute><Pending></Pending></PrivetRoute>
        }

      ]
    },
  ]);

  export default router;