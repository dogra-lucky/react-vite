// import {BrowserRouter, Route, Routes} from "react-router-dom";
import { AuthPage } from "@/features/auth/AuthPage";
import DashboardLayout from "@/layouts/DashboardLayout";
import HomeLayout from "@/layouts/HomeLayout";
import { ClientsListPage } from "@/features/clients/list/ClientsListPage";
import {ClientProfilePage} from "@/features/clients/profile/ClientProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    index: true,
  },
  {
    path: "/home",
    element: <HomeLayout />,
  },
  {
    path: "/clients/:id",
    element: <ClientProfilePage />,
  },
  {
    path: "/clients",
    element: <ClientsListPage />,
  },
]);

export const AppRoutes = ()=><RouterProvider router={router}/>


