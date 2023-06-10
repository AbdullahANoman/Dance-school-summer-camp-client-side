import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes/Classes";
import Login from "../Pages/Login/Login";

import DashBoard from "../Layout/DashBoard/DashBoard";
import Register from "../Pages/Register/Register";
import SelectedClass from "../Pages/DashBoard/StudentDashBoard/SelectedClass/SelectedClass";
import EnrolledClass from "../Pages/DashBoard/StudentDashBoard/EnrolledClass/EnrolledClass";
import AddClass from "../Pages/DashBoard/InstructorDashBoard/AddClass/AddClass";
import MyClass from "../Pages/DashBoard/InstructorDashBoard/MyClass/MyClass";
import ManageClasses from "../Pages/DashBoard/AdminDashBoard/ManageClasses/ManageClasses";
import ManageUser from "../Pages/DashBoard/AdminDashBoard/ManageUsers/ManageUser";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/DashBoard/StudentDashBoard/Payment/Payment";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import PaymentHistory from "../Pages/DashBoard/StudentDashBoard/PaymentHistory/PaymentHistory";

// let {user} = useContext(AuthContext)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "student",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "enrolledClass",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path:"paymentHistory",
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageUsers",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "pay/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/pay/${params.id}`),
      },
    ],
  },
]);

export default router;
