import {BrowserRouter, Route, Routes} from "react-router-dom";
import { AuthPage } from "@/features/auth/AuthPage";

export const AppRoutes = ()=>{
    return (<BrowserRouter>
    <Routes>
        <Route path="/login" Component={AuthPage} />
        <Route/>

    </Routes>
    </BrowserRouter>)
}
