import {api} from "@/services/axois";

export const loginRoute = (data: any) => api.post("/v1/auth/login", data);
export const logoutRoute = () => api.post("/v1/auth/logout");
