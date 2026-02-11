import {BrowserRouter, Route, Routes} from "react-router-dom";
import { AuthPage } from "@/features/auth/AuthPage";
import DashboardLayout from "@/layouts/DashboardLayout";
import HomeLayout from "@/layouts/HomeLayout";
export const AppRoutes = ()=>{
    return (<BrowserRouter>
    <Routes>
        <Route path="/login" Component={AuthPage} />
        <Route path="/"  index={true} Component={DashboardLayout} />
        <Route path="/home" Component={HomeLayout} />

    </Routes>
    </BrowserRouter>)
}
