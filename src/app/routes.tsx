// import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthPage} from "@/features/auth/AuthPage";
import DashboardLayout from "@/layouts/DashboardLayout";
import HomeLayout from "@/layouts/HomeLayout";


import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    index:true
  },
  {
    path: "/home",
    element: <HomeLayout />,
  },
])

export const AppRoutes = ()=><RouterProvider router={router}/>


